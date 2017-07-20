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
	
	$("#subcodelinking-form").validate({
		rules : {
			pincode : {
				required : true,
				number:true,
			},
			submaster : {
				required : true,
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


	// on tag click all checkbox click
	$("#allchk").click(function() {
		if ($(this).is(':checked')) {
		   $(".checkboxcls").prop('checked', true);
	   }
	   else
	   {
		   $(".checkboxcls").prop('checked', false);
       } 
	});
//save
  $("#saveButton").click(function(){
	  
	  $('#infobar').text("");
	  submasterLinkingjsonObjChecked = [];
	  submasterLinkingjsonObjUnchecked=[];

	//if particular data send then use this one like on checkbox click
	  $("input:checkbox:unchecked.checkboxcls").each(function () {
			var id = $(this).val();
			var accode =$("#accode"+id+"").val();
			var acname = $("#acname"+id+"").val();
			item = {};
			item["accode"] = accode;
			item["acname"] = acname;
			submasterLinkingjsonObjUnchecked.push(item);
	  });
	  
		//if particular data send then use this one like on checkbox click
	  $("input:checkbox:checked.checkboxcls").each(function () {
			var id = $(this).val();
			var accode =$("#accode"+id+"").val();
			var acname = $("#acname"+id+"").val();
			item = {};
			item["accode"] = accode;
			item["acname"] = acname;
			submasterLinkingjsonObjChecked.push(item);
		});
	  
		$('#submasterLinkingDataChecked').val(JSON.stringify(submasterLinkingjsonObjChecked));
		$('#submasterLinkingDataUnChecked').val(JSON.stringify(submasterLinkingjsonObjUnchecked));
		
		$("#subcodelinking-form").prop("action", "saveSubCodeLinking.htm");
		$("#subcodelinking-form").submit();
	  
  	});
	
	// for jstl
//	$("#submaster").change(function() {
//		$("#subcodelinking-form").valid();
//		$("#subcodelinking-form").prop("action","getSubcodeLinking.htm");
//		$("#subcodelinking-form").submit();
//	});

	$("#pincode").blur(function(){
		$("#tblbody tr").remove();
		$("#submaster").val('');
		$("#submasterParam").val('');
		var formdata={
			'pincode':$("#pincode").val()
		};
		$.ajax({
			type:'get',
			url:"getSubMasterList.htm",
			data:formdata,
			success:function(result)
			{
				if(result=='null')
				{
					jQuery("#subcodelinking-form select[id='submaster'] option:gt(0)").remove().end();
				}
				else
				{
				    var content = result.split("@");
					var optlist = $("#submaster");
					jQuery("#subcodelinking-form select[id='submaster'] option:gt(0)").remove().end();
					for (var j = 0; j < content.length; j++) {
						 var lst = content[j].split("<>");
						 optlist.append(new Option(lst[1],lst[0]));
					}
				}
			}
		});
	});
	
	$("#submaster").change(function() {
		
		 var rowCount1 = $('#tbldata tr').length;
		 
		
		 
		 if(rowCount1>1)
			 {
			 	var table = $('#tbldata').DataTable();
			 	try{
			 	for(var i=rowCount1-1;i>=0;i--)
				 table.rows(i).remove().draw();
				 table.destroy();
			 	}
			 	catch(e){alert(e);}
		    }
			
			if ($("#submaster").val() != "") {
				var formData = {
					"submastercode" : jQuery("#submaster").val(),					
				};

				jQuery.ajax({
					type : "GET",
					url : 'getBilligPartyList.htm', 
					data : formData,
					success : function(data)
					{
						if (data.length > 0) 
						{
							 data = JSON.parse(data);
							
							 var tab=3; 
							 var rowCount = 0;
							 $.each(data, function(key, value)							 
							 {
								 var tableStr = "";
								 rowCount++;
								if(value.SUBCODECHK=='1')
									tableStr = tableStr + "<tr><td><input type='checkbox' checked class='checkboxcls' id='"+rowCount+"' value='"+rowCount+"' tabindex='"+tab+"' /> ";
								else
									tableStr = tableStr + "<tr><td><input type='checkbox' class='checkboxcls' id='"+rowCount+"' value='"+rowCount+"' tabindex='"+tab+"' /> ";
								
								tableStr = tableStr + "<input type='hidden'  id='accode"+rowCount+"' value='"+value.ACCODE+"' /></td> ";
								
								 
								tableStr = tableStr + " <td class='text-left'>"+value.ACNAME+"</td> </tr>" ;							
								
								 tab = Number(tab) + 1 ;
								 $("#tbldata").append(tableStr);
								
									
					        });
							 
						}
						
					},
					error : function() {
						alert("Failed to load Billing Party.");
					}
				});
			}
		});

	
	
	
	
});