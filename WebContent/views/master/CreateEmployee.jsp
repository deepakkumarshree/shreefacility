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
 
		<form:form role="form" id="emp-form" name="emp-form" method="POST" action="saveEmployee" commandName="empBean">


				<div class="row">
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Emp Code</label>
							<form:input id="empcode" path="emp.empcode" tabindex="1"
							cssClass="form-control" placeholder="EmpCode"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">First Name</label>
							<form:input id="firstname" path="emp.firstname" tabindex="1"
							cssClass="form-control" placeholder="First Name"
							 maxlength="100"/>
					</div>
				</div>
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Middle Name</label>
							<form:input id="middlename" path="emp.middlename" tabindex="1"
							cssClass="form-control" placeholder="Middle Name"
							 maxlength="30"/>
					</div>
				</div>
					<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Last Name</label>
							<form:input id="lastname" path="emp.lastname" tabindex="1"
							cssClass="form-control" placeholder="Last Name"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Sex</label>
							<form:select id="sex" path="emp.sex" tabindex="1"
							cssClass="form-control" 
							 maxlength="30">
							 <form:option value="Male">Male</form:option>
							 <form:option value="Female">Female</form:option>
							 </form:select>
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
				
				</div>
				<div class="row">				
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">Date of Birth</label>
							<form:input id="dob" path="dob" tabindex="1" readonly="true"
							cssClass="form-control dateOfBirth" placeholder="DOB" style="cursor:pointer;"
							 maxlength="100"/>
					</div>
				</div>
				
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Date of Join</label>
							<form:input id="doj" path="emp.doj" tabindex="1" readonly="true"  
							cssClass="form-control dateOfJoining" placeholder="DOJ"  style="cursor:pointer;"
							 maxlength="100"/>
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
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="optional">Spouse/Husband Name</label>
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
				</div>
				<div class="row">
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Phone</label>
							<form:input id="phone" path="phone" tabindex="1" class="form-control"
							cssClass="form-control" placeholder="Phone"
							 maxlength="10"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Pan No</label>
							<form:input id="pan" path="pan" tabindex="1"
							cssClass="form-control" placeholder="Pan No"
							 maxlength="10"/>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Aadhar No</label>
							<form:input id="aadhar" path="emp.aadhar" tabindex="1"
							cssClass="form-control" placeholder="Aadhar"
							 maxlength="16"/>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Reporting To</label>							
							 <form:select id="emp.repotingto" path="emp.repotingto" tabindex="1" cssClass="form-control">
							 	<form:options items="${managerList}" />						 							 	
							</form:select>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Role</label>						
							  <form:select id="emp.role.roleId" path="emp.role.roleId" tabindex="1" cssClass="form-control">
							 <form:options items="${roleList}" />		
							</form:select>
					</div>
				</div>
				</div>
				<div class="row">
				<div class="col-lg-6 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Permanent Address</label>
							<form:textarea id="paddress" path="paddress" tabindex="1" cols="3" rows="2"
							cssClass="form-control" placeholder="Permanent Address"
							 maxlength="100"/>
					</div>
				</div>
				<div class="col-lg-6 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Current Address</label>
							<form:textarea id="caddress" path="caddress" tabindex="1" cols="3" rows="2"
							cssClass="form-control" placeholder="Current Address"
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
									class="form-control" placeholder="Phone"
									 maxlength="10"/>
							</div>
						</div>	
					<div class="col-lg-5 col-md-4 col-sm-4 col-xs-12">		
							<div class="form-group">
								<label>Contact Address</label>
									<textarea id="emconaddress" name="emconaddress" tabindex="1" rows="1" cols="2"
									class="form-control" placeholder="Address"
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
				
			/* 	var url	=	jQuery(location).attr('href');
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
				} */
				$("input").focus(function() {
					 $(this).attr('placeholder', '');
					 
				});
				
				 $("#dob").datepicker({
					    dateFormat: "dd-mm-yy",
					    changeMonth: true,
					    changeYear: true,
					    
					});
				  
				   $("#doj").datepicker({
					    dateFormat: "dd-mm-yy",
					    changeMonth: true,
					    changeYear: true,
					   
					}); 
				
				   $("#fathername,#firstname,#middlename,#lastname,#spousename,#paddress,#caddress,#emconname,#emrelation,#emconaddress").Setcase({
					   caseValue : 'pascal'
					});
				   $("#pan,#empcode").Setcase({
						caseValue : 'upper'
					});
					$( "#emp-form" ).validate({
					  rules: {					
						emrelation: {
							required : true,							
						},
						'emp.firstname': {
							required : true,
						},
						'emp.lastname': {
							required : true,
						},
						'emp.sex': {
							required : true,
						},
						'dob': {
							required : true,
						},
						'emp.doj': {
							required : true,
						},
						
						'emp.status': {
							required : true,
						},
						'emailId': {
							required : true,
							email:true,
						},
						'phone': {
							required : true,
						},
						'pan': {
							required : true,
						},
						'emp.aadhar': {
							required : true,
						},
						'emp.repotingto': {
							required : true,
						},
						'emp.designation': {
							required : true,
						},
						'paddress': {
							required : true,
						},
						'caddress': {
							required : true,
						},
						'emconname': {
							required : true,
						},						
						'emconphone': {
							required : true,
						},
						
					  },
					  messages : {},
						highlight : function(label) {
							jQuery(label).closest('.form-group').addClass('error');
							jQuery(label).closest('.form-group').removeClass('success');
						},
						/*  success : function(label) {
							label.addClass('valid').closest('.form-group').addClass('success');
							jQuery(label).closest('.form-group').removeClass('error');
						},  */ 
					
					});
					
					$("#emconphone,#phone,#aadhar").keyup(function(e){
						if (/\D/g.test(this.value))
						{
						// Filter non-digits from input value.
						this.value = this.value.replace(/\D/g, '');
						}
				});
			});
			

</script>
</html>