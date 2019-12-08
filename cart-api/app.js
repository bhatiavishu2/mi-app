const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors"),
  bodyParser = require("body-parser");
const port = process.env.PORT;
const router = require("./routes/router"),
  database = require("./db/db"),

app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/cart", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
