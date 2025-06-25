// comment-service.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const amqp = require('amqplib');

const app = express();
const PORT = 3003;

mongoose.connect('mongodb://localhost:27017/commentdb', { useNewUrlParser: true, useUnifiedTopology: true });
const Comment = mongoose.model('Comment', { post_id: String, text: String, userId: String });

app.use(bodyParser.json());

// Connect to RabbitMQ
let channel;
amqp.connect({
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "guest",
    password: "guest",
    frameMax: 8192, // Set frameMax >= 8192
  }).then((conn) => {
  return conn.createChannel();
}).then((ch) => {
  channel = ch;
  return channel.assertQueue('comments');
}).catch(console.warn);

app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json({ comments });
});

app.get('/comments/:userId', async (req, res) => {
  const userId = req.params.userId;
  const comments = await Comment.find({ userId });
  res.json({ comments });
});

app.post('/comments', async (req, res) => {
  const { post_id, text, userId } = req.body;
  const newComment = new Comment({ post_id, text, userId });
  await newComment.save();

  // Notify the Post Service about the new comment directly via RabbitMQ
  channel.sendToQueue('comments', Buffer.from(JSON.stringify(newComment)));

  res.status(201).json(newComment);
});

app.listen(PORT, () => {
  console.log(`Comment Service running on port ${PORT}`);
});
