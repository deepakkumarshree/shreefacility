$(document).ready(function() {

	$("#drivermaster-form").validate({
		rules : {
			driverName : {
				required : true,
				alphaspaceonly : true,
				maxlength : "100",
			},
			permanentAdress : {
				required : true,
				nameandaddress : true,
				maxlength : "500",
			},
			presentAdress : {
				required : true,
				nameandaddress : true,
				maxlength : "500",
			},
			mobileNo : {
				required : true,
				digits : true,
				maxlength : "10",
			},
			emergencyContactNo : {
				required : true,
				digits : true,
				maxlength : "10",
			},
			licenceNo : {
				required : true,
				alphanumericonly : true,
				maxlength : "30",
			},
			licenceValidUpto : {
				required : true,
			},
			licenceIssuePlc : {
				required : true,
				nameandaddress : true,
				maxlength : "100",
			},
			panNo : {
				panno : true,
				maxlength : "10",
			},
			addharNo : {
				number : true,
				maxlength : "12",
			},
			nomineeName : {
				required : true,
				alphaspaceonly : true,
				maxlength : "100",
			},
			dOJ : {
				required : true,
			},
			insuranceNo : {
				alphanumericonly : true,
				maxlength : "30",
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
		submitHandler : function(form) {
			form.submit();
		}
	});
	
	$("#driverName , #permanentAdress , #presentAdress , #licenceIssuePlc , #qualification, #nomineeName  ").Setcase({
		caseValue : 'pascal'
	});
	
	$("#licenceNo, #panNo, #insuranceNo").Setcase({
		caseValue : 'upper'
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

	jQuery("#licenceValidUpto , #insuranceValidUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate : 0,
	});

/*	jQuery("#dOB").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});*/

	jQuery("#dOJ , #mediChkupDate , #dOB").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});
	
	$("#dOB").blur(function() {

		var today = new Date();
		var currentYear = Number(today.getFullYear());
		var selectdoB = ($("#dOB").val());
		var selectYear = Number(selectdoB.split("/")[2]);

		if ((currentYear - selectYear) < 18) {
			alert("you should be atleast 18 years old ");
			$("#dOB").val('');
			$("#dOB").focus();
		}
	});

});