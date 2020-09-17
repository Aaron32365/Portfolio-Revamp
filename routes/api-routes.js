const express = require('express');
const PortfolioModel = require('../model/Item');
const app = express();

app.get('/portfolioItems', async (req, res) => {
  const portfolio = await PortfolioModel.find({});

  try {
      console.log(JSON.stringify(portfolio))
    res.send(portfolio);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/addItem', async (req, res) => {
    const item = new PortfolioModel(req.body);
  
    try {
      await item.save();
      res.send(item);
    } catch (err) {
      res.status(500).send(err);
    }
  });



module.exports = app
