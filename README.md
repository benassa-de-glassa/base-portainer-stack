# Hello World Express TypeScript Application

This is a simple Hello World application built using Express and TypeScript. The application demonstrates how to set up a basic Express server, define routes, and respond with a "Hello, World!" message.

## Project Structure

```
hello-world-express-ts
├── src
│   ├── app.ts                # Entry point of the application
│   ├── routes
│   │   └── index.ts          # Route definitions
│   └── controllers
│       └── helloController.ts # Controller for handling requests
├── Dockerfile                 # Dockerfile for containerization
├── docker-compose.yml         # Docker Compose configuration
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd hello-world-express-ts
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

You can run the application using Docker Compose:

```
docker-compose up
```

The application will be available at `http://localhost:3000`.

### API Endpoint

- `GET /hello` - Responds with "Hello, World!"

### Building the Docker Image

To build the Docker image manually, you can run:

```
docker build -t hello-world-express-ts .
```

### License

This project is licensed under the MIT License.