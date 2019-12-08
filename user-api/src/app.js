const express = require("express"),
  helmet = require("helmet");
const port = process.env.PORT;
const userRouter = require("./routers/user");
require("./db/db");

const app = express();
app.use(helmet());

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
