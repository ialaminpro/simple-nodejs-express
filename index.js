const express = require('express');

const app = express();

const users = ['Asad', 'Moin','Al Amin'];
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

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    console.log(req.query.sort);
    res.send({userId, name});
})

app.listen(3001, () => console.log('Listening to port 3001'));
