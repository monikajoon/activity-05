
# 🚀 Hi, I'm Abhishek Karia! 👋
I'm a full stack developer and Microservice enthusiast 


# Microservices Patterns with Node.js

This Project covers Database Per Service Pattern, Messaging Pattern for communication (RabbitMQ). Aggregator Patters for cross db join.


## Tech Stack

**Server:** [Node.js](https://nodejs.org/en/download), [Express](https://expressjs.com/)


**Database:** [MongoDB](https://www.mongodb.com/docs/manual/installation/)

**Queue:** [RabbitMQ](https://www.rabbitmq.com/download.html)

**Documentation:** [Thunder client](https://www.thunderclient.com/)


## Installation

Clone the project

```bash
  git clone https://github.com/abhishekkaria/social-media-microservice
```

Go to the project directory

```bash
  cd social-media-microservice
```

Install dependencies

```bash
  cd aggregator-service  # Navigate to aggregator-service folder
  npm install

  cd ../comment-service  # Navigate to comment-service folder
  npm install

  cd ../user-service  # Navigate to user-service folder
  npm install

  cd ../post-service  # Navigate to post-service folder
  npm install

```


## Environment Variables

Port, RabbitMQ, MongoDB and other details can be confired in index.js file of relevant service.

`Note: carefully configure User service, Post service and Post service URLs in Aggregator service.`


## Running the Services

In each service folder (`aggregator-service/`, `comment-service/`, `user-service/`, `post-service/`), run the following command to install dependencies:

```bash
cd aggregator-service  # Navigate to aggregator-service folder
npm start

cd ../comment-service  # Navigate to comment-service folder
npm start

cd ../user-service  # Navigate to user-service folder
npm start

cd ../post-service  # Navigate to post-service folder
npm start
```


## Documentation

For API Doc we used Thunder Client VSCode Plugin. every service has api doc filder which has API Doc file . which can be imported in VSCode.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-karia-8b8370149/)
