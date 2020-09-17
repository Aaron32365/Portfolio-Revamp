require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Make sure it comes back as json

mongoose.connect(`mongodb+srv://Aaron32365:${process.env.PASS}@cluster0.arnyw.mongodb.net/portfolio-v2?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

// static assets
app.use(express.static(path.join(__dirname, "public")));

// middleware for parsing req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("social-calendar-ui/build"));
}

const mongoose_db = mongoose.connection;

// api routes
app.use(require("./routes/api-routes"));

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "/portfolio-ui/build/index.html"));
})

mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})


mongoose_db.on("error", function() {
  console.error("database failed to open");
})
