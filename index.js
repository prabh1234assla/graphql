const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema.js");

const app = express();
const port = 8080;

app.use('/graphQL', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, ()=>{
    console.log(`app listening on port number ${port}`);
})