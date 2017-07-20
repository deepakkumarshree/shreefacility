$(document).ready(function() {

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
	$("#debtorsubmaster-form").validate(
	{
		// Specify the validation rules
		rules : {
			subAccountName : {
				required : true,
				alphaspaceonly:true,
			},
			address1 : {
			},
			cityName : {
				required : true,
			},
			stateName : {
				required : true,
			},
			areaName:{
				required : true,
			},
			pinCode : {
				required : true,
				number : true,
				minlength : 6,
			},
			email : {
				email : true,
			},
			mobileNo : {
				number : true,
				minlength : 10,
			},
			districtName : {
				required : true,
			},
			houseNo:{
			},
			floor:{
				number:true,
				maxlength:10,
			},
			distance:{
				number:true,
				maxlength:10,
			},
			latitude:{
				maxlength:10,
			},
			longitude:{
				maxlength:10,
			},
			contactName:{
				alphaspaceonly:true,
				maxlength:50
			},
			customerCategory:{
				required:true,
			}
		},

		messages : {},
		highlight : function(label) {
			jQuery(label).closest('.form-group')
					.addClass('error');
			jQuery(label).closest('.form-group')
					.removeClass('success');
		},
		success : function(label) {
			label.addClass('valid').closest(
					'.form-group').addClass('success');
			jQuery(label).closest('.form-group')
					.removeClass('error');
		}
	});

	$("#address1, #address2, #location, #subAccountName,#contactName").Setcase({
		caseValue : 'pascal'
	});
	
	$("#latitude,#longitude").Setcase({
		caseValue : 'upper'
	});

	$("input:checkbox.checkbox1").each(function() {
		$("#" + $(this).val() + "").val('0');
	});
	
	$("input:checkbox.checkbox1").click(function() {
	
		if (this.checked) {
			$("#" + $(this).val() + "").val('1');
	
		} else {
			$("#" + $(this).val() + "").val('0');
		}
	
	});
	//end of default checkbox

	
	$("#subAccountName").blur(function() {
		var formData = {
			"pincode" : jQuery("#pinCode").val(),
			"subAccountName" : jQuery("#subAccountName").val(),
		};
		jQuery.ajax({
			type : "GET",
			url : 'validatePincodeSubDebtor.htm',
			data : formData,
			success : function(result) {
				if (result > 0) {
				alert("This Party Name Is Already Exist On This Pincode.");
					$("#subAccountName").val('');
					$("#subAccountName").focus();
				} else {
				  form.submit();	
				}
			}
		});
	});

	
	
	$("#pickTime").timepicker({ 'scrollDefault': 'now' });
	
	$('#delTime').timepicker({ 'scrollDefault': 'now' });
					
});