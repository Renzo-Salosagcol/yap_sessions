import { io } from "socket.io-client";

const EXPRESS_SERVER_URL = process.env.EXPRESS_SERVER_URL || "http://localhost:3001";

export const socket = io(EXPRESS_SERVER_URL);

socket.on("connect", () => {
  console.log("WebSocket Connected");
});

socket.on("welcome", (message) => {
  console.log("Received welcome message from server:", message);
});

socket.on("connect_error", (error) => {
  console.error("WebSocket connection failed:", error);
});