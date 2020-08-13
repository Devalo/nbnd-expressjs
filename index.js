const express = require('express');
const app = express();

app.use(express.json())


app.get('/', (req, res) => {
  res.send('<h1>Hei</h1>');
});

app.post('/', (req, res) => {
  const formInfo = req.body;
  console.log(formInfo);

  res.json(formInfo);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});

