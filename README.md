# Vynq Chat

A real-time chat application built with the MERN stack, Socket.io, and JWT authentication.

- **Live App:** https://vynq-chat.vercel.app
- **API:** https://vynq-chat-backend.onrender.com

## Features

- 🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
- 🎃 Authentication && Authorization with JWT
- 👾 Real-time messaging with Socket.io
- 🚀 Online user status (Socket.io and React Context)
- 👌 Global state management with Zustand
- 🐞 Error handling both on the server and on the client
- ⏳ And much more!

## Tech Stack

**Frontend:** React (Vite), TailwindCSS, DaisyUI, Zustand, Socket.io Client, React Router
**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io, JWT, bcrypt

## Getting Started

### 1. Clone the repository

```shell
git clone https://github.com/anumukul/vynq-chat.git
cd vynq-chat
```

### 2. Setup the `.env` file

Create a `backend/.env` file (see `backend/.env.example`):

```js
PORT=5001
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=replace_with_a_long_random_secret
NODE_ENV=development
```

### 3. Install dependencies

```shell
npm install
npm install --prefix frontend
```

### 4. Run the app in development

```shell
npm run server
npm run dev --prefix frontend
```

The frontend runs on `http://localhost:3000` and proxies API requests to the backend on `http://localhost:5001`.

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

## Deployment

- **Frontend:** deployed on [Vercel](https://vynq-chat.vercel.app)
- **Backend:** deployed on [Render](https://vynq-chat-backend.onrender.com)

Set the same environment variables listed above in your hosting provider's dashboard, and make sure the deployed frontend origin is included in the backend CORS allowlist.

## License

This project is licensed under the terms of the [LICENSE](./LICENSE).
