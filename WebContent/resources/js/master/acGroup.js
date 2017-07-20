$(document).ready(function() {
	
	$("#acgroup-form").validate({
		// Specify the validation rules
		rules : {
			acGroupName : {
				required : true,
				alphaspaceonly : true,
			},
		},
		
		// Specify the validation error messages
		messages : {
			acGroupName : {
				required : "Please Enter Account Group Name",
			},
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
			$.ajax({	
				type : "POST",
				url : "validateAcGroup.htm",
				data : {group: $("#acGroupName").val()},
				success : function(data) {
					if(data>0)
					{
						$('#acGroupName').val('');
						alert("This Account Group Name Already Exist.");
					}else{
						form.submit();
					}
				}
			});
		}
	});
	
	$("#acGroupName").Setcase({
		caseValue : 'pascal'
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
	
	$.ajax({
		type : "POST",
		url : "getAccountGroupData.htm",
		data : {
		},

		success : function(data) {
			if (data.length > 0) {
	// Show detailed grid.
	var source = {
		localdata : data,
		datatype : "json",
		datafields : [ {
			name : 'GROUPNAME'
		} ]
	};
	
	var dataAdapter = new $.jqx.dataAdapter(source);
	
	// initialize jqxGrid
	$("#jqxgrid").jqxGrid({
		//height: '200' ,
		width : '80%',
		source : dataAdapter,
		pageable : true,
		autoheight : true,
		editable : true,
		sortable : true,
		columnsresize: true,
		columns : [ {
			text : 'ACCOUNT GROUP LIST',
			datafield : 'GROUPNAME',
			align: 'left',
			editable : false,
			width : "100%",
		},]
	// $("#jqxgrid").jqxGrid({ height: 100 });
	});
	
				}
			}
		});
	
	
	
	
});


