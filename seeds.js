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
    title: 'Social Calendar',
    description: "Create an account and add your upcoming events to your calendar, then add your friends and share eachothers schedules! This app uses the 'MERN' stack",
    git: 'https://github.com/wbrink/social-calendar',
    app: 'https://socialcalendar-app.herokuapp.com/Login',
    gifUrl: 'socialCalendar'
  });

  var googleBooks = new db.PortfolioItem({
    title: 'Google Books Searcher',
    description: 'Search for and save books using the Google Books api, if you like what you see click view to be sent to the Google Books website where you can buy each book',
    git: 'https://github.com/Aaron32365/Google-Books-Repo',
    app: 'boiling-wildwood-63766.herokuapp.com',
    gifUrl: 'googleBooks'
  })

  var orderUp = new db.PortfolioItem({
    title: 'Order Up!',
    description: 'A (Dummy) Restaurant app. Search through a variety of foods and select one of your liking. Then add the food to your order and wait for it to be served up to you on the Served page.',
    git: 'https://github.com/Aaron32365/Resturaunt-App',
    app: 'https://thawing-forest-83273.herokuapp.com/',
    gifUrl: 'resturauntApp'
  })
  // save the documents
  try {
    await socialCalendar.save();
    await googleBooks.save();
    await orderUp.save();

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
