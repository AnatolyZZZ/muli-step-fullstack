import express  from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import path from "path";
import { fileURLToPath } from "url";
import { user_router } from "./routes/Users.js";
import { answers_router } from "./routes/Answers.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const server = express();
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.listen(process.env.PORT, ()=>{
    console.log(`run on port ${process.env.PORT}`);
  })

server.use('/api/users', user_router);
server.use('/api/answers', answers_router)

server.use(express.static(path.resolve(__dirname, "./cleent/build")));
server.use(express.static(path.join(__dirname, 'client/build')));

server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
  