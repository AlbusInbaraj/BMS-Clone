## Setup node.js project commands

Step 1: npm init -y
Step 2: npm install express dotenv cors bcrypt jsonwebtoken mongodb moongoose
Step 3: npm install --save-dev nodemon
Step 5: Create folders and files
my-node-api/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── .env
├── server.js
├── package.json
└── nodemon.json

*** nodemon server.js ***
