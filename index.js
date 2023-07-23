const PORT = 8000;
const express = require("express");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/booktwin", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.query.word}&key=${process.env.GOOGLE_API_KEY}`
    )
    .then((response) => {
      res.json(response.data); // Affichera la réponse du serveur
    })
    .catch((error) => {
      console.log(error); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/bookaii", (req, res) => {
  console.log("request " + req.query.word);
  const client = axios.create({
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const params = {
    model: "gpt-3.5-turbo",
    // prompt: `find a book with ${keywords}`,
    messages: [
      {
        role: "user",
        content: `find a book with ${req.query.word} in its title`,
      },
    ],
    temperature: 0,
  };

  client
    .post("https://api.openai.com/v1/chat/completions", params)
    .then((response) => {
      res.json(response.data.choices[0].message.content);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
