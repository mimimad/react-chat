import io from 'socket.io-client';
import { CONFIG } from "./constants";

const socket = io(CONFIG.baseUrl);

export default socket;