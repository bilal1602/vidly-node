require("dotenv").config();
const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: "genre_1" },
  { id: 2, name: "genre_2" },
  { id: 3, name: "genre_3" },
  { id: 4, name: "genre_4" },
];

app.get("/api/genres", (req, res) => {
  return res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((genre) => genre.id === parseInt(req.params.id));

  if (!genre)
    return res.status(404).send("The genre with given ID was not found");
  res.send(genre);
});

app.post("/api/genres", (req, res) => {
  const genre = {
    id: genre.length + 1,
    name: req.body.name,
  };

  genres.push(genre);
  res.send(genre);
});
const validateCourse = (course) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);
};
// app.put('',(req,res)=>{})
// app.delete('',(req,res)=>{})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
