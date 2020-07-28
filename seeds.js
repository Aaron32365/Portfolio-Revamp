const mongoose = require("mongoose");

const db = require("./model");

// connect mongoose db (options to remove depracation warnings)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const mongoose_db = mongoose.connection;

mongoose_db.on("error", function (err) {
  console.log(err);
});

mongoose_db.once("open", async function () {
  var socialCalendar = new db.PortfolioItem({
    title: "Social Calendar",
    description: "Create an account and add your upcoming events to your calendar, then add your friends and share eachothers schedules! This app uses the 'MERN' stack",
    git: "https://github.com/wbrink/social-calendar",
    app: "https://socialcalendar-app.herokuapp.com/Login",
    gifUrl: "./images/socialCalendar.gif"
  });

  // save the documents
  try {
    await socialCalendar.save();

    mongoose_db.close((err) => {
      if (err) {
        console.log("error:", error);
      }
      console.log("closing successfully");
    });
  } catch (error) {
    console.log("There was an error saving to db:", error);
    mongoose_db.close((err) => {
      if (err) {
        console.log("error:", error);
      }
      console.log("closing successfully");
    });
  }
});
