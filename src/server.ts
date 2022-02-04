import express from 'express';

const app = express();
const port = 3333;

app.use(express.json());

app.post('/courses', (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}.`);
});
