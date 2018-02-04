$(document).ready(function(){
	$("#form-login").submit(function(){

		var jqxhr = $.getJSON( "http://localhost:5010/auth/web/user/gundaja", function(data) {
			console.log(data);
			if (data.authinfo !== 'undefined') {
				window.localStorage.setItem('authToken', data.authinfo.auth);
				window.localStorage.setItem('user', data.user);
				$.cookie('5GPT_AUTH', data.authinfo.auth_token)
				window.location.href = '/app/home';
			}
		})
			.done(function() {
				console.log( "second success" );
			})
			.fail(function() {
				console.log( "error" );
			})
			.always(function() {
				console.log( "complete" );
			});
		return false;
	});
});
