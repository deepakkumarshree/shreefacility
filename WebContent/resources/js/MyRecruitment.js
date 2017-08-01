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
				
			});
			
			$("#emconphone,#phone,#aadhar").keyup(function(e){
				if (/\D/g.test(this.value))
				{
				// Filter non-digits from input value.
				this.value = this.value.replace(/\D/g, '');
				}
		});
			 
		});