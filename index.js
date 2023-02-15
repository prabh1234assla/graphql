const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;

const app = express();
const port = 8080;

app.use('/graphQL', graphqlHTTP({

}));

app.listen(port, ()=>{
    console.log(`app listening on port number ${port}`);
})