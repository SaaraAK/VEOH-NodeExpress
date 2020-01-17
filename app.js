const express=require('express');
const PORT = process.env.PORT || 8080;
let app = express();

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
});
app.get('/TEST',(req,res,next) => {
    res.send('Hello World 2');
    //res.write
    //res.end();
});

app.use((req, res, next) => {
    console.log('404');
    res.status(404);
    res.send('404');
    res.end();
});

app.listen(PORT);
//app.post()

//shutdown server CTRL


