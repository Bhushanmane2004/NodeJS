import ConnectDb from "../db/index.js";
import app from "./app.js";
const port = process.env.PORT;

const db = ConnectDb();

app.get("/test", (req, res) => {
  res.send("hello from test");
});

app.listen(port, () => {
  console.log(`Listen at Port ${port}`);
});
