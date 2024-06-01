# Alab Mongoose Project

This project is a simple Node.js backend application that uses Express.js for routing and Mongoose for MongoDB object modeling. It provides a RESTful API for managing grades.

## API Endpoints

All API endpoints are prefixed with `/grades`.

- `POST /`: Create a new grade.
- `GET /`: Get all grades.
- `GET /:id`: Get a grade by its ID.
- `PATCH /`: Update a grade.
- `DELETE /`: Delete a grade.

## Dependencies

- express: ^4.19.2
- mongoose: ^8.4.0
- dotenv: ^16.4.5

## Dev Dependencies

- nodemon: ^3.1.2