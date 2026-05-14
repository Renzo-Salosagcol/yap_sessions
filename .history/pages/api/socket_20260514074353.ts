import { io } from "socket.io-client";

const EXPRESS_SERVER_URL = process.env.EXPRESS_SERVER_URL || "https://localhost:3001";

export const socket = io(EXPRESS_SERVER_URL);