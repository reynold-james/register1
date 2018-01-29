// window.onload = function(){
// 	var sub= document.getElementById("sub");
// 	var aarg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	var barg=/^(?=.*[A-Zaz])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
// 	var errmsg=" ";

// 	sub.onclick=function(e){
// 		e.preventDefault();
// 		var namef= document.getElementById("firstname");
// 		var namel=document.getElementById("lastname");
// 		var username=document.getElementById("username");
// 		var email=document.getElementById("email");
// 		var certnum=document.getElementById("certnum");
// 		var password=document.getElementById("password");
// 		var cpass=document.getElementById("confirmpassword");

// 		if(username.value==""){
// 			username.classList.add('required');
// 		}else{
// 			if(username.classList.contains('required')){
// 				username.classList.remove('required');
// 			}
// 			username.classList.add('valid');
// 		}




// 		if(namef.value==""){
// 			namef.classList.add('required');
// 		}else{
// 			if(namef.classList.contains('required')){
// 				namef.classList.remove('required');
// 			}
// 			namef.classList.add('valid');
// 		}



// 		if(namel.value==""){
// 			namel.classList.add('required');
// 		}else{
// 			if(namel.classList.contains('required')){
// 				namel.classList.remove('required');
// 			}
// 			namel.classList.add('valid');
// 		}


// 		if(aarg.test(email.value)==false){
// 			email.classList.add('required');
// 		}else{
// 			if(email.classList.contains('required')){
// 				email.classList.remove('required');
// 			}
// 			email.classList.add('valid');
// 		}



// 		if(certnum.value==""){
// 			certnum.classList.add('required');
// 		}else{
// 			if(certnum.classList.contains('required')){
// 				certnum.classList.remove('required');
// 			}
// 			certnum.classList.add('valid');
// 		}

// 		if(barg.test(password.value)==false || (password.value!=cpass.value)){
// 			password.classList.add('required');
// 			cpass.classList.add('required');
// 		}else{
// 			if(password.classList.contains('required')&&cpass.classList.contains('required')){
// 				password.classList.remove('required');
// 				cpass.classList.remove('remove');
// 			}
// 			password.classList.add('valid');
// 			cpass.classList.add('valid');
// 		}

// 	}
// }

function submitForm(){
		var sub= document.getElementById("sub");
		var aarg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var barg=/^(?=.*[A-Zaz])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
		var errmsg=" ";
		var namef= document.getElementById("firstname");
		var namel=document.getElementById("lastname");
		var username=document.getElementById("username");
		var email=document.getElementById("email");
		var certnum=document.getElementById("certnum");
		var password=document.getElementById("password");
		var cpass=document.getElementById("confirmpassword");
		var run = true;
		
		
		
		if(username.value==""){
			username.classList.add('required');
			run = false;
		}else{
			if(username.classList.contains('required')){
				username.classList.remove('required');
			}
			username.classList.add('valid');
		}




		if(namef.value==""){
			namef.classList.add('required');
			run = false;
		}else{
			if(namef.classList.contains('required')){
				namef.classList.remove('required');
			}
			namef.classList.add('valid');
		}



		if(namel.value==""){
			namel.classList.add('required');
			run = false;
		}else{
			if(namel.classList.contains('required')){
				namel.classList.remove('required');
			}
			namel.classList.add('valid');
		}


		if(aarg.test(email.value)==false){
			email.classList.add('required');
			run = false;
		}else{
			if(email.classList.contains('required')){
				email.classList.remove('required');
			}
			email.classList.add('valid');
		}



		if(certnum.value==""){
			certnum.classList.add('required');
			run = false;
		}else{
			if(certnum.classList.contains('required')){
				certnum.classList.remove('required');
			}
			certnum.classList.add('valid');
		}

		if(barg.test(password.value)==false || (password.value!=cpass.value)){
			password.classList.add('required');
			cpass.classList.add('required');
			run = false;

		}else{
			if(password.classList.contains('required')&&cpass.classList.contains('required')){
				password.classList.remove('required');
				cpass.classList.remove('remove');
			}
			password.classList.add('valid');
			cpass.classList.add('valid');
		}
		return run;

	}