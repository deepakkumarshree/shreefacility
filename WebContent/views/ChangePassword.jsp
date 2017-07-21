<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html lang="en">
<head>
	<script src="js/changepassword.js" /></script>
</head>

<body>
	 <section id="container" >  
      <section id="main-content">
          <section class="wrapper">
    
		<h4 class="widgettitle">Change Password</h4>

		<div class="col-lg-12 hide" id="infobardiv">
			<div class="alert alert-info" id="infobar">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
			</div>
		</div>

		<div class="col-lg-12 hide" id="errorbardiv">
			<div class="alert-error alert-error-info" id="errorbar">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
			</div>
		</div>
					
		<form:form role="form" id="changepassword-form" name="changepassword-form" action="updatepassword" >

			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">Old Password</label>
						<input type="password" id="password" name="password" class="form-control input-sm input-xlarge" placeholder="Current Password" />
					</div>
	
					<div class="form-group">
						<label class="required">New Password</label>
						<input type="password" id="newPassword" name="newPassword" class="form-control input-sm input-xlarge" placeholder="New Password" />
					</div>
	
					<div class="form-group">
						<label class="required">Confirm Password</label>
						<input type="password" id="confirmNewPassword" name="confirmNewPassword" class="form-control input-sm input-xlarge" placeholder="Confirm Password" />
					</div>
	
					<button type="submit" class="btn btn-theme">Save</button>
					<input type="button" class="btn btn-theme" onClick="parent.location='dashboard'"  value="Exit">
				</div>
			</div>
		</form:form>
	</section></section></section>
	
</body>
</html>