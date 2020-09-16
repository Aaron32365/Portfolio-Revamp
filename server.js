const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// connect mongoose db (options to remove depracation warnings)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const mongoose_db = mongoose.connection;


// static assets
app.use(express.static(path.join(__dirname, "public")));

// middleware for parsing req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("social-calendar-ui/build"));
}


// api routes
app.use(require("./routes/api-routes"));

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "/portfolio-ui/build/index.html"));
})

const PORT = process.env.PORT || 3001;

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './portfolio-ui/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})


mongoose_db.on("error", function() {
  console.error("database failed to open");
})
