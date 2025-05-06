# Node.js Agency and Client API

This project is a simple REST API built with Node.js, MongoDB, and JWT-based authentication. It provides CRUD operations for managing agencies and clients.

## Features

- **Token-based authentication** for secure access.
- **Create agency and client** in a single request.
- **Update client** details.
- **Get the top client** with the maximum total bill for an agency.
- MongoDB integration for data storage.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store agency and client data.
- **JWT (JSON Web Token)**: For authentication.
- **Mongoose**: MongoDB object modeling for Node.js.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.
- MongoDB database (you can use MongoDB Atlas for a cloud database).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/agency-client-api.git
    cd agency-client-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following variables:

    ```
    PORT=5000
    MONGO_URI=mongodb+srv://<your-mongodb-uri>
    JWT_SECRET=your-secret-key
    ```

4. Run the application:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:5000`.

## API Endpoints

### 1. **POST /api/agency-client**

Create a new agency and client.

- **Request body**:

    ```json
    {
      "agency": {
        "agencyId": "AG001",
        "name": "Pradeep Tech Solutions",
        "address1": "123 Main St",
        "address2": "Suite 101",
        "state": "Rajasthan",
        "city": "Jaipur",
        "phoneNumber": "9876543210"
      },
      "client": {
        "clientId": "CL001",
        "name": "Client One",
        "email": "client@example.com",
        "phoneNumber": "9123456789",
        "totalBill": 10000
      }
    }
    ```

- **Response**:

    ```json
    {
      "agency": {
        "_id": "agency-id",
        "agencyId": "AG001",
        "name": "Pradeep Tech Solutions",
        "address1": "123 Main St",
        "address2": "Suite 101",
        "state": "Rajasthan",
        "city": "Jaipur",
        "phoneNumber": "9876543210"
      },
      "client": {
        "_id": "client-id",
        "clientId": "CL001",
        "name": "Client One",
        "email": "client@example.com",
        "phoneNumber": "9123456789",
        "totalBill": 10000
      }
    }
    ```

### 2. **PUT /api/clients/:clientId**

Update client details by clientId.

- **Request body**:

    ```json
    {
      "name": "Updated Client Name",
      "email": "updated@example.com",
      "phoneNumber": "9876543210",
      "totalBill": 15000
    }
    ```

- **Response**:

    ```json
    {
      "_id": "client-id",
      "clientId": "CL001",
      "name": "Updated Client Name",
      "email": "updated@example.com",
      "phoneNumber": "9876543210",
      "totalBill": 15000
    }
    ```

### 3. **GET /api/top-client**

Get the top client with the highest total bill along with agency details.

- **Response**:

    ```json
    {
      "agencyName": "Pradeep Tech Solutions",
      "clientName": "Client One",
      "totalBill": 10000
    }
    ```

## Authentication

All endpoints except `/api/login` require a valid JWT token in the `Authorization` header.

- **Login Endpoint**: `/api/login`
    - **Request body**:

        ```json
        {
          "username": "admin",
          "password": "your-password"
        }
        ```

    - **Response**:

        ```json
        {
          "token": "your-jwt-token"
        }
        ```

    Use this token in the `Authorization` header as `Bearer <token>` for accessing protected routes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
#
