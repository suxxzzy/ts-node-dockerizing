import { createServer, IncomingMessage, ServerResponse } from "http";
import { defaultCorsHeader } from "./config/cors";

const port = 5000;
const ip = "0.0.0.0"; // 이 번호로 설정해주지 않으면 작동하지 않음.

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("ServerResponse ");
    res.writeHead(200, defaultCorsHeader);
    res.end("helloworld.", "utf8");
  } else if (req.method === "POST" && req.url === "/") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      data = data.toLowerCase();
      res.writeHead(201, defaultCorsHeader);
      res.end(data);
    });
  } else {
    res.writeHead(404, defaultCorsHeader);
    res.end();
  }
});

server.listen(port, ip, () => {
  console.log(`http server listening on ${port}!!`);
});

//주석 달아서 수정 테스트
