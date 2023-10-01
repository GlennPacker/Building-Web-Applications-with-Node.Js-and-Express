import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';

const app = express();
app.use(morgan(':method :url :status'));

app.get('/', (req, res, next) => { 
  return res.status(200).send('hi');
});

app.listen(3210, ()=> {
  console.log(chalk.green('Listening On Port: 3210'));
})