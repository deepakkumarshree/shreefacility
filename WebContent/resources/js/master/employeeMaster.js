$(document).ready(function() {
	var url	=	jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	
	if(status!='undefined')
	{
		if(status=='Unable')
		{
			$("#errorbar").text("");
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		}
		else if (String(status).length>9 ){
		    $("#infobar").text("");
		    $("#infoNobar").text("");
			$('#infobar').append("Data Saved Successfully.");
			$('#infoNobar').append(decodeURIComponent(status));
			$("#infobardiv").removeClass("hide").addClass("show");
		}
		
		$("input").keyup(function() {
			$("#infobar").text("");
			$("#infoNobar").text("");
			$("#infobardiv").removeClass("show").addClass("hide");
			$("#errorbar").text("");
			$("#errorbardiv").removeClass("show").addClass("hide");
		});
	}
	
    $("#username,#companyName, #presentAddress, #permanentAddress, #employeeName, #designation, #favoriteColor, #preferredMeal, #fatherName, #motherName, #spouseName," +
    		"#childName1, #childName2, #childName3, #childName4, #department, #bankName, #bankBranch,#education1,#education1,#education2,#education3,#education4" +
    		",#education5,#education6,#boarduniversity1,#boarduniversity2,#boarduniversity3,#boarduniversity4,#boarduniversity5,#boarduniversity6,#boarduniversity7").Setcase({
        caseValue: 'pascal'});
    
    $("#panNo, #ifscCode,#uanNo,#pfNo,#esiNo,#grade,#vId,#passportNo,#dlNo").Setcase({
        caseValue: 'upper'
    });

	$(".dateOfBirth1").datetimepicker({
		
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect :true,
		scrollInput : false,
		//maxDate:'01/01/1998',//yesterday is minimum date(for today use 0 or -1970/01/01)
		//minDate:'01/01/1930',//tomorrow is maximum date calendar
		maxDate:'0',
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
	
	$(".dateOfAnniversary").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		//yearRange: "-4:+4",
	});

	$("#employee-form").validate({
		// Specify the validation rules
		rules : {
			username : {
				required : true,
				alphaonly : true,
				remote : "validateUserEmployee.htm"
			},
			branch : {
				required : true,
			},
			division : {
				required : true,
			},
			department : {
				required : true,
			},
			employeeName : {
				required : true,
				alphaspaceonly : true
			},
			password : {
				required : true,
				passwordonly : true
			},
			confirmPassword : {
				required : true,
				equalTo		: "#password",
				passwordonly : true
			},
			employeeDob : {required : true},
			dateOfJoining:{required : true},
			mobile : {
				required : true,
				digits: true,
				maxlength:"10"
			},
			panNo : {
				panno : true,
			},
			email : {
				email:true
			},
			passportNo:{
				digits:true,
			},
			pfNo: {
				alphanumericonly : true,
				maxlength : "30",
				required:true,
			},
			esiNo: {
				alphanumericonly : true,
				maxlength : "30",
				required:true,
			},
			presentAddress: {
				nameandaddress : true,
				maxlength : "400",
			},
			permanentAddress: {
				nameandaddress : true,
				maxlength : "400",
			},
			vId: {
			nameandaddress : true,
			digits:true,
			maxlength : "15",
			},
			aadharNo: {
				digits : true,
				maxlength : "16",
			},
			dlNo: {
				alphanumericonly : true,
				maxlength : "20",
			},
			favoriteColor: {
				alphaspaceonly : true,
				maxlength : "20",
			},
			preferredMeal: {
				alphaspacecommaonly:true,
				maxlength : "20",
			},
			education1:{
				alphaspacedotonly:true,
			},
			education2:{
				alphaspacedotonly:true,
			},
			education3:{
				alphaspacedotonly:true,
			},
			education4:{
				alphaspacedotonly:true,
			},
			education5:{
				alphaspacedotonly:true,
			},
			education6:{
				alphaspacedotonly:true,
			},
			education7:{
				alphaspacedotonly:true,
			},
			education8:{
				alphaspacedotonly:true,
			},
			boarduniversity1:{
				alphaspacedotonly:true,
			},
			boarduniversity2:{
				alphaspacedotonly:true,
			},
			boarduniversity3:{
				alphaspacedotonly:true,
			},
			boarduniversity4:{
				alphaspacedotonly:true,
			},
			boarduniversity5:{
				alphaspacedotonly:true,
			},
			boarduniversity6:{
				alphaspacedotonly:true,
			},
			boarduniversity7:{
				alphaspacedotonly:true,
			},
			boarduniversity8:{
				alphaspacedotonly:true,
			},
			marks1:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks2:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks3:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks4:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks5:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks6:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks7:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			marks8:{
				onlytwodecimal:true,
				maxlength:"5",
			},
			passingyear1:{
				digits:true,
			    maxlength:"4",
			},
			passingyear2:{
				digits:true,
			    maxlength:"4",
			},
			passingyear3:{
				digits:true,
			    maxlength:"4",
			},
			passingyear4:{
				digits:true,
			    maxlength:"4",
			},
			passingyear5:{
				digits:true,
			    maxlength:"4",
			},
			passingyear6:{
				digits:true,
			    maxlength:"4",
			},
			passingyear7:{
				digits:true,
			    maxlength:"4",
			},
            passingyear8:{
				digits:true,
			    maxlength:"4",
			},
			fatherName: {
			    alphaspaceonly : true,
		   },
		   motherName: {
			    alphaspaceonly : true,
		   },
		   spouseName: {
			    alphaspaceonly : true,
		   },
		   childName1: {
			    alphaspaceonly : true,
		   },
		   childName2: {
			    alphaspaceonly : true,
		   },
		   childName3: {
			    alphaspaceonly : true,
		   },
		   childName4: {
			    alphaspaceonly : true,
		   },
		   bankName: {
		    	alphaspaceonly : true,
				maxlength : "100",
		   },
		   bankBranch: {
				 alphaspaceonly : true,
					maxlength : "100",
			},
		   accountNo: {
				    digits:true,
					maxlength : "20",
			},
		   ifscCode: {
				alphanumericonly : true,
					maxlength : "20",
			},
			designation : {
				required : true,
				
			},
			birthSign  : {
				maxlength : "20",
				alphaspaceonly : true,
				
			},
			uanNo: {
				alphanumericonly : true,
				maxlength : "20",
				required:true,
			},
			
		},
				// Specify the validation error messages
				messages : {
					username : {
						required : "Please create a username",
						alphaonly : "Please enter alphabet only",
						remote : "User name alredy exist",
					},
					password : {
						required : "Please create a password",
						passwordonly : "Should be minimum 6 character and contains at least one letter and one number.Only @ # allowed.",
					},
					confirmPassword : {
						required : "Please enter confirm password",
						equalTo : "Your password do not match",
						passwordonly : "Should be minimum 6 character and contains at least one letter and one number.Only @ # allowed.",
					},
					employeeDob : "Please provide employee date of birth",
					dateOfJoining : "Please provide  date of joining",
					mobile : {
						required : "Please provide mobile number",
						number : "Only numeric values allowed for mobile number",
						minlength : "Mobile number should have 10 digits",
					},
					panNo : {
						panno : "Please provide a valid PAN Number",
					},
					email : {
						required : "Please provide email id",
						email : "Please provide a valid email address",
					},

					employeeName : {
						required : "Pleasen provide an employee name",
						alphaspaceonly : "Please enter alphabet and space only",
					},
					employeeDob : {
						required : " Please Provide DoB ",

					},
				},
				highlight : function(label) {
					
				
					jQuery(label)
							.closest('.form-group')
							.addClass('error');
					jQuery(label)
							.closest('.form-group')
							.removeClass('success');
				},
				success : function(label) {
					label.addClass('valid').closest(
							'.form-group').addClass(
							'success');
					jQuery(label)
							.closest('.form-group')
							.removeClass('error');
				}
			});
			// to calculate current Birth
					$("#employeeDob").blur(function() {

						var today = new Date();
						var currentYear = Number(today.getFullYear());
						var selectdoB = ($("#employeeDob").val());
						var selectYear = Number(selectdoB.split("/")[2]);

						if ((currentYear - selectYear) < 18) {
							alert("you should be atleast 18 years old ");
							$("#employeeDob").val('');
							$("#employeeDob").focus();
						}
					});
	
					// working correctly for pfApply And EsiApply
					$("#pfnum").hide();
					$("#esiNum").hide();

					$("input:checkbox.checkbox1").each(function() {

						$("#" + $(this).val() + "").val('0');

					});
					$("input:checkbox.checkbox1").click(function() {

						if (this.checked) {
							$("#" + $(this).val() + "").val('1');
							$("#pfnum").show();

						} else {
							$("#" + $(this).val() + "").val('0');
							$("#pfnum").hide();
						}

					});

					$("input:checkbox.checkbox2").each(function() {

						$("#" + $(this).val() + "").val('0');

					});
					$("input:checkbox.checkbox2").click(function() {

						if (this.checked) {
							$("#" + $(this).val() + "").val('1');
							$("#esiNum").show();
						} else {
							$("#" + $(this).val() + "").val('0');
							$("#esiNum").hide();
						}
					});		    
			//jQuery(document).on('click', "button[id='saveButton']", function () {
				$("#getDataBtn").click(function() {
				
				if($("#employee-form").valid())
				{
					
					var educationValues	=	"";
					
					$('#educationTable tr:not(:has(th))').each(function () {
						if($(this).find("td input").eq(0).val()!=''){
						var edValues	=	$(this).find("td input").eq(0).val()+"<!@@!>"+$(this).find("td input").eq(1).val()+"<!@@!>"+$(this).find("td input").eq(2).val()+"<!@@!>"+$(this).find("td input").eq(3).val()+"<!!>";
						educationValues	=	educationValues + edValues;
						
						}
						
					});
					$("#academicDetail").val(educationValues);
					
					var salaryValues	=	"";
					$('#salaryTable tr:not(:has(th))').each(function () {
					
						if($(this).find("td input").eq(0).val()!=''){
						var edValues	=	$(this).find("td input").eq(0).val()+"<!@@!>"+$(this).find("td input").eq(1).val()+"<!!>";
						salaryValues	=	salaryValues + edValues;
						}
					});
					$("#salaryDetail").val(salaryValues);
					
					$("#employee-form").prop("action", "saveEmployee.htm");
					$("##employee-form").submit();
				}
				
			});
			
				
		jQuery(document)
		.on(
				'blur',
				"select[id='division']",
				function() {
					var dat = jQuery(this);
					var divisionName = dat.val();
					var formData = {
						"paramForIds" : divisionName
					};
					jQuery
							.ajax({
								type : "GET",
								url : 'getDepartmentList.htm',
								data : formData,
								success : function(result) {
									if (result == 'null') {
										jQuery(
												'#employee-form select[id="department"] option:gt(0)')
												.remove()
												.end();
									} 
									else 
									{
										var content = result
												.split("@");
										var optlist = document.forms[0].department;

										jQuery('#employee-form select[id="department"] option:gt(0)').remove().end();

										for (var j = 0; j < content.length; j++) {
											var lst = content[j]
													.split("<>");
											optlist.options[j + 1] = new Option(
													lst[1],
													lst[0]);
										}
									}
									},
								
								error : function() {
									alert("Failed to load department");
								}
							});
				}).blur();
	
		
		// get employee level	
			$("#designation").change(function() {
				var formData = {
					"designation" : jQuery("#designation").val(),

				};
				jQuery.ajax({
					type : "GET",
					url : 'getDesignationLevel.htm',
					data : formData,
					success : function(result) {
					$("#grade").val(result);
					}
				});
			});

	
});
