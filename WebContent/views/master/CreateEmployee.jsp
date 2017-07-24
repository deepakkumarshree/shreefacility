<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<body>
 
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
						<label class="required">Sex</label>
							<form:select id="emp.sex" path="emp.sex" tabindex="1"
							cssClass="form-control" 
							 maxlength="30">
							 <form:option value="Male">Male</form:option>
							 <form:option value="Female">Female</form:option>
							 </form:select>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">Date of Birth</label>
							<form:input id="dob" path="dob" tabindex="1"
							cssClass="form-control dateOfBirth" placeholder="DOB"
							 maxlength="100"/>
					</div>
				</div>
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Date of Join</label>
							<form:input id="emp.doj" path="emp.doj" tabindex="1"
							cssClass="form-control dateOfJoining" placeholder="DOJ"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Marital Status</label>
							<form:select id="emp.status" path="emp.status" tabindex="1"
							cssClass="form-control"
							 maxlength="100">
							 <form:option value="Single">Single</form:option>
							  <form:option value="Married">Married</form:option>
							  </form:select>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Father Name</label>
							<form:input id="fathername" path="fathername" tabindex="1"
							cssClass="form-control" placeholder="Father Name"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Spouse Name/Husband Name</label>
							<form:input id="spousename" path="spousename" tabindex="1"
							cssClass="form-control" placeholder="Husband Name"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Email Id</label>
							<form:input id="emailId" path="emailId" tabindex="1"
							cssClass="form-control" placeholder="Email Id"
							 maxlength="100"/>
					</div>
				</div>
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
						<label class="required">Pan No</label>
							<form:input id="pan" path="pan" tabindex="1"
							cssClass="form-control" placeholder="Pan No"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Adhar No</label>
							<form:input id="pan" path="pan" tabindex="1"
							cssClass="form-control" placeholder="Pan No"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Permanent Address</label>
							<form:textarea id="paddress" path="paddress" tabindex="1" cols="3" rows="2"
							cssClass="form-control" placeholder="Permanent Address"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Current Address</label>
							<form:textarea id="caddress" path="caddress" tabindex="1" cols="3" rows="2"
							cssClass="form-control" placeholder="Current Address"
							 maxlength="100"/>
					</div>
				</div>
				
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Reporting To</label>							
							 <form:select id="emp.repotingto" path="emp.repotingto" tabindex="1" cssClass="form-control">
							 	<form:option value="Rakesh">Rakesh</form:option>
							 	<form:option value="Manoj">Manoj</form:option>							 	
							</form:select>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Designation</label>						
							  <form:select id="emp.designation" path="emp.designation" tabindex="1" cssClass="form-control">
							 	<form:option value="Admin">Admin</form:option>
							 	<form:option value="Employee">Employee</form:option>							 	
							</form:select>
					</div>
				</div>
				
			
				</div>
			<%-- 	<div class="row">
				
				
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
			
				
				
				</div> --%>	
			<div class="row">
				<div class="col-lg-12 col-md-4 col-sm-4 col-xs-12">		
					<h4 class="widgettitle">Emergency Contact Detail</h4>
				</div>
			</div>
			<div class="row">
					<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">Name</label>
									<input type="text" id="emconname" name="emconname" tabindex="1"
									class="form-control" placeholder="Name"
									 maxlength="30"/>
							</div>
						</div>			
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">Relation</label>
									<input type="text" id="emrelation" name="emrelation" tabindex="1"
									class="form-control" placeholder="Relation"
									 maxlength="100"/>
							</div>
						</div>	
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label class="required">Phone</label>
									<input type="text" id="emconphone" name="emconphone" class="form-control" tabindex="1"
									class="form-control" placeholder="emconphone"
									 maxlength="100"/>
							</div>
						</div>	
					<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label>Contact Address</label>
									<textarea id="emconaddress" name="emconaddress" tabindex="1" rows="2" cols="2"
									class="form-control" placeholder="emconaddress"
									></textarea>
							</div>
						</div>	
			
					
		
			
					
			</div>
			<div class="row">
				<div class="col-lg-12">
					<button type="submit" class="btn btn-theme" tabindex="15">Save</button>
					<input type="button" class="btn btn-theme"
						onClick="window.location='dashboard'" tabindex="16"
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
				$("input").focus(function() {
					 $(this).attr('placeholder', '');
					 
				});
				
				$(".dateOfBirth").datetimepicker({
					format : 'd/m/Y',
					changeMonth : true,
					changeYear : true,
					timepicker : false,
					closeOnDateSelect : true,
					scrollInput : false,
					maxDate:'0',
				});
				
				$(".dateOfJoining").datetimepicker({
					format : 'd/m/Y',
					changeMonth : true,
					changeYear : true,
					timepicker : false,
					closeOnDateSelect : true,
					scrollInput : false,
					maxDate:0, 
				});
			});

</script>
</html>