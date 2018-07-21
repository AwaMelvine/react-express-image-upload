const app = require('express')();
const bodyParser = require('body-parser');
var multer  = require('multer');
var path  = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/profile_images')
    },
    filename: (req, file, cb) => {
			// get the original name + the date + the extention
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '.' + Date.now() + '.' + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage })


app.post('/profile', upload.single('profileImage'), function(req, res){
  // access the file related info in the req.file variable

  let userInfo = {
    profileImage: req.file.filename,
    bio: req.body.bio
  };
  
  // Here, userInfo can then be saved to a database
});



app.listen(process.env.PORT || 8000, function(){
	console.log("Server started at localhost:8000");
});
