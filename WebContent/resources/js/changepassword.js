$(document).ready(function() {
	
	var url	=	jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	if(status!='undefined'){
		if(status=='0'){
			$('#infobar').append("Unable to Change Password.");
			$( "#infobardiv" ).removeClass("hide").addClass("show");
		}
		else if(Number(status)>0){
				$('#infobar').append("Password Changed Successfully.");
				$("#infobardiv").removeClass("hide").addClass("show");
		}
		
		$("input").keyup(function() {
			$("#infobar").text("");
			$("#infobardiv").removeClass("show").addClass("hide");
			$("#errorbar").text("");
			$("#errorbardiv").removeClass("show").addClass("hide");
		});
	}
	
	$("#changepassword-form").validate({
		// Specify the validation rules
		rules : {
			password :	"required",
			newPassword :	{
				required : true,
				passwordonly : true,
			},
			confirmNewPassword : {
				required	: true,
				equalTo		: "#newPassword",
				passwordonly : true,
			}
		},

		// Specify the validation error messages
		messages : {
			password : "Please enter your old password",
			newPassword : {
				required	:	"Please enter your new password",
				passwordonly : "Should be minimum 6 character and contains at least one letter and one number.Only @ # allowed."
			},
			confirmNewPassword: {
				required	: "Please provide a password",
				equalTo		: "Please enter the same password as above",
				passwordonly: "Should be minimum 6 character and contains at least one letter and one number.Only @ # allowed."
			},
			
		},
		highlight : function(label) {
			jQuery(label).closest('.form-group').addClass('error');
			jQuery(label).closest('.form-group').removeClass('success');
		},
	    success: function(label) {
	    	label.addClass('valid').closest('.form-group').addClass('success');
	    	jQuery(label).closest('.form-group').removeClass('error');
	    },
		submitHandler : function(form) {
			form.submit();
		}
	});

});