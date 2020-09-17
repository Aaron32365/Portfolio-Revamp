const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  git: {
    type: String,
  },
  app: {
    type: String,
  },
  gifUrl: {
    type: String,
  },
});

const Portfolio = mongoose.model("portfolio", PortfolioSchema);
module.exports = Portfolio;