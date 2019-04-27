


var express = require('express');

var multer = require('multer');


var myapp = express();

var path = require('path');



myapp.use(express.static(
	path.join(__dirname, '/public')
	));



myapp.get('/',function(req,res){
	res.send('Express is working');
});

myapp.get('/contact',function(req,res){
	res.send('contact is working');
});


myapp.set('views', __dirname+'/views');

// set the view engine to ejs
myapp.set('view engine', 'ejs');

myapp.get('/admin/login',function(req,res){
	// res.send('contact is working');
	res.render('backened/login', {message:''});
});

myapp.get('/admin/registration',function(req,res){
	res.render('backened/registration');
});


myapp.post('/admin/postlogin',function(req,res){
	console.log(req.body);
	console.log(req.body.username);
	console.log(req.body.password);

	if(req.body.Username == '' || req.body.Password == ''){
		res.render('backened/login', {message:'u/p cannot be empty'});
	}
});





var mystorage = multer.diskStorage({
	destination : function(req,file,cb){
		cb(null,'resources/uploads')
	},
	filename : function(req,file,cb){
		var suman = file.originalname;
		cb(null,suman);
	}
	});
var upload = multer({storage: mystorage});




myapp.get('/admin/PostLoginSubmit',function(req,res){
	res.render('backened/login', 	{message: ''});	
});




myapp.post('/admin/PostLoginSubmit',upload.single('LoginPhoto'),function(req,res){

	console.log('test');
	console.log(req.file);

});

myapp.listen(3000);