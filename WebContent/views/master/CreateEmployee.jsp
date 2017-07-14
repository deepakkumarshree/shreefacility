<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	 <link href="resources/assets/css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jquery-ui.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jquery.datetimepicker.css">	
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jqwidgets/jqx.base.css" type="text/css" />
  	<link rel="stylesheet" href="resources/assets/plugins/datatables/dataTables.bootstrap.css">
  	

    <!--external css-->
<script src="resources/js/LeaveType.js"></script>
<script src="resources/assets/js/jquery.js"></script>
<script src="resources/assets/js/bootstrap.min.js"></script>

</head>
<body>
  <header class="header black-bg">
              <div class="sidebar-toggle-box">
                
              </div>
            <!--logo start-->
            <a href="http://www.shreepartners.com" class="logo" target="_blank"><img alt="" src="resources/image/sipl_logo.png"></a>
            <!--logo end-->

            <div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="login.html">Logout</a></li>
            	</ul>
            </div>
        </header>
      <!--header end-->
      
      <div class="row">	<div class="col-lg-10" style="padding-top: 100px"></div></div>
	<div class="container-fluid">
		<h4 class="widgettitle">Create Employee</h4>
		
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

		<form:form role="form" id="leavetype-form" name="leavetype-form" method="POST" action="saveEmployee" commandName="empBean">

			<div class="row">
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">First Name</label>
							<form:input id="firstname" path="firstname" tabindex="1"
							cssClass="form-control" placeholder="First Name"
							 maxlength="30"/>
					</div>
				</div>
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Middle Name</label>
							<form:input id="middlename" path="middlename" tabindex="1"
							cssClass="form-control" placeholder="Middle Name"
							 maxlength="30"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Last Name</label>
							<form:input id="lastname" path="lastname" tabindex="1"
							cssClass="form-control" placeholder="Last Name"
							 maxlength="30"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Mail Id</label>
							<form:input id="mailId" path="mailId" tabindex="1"
							cssClass="form-control" placeholder="Mail Id"
							 maxlength="30"/>
					</div>
				</div>
			</div>
				<div class="row">
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">dob</label>
							<form:input id="dob" path="dob" tabindex="1"
							cssClass="form-control" placeholder="Alternate Mail Id"
							 maxlength="30"/>
					</div>
				</div>
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Middle Name</label>
							<form:input id="middlename" path="middlename" tabindex="1"
							cssClass="form-control" placeholder="Middle Name"
							 maxlength="30"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Last Name</label>
							<form:input id="lastname" path="lastname" tabindex="1"
							cssClass="form-control" placeholder="Last Name"
							 maxlength="30"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Mail Id</label>
							<form:input id="mailId" path="mailId" tabindex="1"
							cssClass="form-control" placeholder="Mail Id"
							 maxlength="30"/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12">
					<button type="submit" class="btn btn-default" tabindex="15">Save</button>
					<input type="button" class="btn btn-default"
						onClick="window.location='<%=request.getContextPath() %>/dashboard'" tabindex="16"
						value="Exit">
				</div>
			</div>



		</form:form>

	</div>
</body>
  <script>
			$(document).ready(function() {
				var url	=	jQuery(location).attr('href');
				var status = url.split("?status=")[1];
				if(status!=undefined)
				{
					if (status == 'false') {
						$('#errorbar').append("Unable to Save Data.");
						$("#errorbardiv").removeClass("hide").addClass("show");
					} else {
						$('#infobar').append("Data Saved Successfully.");
						$("#infobardiv").removeClass("hide").addClass("show");
					}
					$("input").keyup(function() {
						$("#infobar").text("");
						$("#infobardiv").removeClass("show").addClass("hide");
						$("#errorbar").text("");
						$("#errorbardiv").removeClass("show").addClass("hide");
					});
				}
				
			});

</script>
</html>