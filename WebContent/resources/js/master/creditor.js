/**
 * 
 */
jQuery(document).ready(function() {

	jQuery("#creditor-form").validate({
		rules : {
			acname : {
				required : true,
				alphaspaceonly : true,
				maxlength : "100", 
			},
			creditorAddress1 : {
				nameandaddress : true,
				maxlength : "100", 
			},
			creditorAddress2 : {
				nameandaddress : true,
				maxlength : "100", 
			},
			creditorCity : {
				required : true,
				alphaspaceonly : true,
				maxlength : "100", 
			},
			creditorState : {
				required : true,
				alphaspaceonly : true,
				maxlength : "100", 
			},
			creditorPincode : {
				number : true,
				maxlength : "6", 
			},
			contactPerson : {
				maxlength : "100", 
			},
			creditorMobile : {
				number : true,
				maxlength : "10", 
			},
			creditorEmail : {
				email : true,
				maxlength : "100", 
			},
			creditorPanno : {
				panno : true,
				maxlength : "10", 
			},
			creditorServiceTaxno : {
				alphanumericonly : true,
				maxlength : "30", 
			},
			tinno : {
				alphanumericonly : true,
				maxlength : "30", 
			},
			dueDays: {
				number : true,
				maxlength : "3", 
			},
			bankacno:{
				digits:true,
				maxlength:25,
			},
			bankName:{
				alphaspaceonly:true,
				maxlength:50,
			},
			ifscCode:{
				alphanumericonly:true,
				maxlength:25,
			},
			bankBranch:{
				alphaspaceonly:true,
				maxlength:50,
			}
		},
		
		messages : {
		},
		
		highlight : function(input) {
			jQuery(input).closest('.form-group').addClass('error');
			jQuery(input).closest('.form-group').removeClass('success');
		},
		
		success : function(input) {
			input.addClass('valid').closest('.form-group').addClass('success');
			jQuery(input).closest('.form-group').removeClass('error');
		},
		
		submitHandler : function(form) {
			var formData = {
					"vendorName" : jQuery("#acname").val(),
				};
			
			jQuery.ajax({
				type : "GET",
				url : 'getValidateVendorName.htm',
				data : formData,
				success : function(result) {
					if (result > 0) {
						alert("This Vendor Name Already Exist.");
						$("#acname").val('');
						$('#acname').focus();
					} else {
						form.submit();
					}
				}
			});
			//form.submit();
		}
		
	});
	
	var url = jQuery(location).attr('href');
	var status = url.split("?status=")[1];

	if (status != 'undefined') {
	
		if (status == '0') {
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		} else if (Number(status) > 0) {
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
	
	$("#acname, #creditorAddress1, #creditorAddress2, #creditorCity, #creditorState ,#contactPerson,#bankName,#bankBranch").Setcase({
		caseValue : 'pascal'
	});
	
	$("#creditorPanno , #creditorServiceTaxno , #tinno,#ifscCode").Setcase({
		caseValue : 'upper'
	});
	
	$("input").keyup(function() { 
		$("#infobar").text("");
		$("#infobardiv").removeClass("show").addClass("hide");
		$("#errorbar").text("");
		$("#errorbardiv").removeClass("show").addClass("hide");
	});
	
	
	//Validating  vendor Name (acname)
	$("#acname").blur(function() {
		/*if($("#acname").val() !="")
			{*/
		var formData = {
			"vendorName" : jQuery("#acname").val(),
		};
		jQuery.ajax({
			type : "GET",
			url : 'getValidateVendorName.htm',
			data : formData,
			success : function(result) {
				if (result > 0) {
					alert("This Vendor Name Already Exist.");
					$("#acname").val('');
					$('#acname').focus();
				} else {
					form.submit();
				}
			}
		});
			/*}
		else
			{
			alert("Please Enter Valid Vendor Name. ");
			$("#acname").focus();
			}*/
	});
	
});
