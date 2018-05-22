const express = require('express');
const app = express();
const axios = require('axios');



app.get ('/',(req,res))={
    
}
axios.get('http://ian-beer-api.herokuapp.com/beers')
    .then((response)=>{
        console.log(response.data)
    })

axios.post ('http://ian-beer-api.herokuapp.com/beers')
.then((response)=>{
    console.log(response.data)
})

axios.put ('http://ian-beer-api.herokuapp.com/beers')
.then((response)=>{
    console.log(response.data)
})

app.listen(8080, (req, res)=>{
    console.log('Listening on Port 8080')
  });

