# Project Name : product-management
A product management application developed with TypeScript, MongoDB and Mongoose with zod validation. 

### Project Github repository link: https://github.com/emurmudu/product-management
### Project live server link : https://product-management-sepia.vercel.app

Project Github repository link: https://github.com/emurmudu/product-management
Project live server link : https://product-management-sepia.vercel.app

## Gettting started
Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- MongoDB installed and running locally (if applicable)

### Installation

1. Clone the repository:
- ```git clone https://github.com/emurmudu/product-management```
2. Navigate to the project directory:
- cd your-project
3. Install dependencies:
    ```npm install```
4. Set up environment variables:
- Create a ```.env``` file in the root directory.
- Define any necessary environment variables in the .env file. For example:
    - PORT=5000
    - DB_URI=mongodb://localhost:27017/mydatabase
- Create a new Express project.
- Set up a MongoDB database using Mongoose for storing user and order data.

### Install necessary packages:

- express : 
     ```npm install express```
- Mongoose :
     ```npm install mongoose --save```
- TypeScript :
     ```npm install typescript --save-dev```
- CORS :
     ```npm i cors```
- Dotenv :
     ```npm i dotenv```

### Usage
To run the application, follow these steps:
1. Start the server:
- For development mode : ```npm run start:dev```
- For production mode : ```npm run start:prod```

### API Endpoints
- Procut management root url for CRUD  : 
```/api/products```
- Order management root url for CRUD  : 
```/api/orders```
