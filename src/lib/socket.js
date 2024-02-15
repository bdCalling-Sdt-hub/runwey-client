import io from "socket.io-client";

const socket = io("ws://runweymailer.com");

export default socket;
