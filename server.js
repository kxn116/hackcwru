const express = require("express"),
  app = express(),
  http = require("http").Server(app),
  bodyParser = require("body-parser"),
  engines = require("consolidate"),
  cookieParser = require("cookie-parser"),
  helmet = require("helmet");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.set("view engine", "ejs");
app.use("/", require("./route/main"));
app.use("/rsrc", express.static("./rsrc"));
http.listen(4000, function() {
  console.log("server running on 4000");
});
