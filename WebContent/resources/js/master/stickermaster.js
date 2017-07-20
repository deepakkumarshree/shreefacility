$(document).ready(function() {
	var url = jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	if (status != 'undefined') {
		if (status == '0') {
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		} else if (Number(status) == '99') {
			$('#infobar').append("Bar Code Issued Successfully.");
			$("#infobardiv").removeClass("hide").addClass("show");
		} 
		 else if (Number(status) == 999) {
				$('#infobar').append("Bar Code Void Saved Successfully.");
				$("#infobardiv").removeClass("hide").addClass("show");
			}
		else if (Number(status) > 0) {
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
	
// Specify the validation rules	
	$("#barCodemaster-form").validate(
			{
				
				rules : {				

					barCodeFromEntry  : {
						number : true,
						maxlength : 10,
					},
					barCodeToEntry  : {
						number : true,
						maxlength : 10,
					},

					barCodeFromIssue : {
						number : true,
						maxlength : 10,
					},
					barCodeToIssue : {
						number : true,
						maxlength : 10,
					},				

					barCodeFromVoid : {
						number : true,
						maxlength : 10,
					},
					barCodeToVoid : {
						number : true,
						maxlength : 10,
					},				
					barCodeFromPrint : {
						number : true,
						maxlength : 10,
					},
					barCodeToPrint : {
						number : true,
						maxlength : 10,
					},
				},

			// Specify the validation error messages
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
	
			// on change of From txt box "TXTBOX" be clean
			$("#barCodeFromEntry").change(function() {
				if ($("#barCodeFromEntry").val() != ""&& $("#barCodeFromEntry").val() != null) {
					$("#barCodeToEntry").val('');
				}
			});

			$("#barCodeFromIssue").change(function() {
				if ($("#barCodeFromIssue").val() != "" && $("#barCodeFromIssue").val() != null) {
					$("#barCodeToIssue").val('');
				}
			});

			$("#barCodeFromSurrender").change(function() {
				if ($("#barCodeFromSurrender").val() != "" && $("#barCodeFromSurrender").val() != null) {
					$("#barCodeToSurrender").val('');
				}
			});

			$("#barCodeFromVoid").change(function() {
				if ($("#barCodeFromVoid").val() != "" && $("#barCodeFromVoid").val() != null) {
					$("#barCodeToVoid").val('');
				}
			});

			
	// barCode Entry
	$("#barCodeToEntry").change(function() {

		var barCodeTo = Number($("#barCodeToEntry").val());
		var barCodeFrom = Number($("#barCodeFromEntry").val());

		if (barCodeFrom > barCodeTo) {
			alert("Invalid sequence of Bar Code No.");
			$("#barCodeToEntry").val('');
			$("#barCodeToEntry").focus();
		} else {
			var formData = {
				"barCodeNTo" : jQuery("#barCodeToEntry").val(),
				"barCodeNFrom" : jQuery("#barCodeFromEntry").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'validateBarCodeSeries.htm',
				data : formData,
				success : function(result) {
					if (result > 0) {
						alert("This BarCode Series Number already exist.");
						$("#barCodeToEntry").val('');
						$("#barCodeFromEntry").val('');
						$('#barCodeFromEntry').focus();
					} else {
						form.submit();
					}
				}
			});
		}
	});
	
	
	// barCodeIssued
	$("#barCodeToIssue").change(function() {
		var barCodeTo = Number($("#barCodeToIssue").val());
		var barCodeFrom = Number($("#barCodeFromIssue").val());
		if (barCodeFrom > barCodeTo) {
			alert("Invalid sequence of Bar Code No.");
			$("#barCodeToIssue").val('');
			$("#barCodeToIssue").focus();
		} else {
			var formData = {
				"barCodeNFrom" : jQuery("#barCodeFromIssue").val(),
				"barCodeNTo" : jQuery("#barCodeToIssue").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkBarCodeIssued.htm',
				data : formData,
				success : function(result) {
					if (result =='DI') {
						form.submit();
					} else if(result =='DAI'){
						alert("Either Bar Code Series doesnot exist or Already Issued.");
						$("#barCodeToIssue").val('');
						$("#barCodeFromIssue").val('');
						$('#barCodeFromIssue').focus();
					}
				}	
			});
		}
	});
	
	
	// Bar Code Void
	$("#barCodeToVoid").change(function() {
		var docketTo = Number($("#barCodeToVoid").val());
		var docketFrom = Number($("#barCodefromVoid").val());
		if (docketFrom > docketTo) {
			alert("Invalid sequence of Bar Code No.");
			$("#barCodeToVoid").val('');
			$("#barCodeToVoid").focus();
		} else {
			var formData = {
				"barCodeNFrom" : jQuery("#barCodeFromVoid").val(),
				"barCodeNTo" : jQuery("#barCodeToVoid").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkBarCodeVoid.htm', // it checks that the VOIDDOCKET is null
				data : formData,
				success : function(result) {
					if (result =='DNV') {
						form.submit();
					} 
					else if (result =='DV') {
						alert("This Bar Code Series Is Already Void.");
						$("#barCodeToVoid").val('');
						$("#barCodeFromVoid").val('');
						$('#barCodeFromVoid').focus();
					}
				}
			});
		}
	});
	
	//saveBarCodeMasterEntry
	$("#saveBarCode").click(function() {
	
		$("#barCodeFromEntry").rules("add","required");
		$("#barCodeToEntry").rules("add","required");
		
		$("#barCodeNoFrom").val($("#barCodeFromEntry").val());
		$("#barCodeNoTo").val($("#barCodeToEntry").val());

		$("#barCodemaster-form").prop("action","saveBarCodeMasterEntry.htm");
		$("#barCodemaster-form").submit();
	});
	
	//saveBarCodeIssued
	$("#barCodeIssueSave").click(function() {
		$("#barCodeFromIssue").rules("add","required");
		$("#barCodeToIssue").rules("add","required");
		$("#issueBranch").rules("add","required");
		
		$("#barCodeNoFrom").val($("#barCodeFromIssue").val());
		$("#barCodeNoTo").val($("#barCodeToIssue").val());

		$("#barCodemaster-form").prop("action","saveBarCodeIssued.htm");
		$("#barCodemaster-form").submit();
	});

	//barCodeVoidSave
	$("#barCodeVoidSave").click(function() {		
		$("#barCodeFromVoid").rules("add","required");
		$("#barCodeToVoid").rules("add","required");
		
		$("#barCodeNoFrom").val($("#barCodeFromVoid").val());
		$("#barCodeNoTo").val($("#barCodeToVoid").val());

		$("#barCodemaster-form").prop("action","saveBarCodeVoid.htm");
		$("#barCodemaster-form").submit();
	});
	
	//barCodePrint
	$("#barCodePrint").click(function() {
	//	alert($('input[name=stickerType]:checked').val());
		var stickertype= $('input[name=stickerType]:checked').val();
		$("#printCompanyName").val(stickertype);    
		$("#barCodemaster-form").prop("action","pdfBarCode.htm");
		$("#barCodemaster-form").submit();
	});
	
});