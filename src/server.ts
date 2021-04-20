import express from 'express';

const app = express();
app.get('/', (resquest, response) => {
  return response.json({message: 'Hello, NLW 05!'});
});

app.post('/', (request, response) => {
  return response.json({message: 'User has been saved'})
});

app.listen(3333, () => console.log('Server is running on port 3333'));
