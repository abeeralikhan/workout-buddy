const mongoose = require("mongoose");
const { createServer } = require("http");
const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT;

const server = createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB atlas");
  })
  .catch((error) => console.log(error));

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
