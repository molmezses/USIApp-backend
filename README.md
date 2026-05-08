# USIApp Backend

USIApp Backend is the API layer of the University-Industry Collaboration Platform.

This backend will serve multiple clients:

- iOS application
- Android application
- Web application

The project is being developed with a modular monolith architecture and is planned to be microservice-ready for future scalability.

## Tech Stack

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma
- Swagger / OpenAPI
- JWT Authentication

## Current Version

v0.1.0

## Current Features

- NestJS backend project initialized
- Health check endpoint added
- Swagger documentation configured
- Base project structure created

## API Documentation

After running the project, Swagger UI is available at:

```txt
http://localhost:3000/api
```

## Health Check

Health check endpoint:

```txt
GET /health
```

Example response:

```json
{
  "status": "ok",
  "app": "USIApp Backend",
  "version": "0.1.0"
}
```

## Project Structure

```txt
src/
 ├── common/
 ├── config/
 ├── database/
 ├── modules/
 ├── app.controller.ts
 ├── app.module.ts
 ├── app.service.ts
 └── main.ts
```

## Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run start:dev
```

The API will run at:

```txt
http://localhost:3000
```

## Git Commit Convention

This project follows a simple conventional commit style:

```txt
feat: new feature
fix: bug fix
docs: documentation change
chore: project maintenance
refactor: code restructuring without changing behavior
```

## Roadmap

```txt
v0.1.0 - Backend initialization, health check, Swagger setup
v0.2.0 - Environment configuration and database setup
v0.3.0 - Authentication module
v0.4.0 - User and profile module
v0.5.0 - Request module
v0.6.0 - Application module
v0.7.0 - Messaging module
v0.8.0 - Notification system
v1.0.0 - Stable API for iOS, Android and Web clients
```
