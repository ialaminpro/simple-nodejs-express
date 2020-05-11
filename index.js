const express = require('express');

const app = express();

// function rootCall(req, res){
//     res.send("Thank you very much");
// }
// const rootCall = (req, res) => res.send("Thank you very much");
// app.get('/',rootCall);
app.get('/',(req, res) => {
    res.send("Thank you very much!")
});

app.get('/fruits/banana',(req, res) => {
    res.send({fruit: 'banana',quantity: 1000, price: 344})
})

app.listen(3001, () => console.log('Listening to port 3001'));
