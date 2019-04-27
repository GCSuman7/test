
$(document).ready(function(){
	$('#regisform').submit(function(e){
		e.preventDefault();
		
	

		var mydata = {
			// key			value
			username : $('#username').val(),
			password : $('#password').val(),
			LoginPhoto : $('#LoginPhoto')[0].files[0]
		}

		// console.log(mydata['username']);

		var formdata = new FormData();


		for(key in mydata){
			formdata.append(key,mydata[key]);
		}

		$.ajax({
			url: 'http://localhost:3000/admin/PostLoginSubmit',
			method : 'post',
			contentType : false,
			processData: false,
			data : formdata,
			dataType: 'json',
			success : function(result,status){

			},
			error : function(jqXHR,status){

			}
		});

	});
});