$(document).ready(function() {
	$("#acname").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			var formdata = {
				'searchKeyword' : request.term.trim(),
			};
			$.ajax({
				type : "POST",
				url : "getCustomerName.htm",//geting (Accode, CodeNo, Acname as 'acname-codeno' ) having 1340 as prefix and AGROUP=0
				data : formdata,
				success : function(data) {
					response($.parseJSON(data));
				},
				error : function(data) {
					console.log("Customer Account For autocomplete error (docketMaster.js)----- " + data.status + ' ' + data.statusText);
				}
			});
		},
		select : function(event, ui) {
			$("#acname").val(ui.item.acname);
			$("#accode").val(ui.item.accode);
			return false;
		},
		change : function(event, ui) {
			if(this.value!='')
			if (!ui.item) {
				alert('Please select valid Billing Party Name.');
				$("#custName").val('');
				$("#accode").val('');
				this.value = '';
				this.focus();
			}
		}
	}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.acname + "</a>").appendTo(ul);
	};
	
	var url = jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	if (status != 'undefined') {
		if (status == '0') {
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		} else if (Number(status) == '99') {
			$('#infobar').append("Docket Issued Successfully.");
			$("#infobardiv").removeClass("hide").addClass("show");
		} else if (Number(status) == '100') {
			$('#infobar').append("Docket Deleted Successfully.");
			$("#infobardiv").removeClass("hide").addClass("show");
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

	$("#docketmaster-form").validate(
	{
		// Specify the validation rules
		rules : {
			types : {
				required : true,
			}, 
			suppName : {
				required : true,
				alphaspaceonly : true,
			},
			suppBillNo : {
				required : true,
			},
			suppBillDate : {},

			docketFromEntry : {
				number : true,
				maxlength : 10,
			},
			docketToEntry : {
				number : true,
				maxlength : 10,
			},

			docketFromIssue : {
				number : true,
				maxlength : 10,
			},
			docketToIssue : {
				number : true,
				maxlength : 10,
			},

			docketFromSurrender : {
				number : true,
				maxlength : 10,
			},
			docketToSurrender : {
				number : true,
				maxlength : 10,
			},

			docketFromVoid : {
				number : true,
				maxlength : 10,
			},
			docketToVoid : {
				number : true,
				maxlength : 10,
			},

			docketFromDelete : {
				number : true,
				maxlength : 10,
			},
			docketToDelete : {
				number : true,
				maxlength : 10,
			},

			issueBranch : {},
			recivedBranch : {},
			issueDate : {},
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

	$("#suppName").Setcase({
		caseValue : 'pascal'
	});

	$("#suppBillNo").Setcase({
		caseValue : 'upper',
	});

	$("#suppBillDate , #issueDate").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});

	$("#surrenderDiv").show();
	$("#voidDiv").hide();

	$("#surenderrd").click(function() {
		$("#surrenderDiv").show();
		$("#voidDiv").hide();
	});

	$("#voidrd").click(function() {
		$("#voidDiv").show();
		$("#surrenderDiv").hide();
	});

	// on change of From txt box "TTXTBOX" be clean
	$("#docketFromEntry").change(function() {
		if ($("#docketFromEntry").val() != ""&& $("#docketFromEntry").val() != null) {
			$("#docketToEntry").val('');
		}
	});

	$("#docketFromIssue").change(function() {
		if ($("#docketFromIssue").val() != "" && $("#docketFromIssue").val() != null) {
			$("#docketToIssue").val('');
		}
	});

	$("#docketFromSurrender").change(function() {
		if ($("#docketFromSurrender").val() != "" && $("#docketFromSurrender").val() != null) {
			$("#docketToSurrender").val('');
		}
	});

	$("#docketFromVoid").change(function() {
		if ($("#docketFromVoid").val() != "" && $("#docketFromVoid").val() != null) {
			$("#docketToVoid").val('');
		}
	});

	$("#docketFromDelete").change(function() {
		if ($("#docketFromDelete").val() != "" && $("#docketFromDelete").val() != null) {
			$("#docketToDelete").val('');
		}
	});

	// docket Stock Entry
	$("#docketToEntry").change(function() {

		var docketTo = Number($("#docketToEntry").val());
		var docketFrom = Number($("#docketFromEntry").val());

		if (docketFrom > docketTo) {
			alert("Invalid sequence of Docket No.");
			$("#docketToEntry").val('');
			$("#docketToEntry").focus();
		} else {
			var formData = {
				"docketNTo" : jQuery("#docketToEntry").val(),
				"docketNFrom" : jQuery("#docketFromEntry").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'validateCNoteSeries.htm',
				data : formData,
				success : function(result) {
					if (result > 0) {
						alert("This Docket Series Number already exist.");
						$("#docketToEntry").val('');
						$("#docketFromEntry").val('');
						$('#docketFromEntry').focus();
					} else {
						form.submit();
					}
				}
			});
		}
	});

	// stockIssued
	$("#docketToIssue").change(function() {
		var docketTo = Number($("#docketToIssue").val());
		var docketFrom = Number($("#docketFromIssue").val());
		if (docketFrom > docketTo) {
			alert("Invalid sequence of Docket No.");
			$("#docketToIssue").val('');
			$("#docketToIssue").focus();
		} else {
			var formData = {
				"docketNFrom" : jQuery("#docketFromIssue").val(),
				"docketNTo" : jQuery("#docketToIssue").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkCNoteExist.htm',
				data : formData,
				success : function(result) {
					if (result =='DI') {
						form.submit();
					} else if(result =='DAI'){
						alert("Either CNote Series doesnot exist or Already Issued.");
						$("#docketToIssue").val('');
						$("#docketFromIssue").val('');
						$('#docketFromIssue').focus();
					}
				}	
			});
		}
	});

	// stockSurrender
	$("#docketToSurrender").change(function() {
		var docketTo = Number($("#docketToSurrender").val());
		var docketFrom = Number($("#docketFromSurrender").val());
		if (docketFrom > docketTo) {
			alert("Invalid sequence of Docket No.");
			$("#docketToSurrender").val('');
			$("#docketToSurrender").focus();
		} else {
			var formData = {
				"docketNFrom" : jQuery("#docketFromSurrender").val(),
				"docketNTo" : jQuery("#docketToSurrender").val(),
				"reciveBranchId" : jQuery("#recivedBranch").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkCNoteSurrender.htm',
				data : formData,
				success : function(result) {
					if(result =='DS'){
						form.submit();
					} else if(result =='DNS') {
						//cannot surrender because docket not issued to any branch or not issued to login branch
						alert("This CNote Series Is Not Blonging To Selected Branch or Not Exist");
						$("#docketToSurrender").val('');
						$("#docketFromSurrender").val('');
						$('#docketFromSurrender').focus();
					}
				}
			});
		}

	});

	
	
	// stock Void
	$("#docketToVoid").change(function() {
		var docketTo = Number($("#docketToVoid").val());
		var docketFrom = Number($("#docketFromVoid").val());
		if (docketFrom > docketTo) {
			alert("Invalid sequence of Docket No.");
			$("#docketToVoid").val('');
			$("#docketToVoid").focus();
		} else {
			var formData = {
				"docketNFrom" : jQuery("#docketFromVoid").val(),
				"docketNTo" : jQuery("#docketToVoid").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkCNoteVoid.htm', // it checks that the VOIDDOCKET is null
				data : formData,
				success : function(result) {
					if (result =='DNV') {
						form.submit();
					} 
					else if (result =='DV') {
						alert("This Docket Series Is Already Void Or Already Issued To Customer");
						$("#docketToVoid").val('');
						$("#docketFromVoid").val('');
						$('#docketFromVoid').focus();
					}
				}
			});
		}
	});
	

	//docketDelete
	$("#docketToDelete").change(function() {
		var docketTo = Number($("#docketToDelete").val());
		var docketFrom = Number($("#docketFromDelete").val());
		if (docketFrom > docketTo) {
			alert("Invalid sequence of Docket No.");
			$("#docketToDelete").val('');
			$("#docketToDelete").focus();
		} else {
			var formData = {
				"docketNTo" : jQuery("#docketToDelete").val(),
				"docketNFrom" : jQuery("#docketFromDelete").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkCNoteDelete.htm', // return '1' if not issued to any branch else '0'
				data : formData,
				success : function(result) {
					if (result =='DD') {
						form.submit();
					}
					else if(result =='DND') {
						alert("This CNote is alreay issued to branch hence cannot be delete.");
						$("#docketToDelete").val('');
						$("#docketFromDelete").val('');
						$('#docketFromDelete').focus();
					}
				}
			});
		}
	});


	//saveDocketEntry
	$("#saveDocketEntrySave").click(function() {
		//alert("saveDocketEntrySave");
		$("#suppName").rules("add", "required");
		$("#suppBillNo").rules("add","required");
		$("#suppBillDate").rules("add","required");
		$("#docketFromEntry").rules("add","required");
		$("#docketToEntry").rules("add","required");

		$("#docketNoFrom").val($("#docketFromEntry").val());
		$("#docketNoTo").val($("#docketToEntry").val());

		$("#docketmaster-form").prop("action","saveDocketMasterEntry.htm");
		$("#docketmaster-form").submit();
	});

	//docketIssueSave
	$("#docketIssueSave").click(function() {
		$("#docketFromIssue").rules("add","required");
		$("#docketToIssue").rules("add","required");
		$("#issueBranch").rules("add","required");
		$("#issueDate").rules("add", "required");

		$("#docketNoFrom").val($("#docketFromIssue").val());
		$("#docketNoTo").val($("#docketToIssue").val());

		$("#docketmaster-form").prop("action","saveDocketIssue.htm");
		$("#docketmaster-form").submit();
	});

	//docketSurrenderSave
	$("#docketSurrenderSave").click(function() {
		$("#docketFromSurrender").rules("add","required");
		$("#docketToSurrender").rules("add", "required");
		$("#recivedBranch").rules("add", "required");

		$("#docketNoFrom").val($("#docketFromSurrender").val());
		$("#docketNoTo").val($("#docketToSurrender").val());

		$("#docketmaster-form").prop("action","saveDocketSurrender.htm");
		$("#docketmaster-form").submit();
	});

	//docketVoidSave
	$("#docketVoidSave").click(function() {
		$("#docketFromVoid").rules("add", "required");
		$("#docketToVoid").rules("add", "required");

		$("#docketNoFrom").val($("#docketFromVoid").val());
		$("#docketNoTo").val($("#docketToVoid").val());

		$("#docketmaster-form").prop("action","saveDocketVoid.htm");
		$("#docketmaster-form").submit();
	});

	//docketDeleteSave
	$("#docketDeleteSave").click(function() {
		$("#docketFromDelete").rules("add","required");
		$("#docketToDelete").rules("add","required");

		$("#docketNoFrom").val($("#docketFromDelete").val());
		$("#docketNoTo").val($("#docketToDelete").val());

		$("#docketmaster-form").prop("action","saveBarCodeVoid.htm");
		$("#docketmaster-form").submit();
	});
	
	$("#docketToEntry").blur(function() {
		
		if($("#docketToEntry").val().length==0)
			return;
		
		if(Number($("#docketToEntry").val())<Number($("#docketFromEntry").val()))
		{
			alert('To is Less than From Number');
			$("#docketToEntry").focus();
			return;
		}
		
		var total=Number($("#docketToEntry").val())-Number($("#docketFromEntry").val())+1;
		$("#total").val(total);
		
	});
					
});