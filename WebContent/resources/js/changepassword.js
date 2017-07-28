$(document).ready(function() {
				var url	=	jQuery(location).attr('href');
				var status = url.split("?status=")[1];
				if(status!=undefined)
				{
					if(status=='false')
					{
						alert('Invalid User !!!');
					}
					$("input").keyup(function() {
						$("#infobar").text("");
						$("#infobardiv").removeClass("show").addClass("hide");
						$("#errorbar").text("");
						$("#errorbardiv").removeClass("show").addClass("hide");
                    });
				}
				$("input").focus(function() {
					 $(this).attr('placeholder', '');
					 
				});
				
				$( "#changepassword-form" ).validate({
					  rules: {		

						'password': {
							required : true,
						},

		                 newPassword: "required",
		                 confirmNewPassword: {
		                    equalTo: "#newPassword"
		                    }
		         
					  },
					   messages: {
			                newPassword: " Enter Password",
			                confirmNewPassword: " Enter Confirm Password Same as New Password"
			            },
			        	highlight : function(label) {
							jQuery(label).closest('.form-group').addClass('error');
							jQuery(label).closest('.form-group').removeClass('success');
						},
					
					
			    });

				
});