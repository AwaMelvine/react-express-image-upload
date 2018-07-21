const app = require('express')();
const bodyParser = require('body-parser');
var multer  = require('multer')
// var upload = multer({ dest: 'uploads/profile_images' })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profile_images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })


app.post('/profile', upload.single('profileImage'), function(req, res){
  console.log("Hello from the server", req.file);
  console.log(req.body);
});



app.listen(process.env.PORT || 8000, function(){
	console.log("Server started at localhost:8000");
});
