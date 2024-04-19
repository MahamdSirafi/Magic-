## Server-side Instructions

1. Install the required dependencies:

   npm install

2. Start the server:

   npm start

3. The server will run on `http://localhost:3000`.

## API Endpoints

- `POST /items`: Create a new item.
- `POST /movers`: Create a new movers.
- `POST /mover_item`: Create a new item on mover.
- `GET /movers/done`: Get all movers who terminated their work.
- `PATCH /movers/:id/resting`: Update status of a specific mover identified by `id` to resting.
- `PATCH /movers/:id/loading`: Update status of a specific mover identified by `id` to loading.
- `PATCH /movers/:id/on_mission`: Update status of a specific mover identified by `id` to on_mission.
- `PATCH /movers/:id/done`: Update status of a specific mover identified by `id` to done.
  Make sure to review the API documentation for more details on request and response formats.

## Setting Up .env File

This guide explains how to set up an `.env` file to configure environment variables.

### Steps

1. Create a new file and name it `.env` in your project directory.

2. Open the `.env` file using any text editor.

3. Add the environment variables and their values to the file. Write each variable on a separate line in the following format:

Here are some examples:

NODE_ENV=development

PORT=3000

DATABASE_LOCAL=mongodb://127.0.0.1:27017/Magic_Transporters_Database

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js
- Node.js: JavaScript runtime environment
- MongoDB: NoSQL document database

## License

This project is licensed under the [MIT License](LICENSE).
