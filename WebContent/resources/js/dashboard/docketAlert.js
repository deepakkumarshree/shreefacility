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
	
	$("#dreason-form").validate({
		rules : {
			docketNo : {
				required : true,
				maxlength : "12",
				number : true,
			},
			dateTime : {
				required : true,
			},
			origin : {
				required : true,
				minlength : "6",
				maxlength : "6",
			},
			destination : {
				required : true,
				minlength : "6",
				maxlength : "6",
			},
			deliveryBid : {
				required : true,
			},
			deliveredStatus : {
				required : true,
				maxlength : "300",
			},
		},
		messages : {
		},
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
	
	jQuery("#dateTime").datetimepicker({
		format : 'd/m/Y',
		changeMonth : false,
		changeYear : false,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});
	
	$("#deliveredStatus").Setcase({
		caseValue : 'pascal'
	});
	
	
});	
	
