<!--Created By Deepak Kumar -->

<!DOCTYPE html>
<html lang="en">
  <head>
  <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
   

    <title>Shreepartners Infosoft Leave Managements</title>

    <!-- Bootstrap core CSS -->
    <link  href="resources/assets/css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link  href="resources/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
        
    <!-- Custom styles for this template -->
    <link href="resources/assets/css/style.css" rel="stylesheet">
    <link  href="resources/assets/css/style-responsive.css" rel="stylesheet">

  </head>
  <body>
  
	  <div id="login-page">
	  	<div class="container">	  	
		    <form:form method="POST" action="validateUser" id="login-form" class="form-login" commandName="logincommand">
		        <div><img alt="" src="resources/images/sipl_logo.png"></div>
		        <h2 class="form-login-heading">sign in now</h2>
		        <div class="login-wrap">
		          <form:input path="empcode" id="empcode" autofocus="true" tabindex="1" cssClass="form-control"  placeholder="User ID"  />
		            <br>
		            <form:password path="password" id="password" tabindex="2" cssClass="form-control" placeholder="Password" value="" />
		            <label class="checkbox">
		                <span class="pull-right">
		                    <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
		
		                </span>
		            </label>
		            <button class="btn btn-theme btn-block"  tabindex="3" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
		            <hr>		        
		            <!-- <div class="registration">
		                Don't have an account yet?<br/>
		                <a class="" href="#">
		                    Create an account
		                </a>
		            </div> -->
		        </div>		
		          <!-- Modal -->
		          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
		              <div class="modal-dialog">
		                  <div class="modal-content">
		                      <div class="modal-header">
		                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                          <h4 class="modal-title">Forgot Password ?</h4>
		                      </div>
		                      <div class="modal-body">
		                          <p>Enter your e-mail address below to reset your password.</p>
		                          <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
		
		                      </div>
		                      <div class="modal-footer">
		                          <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
		                          <button class="btn btn-theme" type="button">Submit</button>
		                      </div>
		                  </div>
		              </div>
		          </div>
		      </form:form>
	  	
	  	</div>
	  </div>
    <script src="resources/assets/js/jquery.js"></script>
    <script src="resources/assets/js/jquery.validate.js"></script>
    <script src="resources/assets/js/bootstrap.min.js"></script>

	 </body>
  <script>
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
				
				$( "#login-form" ).validate({
					  rules: {					

						'empcode': {
							required : true,
						},
						'password': {
							required : true,
						},

						
					  },
					  messages : {},
						highlight : function(label) {
							jQuery(label).closest('.form-group').addClass('error');
							jQuery(label).closest('.form-group').removeClass('success');
						},
						success : function(label) {
							label.addClass('valid').closest('.form-group').addClass('success');
							jQuery(label).closest('.form-group').removeClass('error');
						},
					
					});
				
			});

</script>
</html>

