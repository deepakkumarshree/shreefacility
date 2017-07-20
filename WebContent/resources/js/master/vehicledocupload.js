$(document).ready(function() {
 
	var url	=	jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	
	if(status!='undefined')
	{
		if(status=='Unable')
		{
			$("#errorbar").text("");
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		}
		else if (String(status).length>9 ){
		    $("#infobar").text("");
		    $("#infoNobar").text("");
			$('#infobar').append("Data Saved Successfully.");
			$('#infoNobar').append("Voucher Number : " + decodeURIComponent(status));
			$("#vVoucherNo").val(decodeURIComponent(status));
			$("#infobardiv").removeClass("hide").addClass("show");
		}
		
		$("input").keyup(function() {
			$("#infobar").text("");
			$("#infoNobar").text("");
			$("#infobardiv").removeClass("show").addClass("hide");
			$("#errorbar").text("");
			$("#errorbardiv").removeClass("show").addClass("hide");
		});
	}
	

	
	$("#vehicleNo").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			var formdata = {
				'searchKeyword' : request.term.trim(),
			};
				$.ajax({
					type : "POST",
					url : "getVehicleNo.htm",
					data : formdata,
					success : function(data) {
						response($.parseJSON(data));
					},
					error : function(data) {
						console.log("Vehicle No For autocomplete error ----- " + data.status + ' ' + data.statusText);
					}
				});
			},
			select : function(event, ui) {
				$("#vehicleNo").val(ui.item.vehicleno);
				return false;
			},
			change : function(event, ui) {
				if(this.value!='')
				if (!ui.item) {
					alert('Please select valid vehicleno.');
					$("#vehicleNo").val('');
					
					this.value = '';
					this.focus();
				}
			}
		}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.vehicleno + "</a>").appendTo(ul);
	};

	/*$("#b1").click(function(){		
		$("#FileType").val(1);
		$("#vehDocument-form").prop("action","saveVehicleUpload.htm");
		$("#vehDocument-form").submit();
		
	});*/
	$("[id^=b]").click(function() {
		if($("#vehicleNo").val()=='')
		{
			alert('Vehicle No is not entered.');
			return;
		}
		var id = $(this).attr('id');
		var bIndex = id.substring(1);
		if($("#dataFile"+bIndex).val()=='')
		{
			alert('File is not selected.');
			return;
		}
		
		$("#FileType").val(bIndex);
		
		
		$("#vehDocument-form").prop("action","saveVehicleUpload.htm");
		$("#vehDocument-form").submit();
		
	});
	
	$("input[name=dataFile]").change(function() { 
		
		
		 var dvPreview = $("#dvPreview");
		 dvPreview.innerHTML = "";
		
		 
		 for (var i = 0; i < $(this).get(0).files.length; ++i) 
		 { 	
		      	      
		        var file = $(this).get(0).files[i];
		        var reader = new FileReader();
	            reader.onload = function (e) {
	                var img = document.createElement("IMG");
	                img.height = "100";
	                img.width = "100";
	                img.src = e.target.result;
	                dvPreview.append(img);
	            };
	            
	            reader.readAsDataURL(file);
		    }
		    
		    
		    
		 

		});
	
	
});