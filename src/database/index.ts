import { Connection, createConnection } from 'typeorm';

createConnection().then((connection) => {
  console.log('+ Connected to database.');
});
