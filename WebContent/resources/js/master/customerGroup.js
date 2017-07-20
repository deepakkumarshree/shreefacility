$(document).ready(function() {

	$("#customergroup-form").validate({
		// Specify the validation rules
		rules : {
			customerGroupName : {
				required : true,
				alphaspaceonly : true,
			},
		},
		
		// Specify the validation error messages
		messages : {
			customerGroupName : {
				required : "Please Enter Customer Group Name",
				alphaspaceonly :  "Only alphabet and space are allowed.",
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
				url : "validateCGroup.htm",
				data : {group: $("#customerGroupName").val()},
				success : function(data) {
					if(data>0)
						{
						$('#customerGroupName').val('');
						alert("This Customer Group Name Already Exist.");
						}else{
							form.submit();
						}
				}
			});
			
		}
	});
	
	$("#customerGroupName").Setcase({caseValue : 'pascal'});
	
	var url	=	jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	if(status!='undefined'){
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
		url : "getCustomerGroupNameData.htm",
		data : {
		},

		success : function(data) {
			if (data.length > 0) {
				var source = {
				localdata : data,
				datatype : "json",
				datafields : [ {
					name : 'GROUPNAME'
				} ]
			};
	
			var dataAdapter = new $.jqx.dataAdapter(source);
			
			$("#jqxgrid").jqxGrid({
				width : '100%',
				source : dataAdapter,
				pageable : true,
				autoheight : true,
				editable : true,
				sortable : true,
				columnsresize: true,
				columns : [ {
					text : 'CUSTOMER GROUP LIST',
					datafield : 'GROUPNAME',
					align: 'left',
					editable : false,
					width : "100%",
				},]
			});
		}
		}
	});
	
});