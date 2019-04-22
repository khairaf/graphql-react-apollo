const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


//berikut musti dibawah graphql route
//kode berikut untuk keperluan deploy ke heroku
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
//sampe sini.

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listen to ${PORT}`));