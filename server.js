const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/profile', function(){
  console.log(req.body);
});



app.listen(process.env.PORT || 8000, function(){
	console.log("Server started at localhost:8000");
});
