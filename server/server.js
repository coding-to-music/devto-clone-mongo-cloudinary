require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { createServer } = require("http");
const socketHandlers = require("./utils/socket");

const corsOptions = require("./config/corsOptions");
const dbConn = require("./config/dbConn");

const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const credentials = require("./middleware/credentials");

const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);

mongoose.set("strictQuery", false);

// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dbn6czj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

(async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, dbConn);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error(err);
  }
})();

// custom middleware logger
app.use(logger);
app.use(errorHandler);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));

// built-in middleware for json
app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

// Routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/logout", require("./routes/logout"));
app.use("/refresh", require("./routes/refresh"));
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));
app.use("/comments", require("./routes/comments"));
app.use("/tags", require("./routes/tags"));

const port = process.env.PORT || 5000;
mongoose.connection.once("open", () => {
  const io = new Server(httpServer, { cors: corsOptions });

  socketHandlers(io);

  httpServer.listen(port);
  console.log("Starting server on http://localhost:" + port);
});
