<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<body>
      <section id="container" >
      <!--main content start-->
      <section id="main-content">
      <section class="wrapper">  
      
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
							<form:input id="emp.firstname" path="emp.firstname" tabindex="1"
							cssClass="form-control" placeholder="First Name"
							 maxlength="100"/>
					</div>
				</div>
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Middle Name</label>
							<form:input id="emp.middlename" path="emp.middlename" tabindex="1"
							cssClass="form-control" placeholder="Middle Name"
							 maxlength="30"/>
					</div>
				</div>
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Last Name</label>
							<form:input id="emp.lastname" path="emp.lastname" tabindex="1"
							cssClass="form-control" placeholder="Last Name"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Email Id</label>
							<form:input id="emailId" path="emailId" tabindex="1"
							cssClass="form-control" placeholder="Email Id"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Date of Join</label>
							<form:input id="emp.doj" path="emp.doj" tabindex="1"
							cssClass="form-control" placeholder="Date of Join"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Reporting To</label>
							<form:input id="emp.repotingto" path="emp.repotingto" tabindex="1"
							cssClass="form-control" placeholder="Reporting To"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Designation</label>
							<form:input id="emp.designation" path="emp.designation" tabindex="1"
							cssClass="form-control" placeholder="Designation"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Sex</label>
							<form:select id="emp.sex" path="emp.sex" tabindex="1"
							cssClass="form-control" 
							 maxlength="30">
							 <form:option value="Male">Male</form:option>
							 <form:option value="Female">Female</form:option>
							 </form:select>
					</div>
				</div>
			
				</div>
				<div class="row">
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Phone</label>
							<form:input id="phone" path="phone" tabindex="1" class="form-control"
							cssClass="form-control" placeholder="phone"
							 maxlength="30"/>
					</div>
				</div>
								<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Date of Birth</label>
							<form:input id="dob" path="dob" tabindex="1"
							cssClass="form-control" placeholder="Date of Join"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Status</label>
							<form:select id="emp.status" path="emp.status" tabindex="1"
							cssClass="form-control"
							 maxlength="100">
							 <form:option value="Active">active</form:option>
							  <form:option value="Inactive">inactive</form:option>
							  </form:select>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Father Name</label>
							<form:input id="fathername" path="fathername" tabindex="1"
							cssClass="form-control" placeholder="Father Name"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Spouse Name</label>
							<form:input id="spousename" path="spousename" tabindex="1"
							cssClass="form-control" placeholder="Husband Name"
							 maxlength="100"/>
					</div>
				</div>
				
				</div>
				<div class="row">
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Permanent Address</label>
							<form:input id="paddress" path="paddress" tabindex="1"
							cssClass="form-control" placeholder="Permanent Address"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Current Address</label>
							<form:input id="caddress" path="caddress" tabindex="1"
							cssClass="form-control" placeholder="Current Address"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Pan No</label>
							<form:input id="pan" path="pan" tabindex="1"
							cssClass="form-control" placeholder="Pan No"
							 maxlength="100"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-md-4 col-sm-4 col-xs-12">		
					<h4 class="widgettitle">Emergency Contact Detail</h4>
				</div>
			</div>
			<div class="row">
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">EmConName</label>
									<input type="text" id="emconname" name="emconname" tabindex="1"
									cssClass="form-control" placeholder="EmConName"
									 maxlength="30"/>
							</div>
						</div>	
			</div>		
			<div class="row">
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">EmRelation</label>
									<input type="text" id="emrelation" name="emrelation" tabindex="1"
									cssClass="form-control" placeholder="EmRelation"
									 maxlength="100"/>
							</div>
						</div>	
			</div>
			<div class="row">
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">Emergency Contact Address</label>
									<input type="text" id="emconaddress" name="emconaddress" tabindex="1"
									cssClass="form-control" placeholder="emconaddress"
									 maxlength="30"/>
							</div>
						</div>	
			</div>	
			<div class="row">
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">Emergency Phone</label>
									<input type="text" id="emconphone" name="emconphone" class="form-control" tabindex="1"
									cssClass="form-control" placeholder="emconphone"
									 maxlength="100"/>
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
	</section></section></section>
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
				$("input").focus(function() {
					 $(this).attr('placeholder', '');
				});
			});

</script>
</html>