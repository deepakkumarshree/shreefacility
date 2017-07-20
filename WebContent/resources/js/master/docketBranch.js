$(document).ready(function() {
	
	$("#docketmaster-form").validate(
	{
		// Specify the validation rules
		rules : {
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
	
	$("#employeeName").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			var formdata = {
				'searchKeyword' : request.term.trim(),
			};
				$.ajax({
					type : "POST",
					url : "getEmployeeName.htm",
					data : formdata,
					success : function(data) {
						response($.parseJSON(data));
					},
						error : function(data) {
						console.log("Employee Name For autocomplete ----- " + data.status + ' ' + data.statusText);
					}
				});
			},
			select : function(event, ui) {
				$("#employeeName").val(ui.item.empname) ;
				$("#empNo").val(ui.item.empno) ;
				
				if($("#empNo").val() != "")
				{
					$("#emptblbody tr").remove();
					
					var formdata = {
						'empKeyword' : $("#empNo").val(),
					};
					
					$.ajax({
						type : "POST",
						url : "getEmployeeDocketData.htm",
						data : formdata,
						success : function(data) {

							var datapi = data.split("<<##>>");
							
							for (var j = 0; j <datapi.length-1; j++)
							{
								var pdata = datapi[j].split("<#>");
									
								var tableStr = "<tr> " ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[0]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[1]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[2]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[3]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[4]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[5]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[6]+"</th>" ;
								tableStr = tableStr + "</tr> ";
								
								$("#emptblbody").append(tableStr);
							}
						},
					});
			
					
				}
				
				return false;
			},
			change : function(event, ui) {
				if(this.value!='')
				if (!ui.item) {
					alert('Please select valid Employee Name.');
					$("#employeeName").val('');
					$("#empNo").val('');
					this.value = '';
					this.focus();
				}
			}
		}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.empname + "</a>").appendTo(ul);
	};
	
	$("#empIssueSave").click(function() {
		
		var docketTo = Number($("#docketToIssue").val());
		var docketFrom = Number($("#docketFromIssue").val());
		
		if (docketFrom > docketTo) 
		{
			alert("Invalid sequence of Docket No.");
			
			$("#docketToIssue").val('');
			$("#docketToIssue").focus();
			
		} else {
			
			var formData = {
				"docketNTo" : jQuery("#docketToIssue").val(),
				"docketNFrom" : jQuery("#docketFromIssue").val(),
			};
			
			jQuery.ajax({
				type : "GET",
				url : 'getBranchValidateSeries.htm',
				data : formData,
				success : function(result) {
					if (result > 0) {
						alert("This Docket Series Number already Issued To Somebody.");
						$("#docketToIssue").val('');
						$("#docketFromIssue").val('');
						$('#docketFromIssue').focus();
					} else {
						$("#docketNoFrom").val($("#docketFromIssue").val());
						$("#docketNoTo").val($("#docketToIssue").val());
						$("#docketmaster-form").prop("action","saveEmpIssue.htm");
						$("#docketmaster-form").submit();
					}
				}
			});
		}
	});
	
	$("#acname").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			var formdata = {
				'searchKeyword' : request.term.trim(),
			};
				$.ajax({
					type : "POST",
					url : "getCustomerName.htm",
					data : formdata,
					success : function(data) {
						response($.parseJSON(data));
					},
						error : function(data) {
						console.log("Customer Account For autocomplete ----- " + data.status + ' ' + data.statusText);
					}
				});
			},
			select : function(event, ui) {
				$("#acname").val(ui.item.acname) ;
				$("#accode").val(ui.item.accode) ;
				
				if($("#accode").val() != "")
				{
					$("#custtblbody tr").remove();
					
					var formdata = {
						'custKeyword' : $("#accode").val(),
					};
					
					$.ajax({
						type : "POST",
						url : "getCustomerDocketData.htm",
						data : formdata,
						success : function(data) {

							var datapi = data.split("<<##>>");
							
							for (var j = 0; j <datapi.length-1; j++)
							{
								var pdata = datapi[j].split("<#>");
									
								var tableStr = "<tr> " ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[0]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[1]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[2]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[3]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[4]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[5]+"</th>" ;
								tableStr = tableStr + "<th class='text-center'>"+pdata[6]+"</th>" ;
								tableStr = tableStr + "</tr> ";
								
								$("#custtblbody").append(tableStr);
							}
						},
					});
				}
					
				return false;
			},
			change : function(event, ui) {
				if(this.value!='')
				if (!ui.item) {
					alert('Please select valid Customer Name.');
					$("#acname").val('');
					$("#accode").val('');
					this.value = '';
					this.focus();
				}
			}
		}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.acname + "</a>").appendTo(ul);
	};
	
	$("#docketIssueSave").click(function() {
		
		var docketTo = Number($("#docketToIssueCust").val());
		var docketFrom = Number($("#docketFromIssueCust").val());
		
		if (docketFrom > docketTo) 
		{
			alert("Invalid sequence of Docket No.");
			
			$("#docketToIssueCust").val('');
			$("#docketToIssueCust").focus();
			
		} else {
			
			var formData = {
				"docketNTo" : $("#docketToIssueCust").val(),
				"docketNFrom" : $("#docketFromIssueCust").val(),
			};
			
			jQuery.ajax({
				type : "GET",
				url : 'getBranchValidateSeries.htm',
				data : formData,
				success : function(result) {
					if (result > 0) {
						alert("This Docket Series Number already Issued To Somebody.");
						$("#docketToIssueCust").val('');
						$("#docketFromIssueCust").val('');
						$('#docketFromIssueCust').focus();
					} else {
						$("#docketNoFrom").val($("#docketFromIssueCust").val());
						$("#docketNoTo").val($("#docketToIssueCust").val());
						$("#docketmaster-form").prop("action","saveEmpCustIssue.htm");
						$("#docketmaster-form").submit();
					}
				}
			});
		}
	});
			
});