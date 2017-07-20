$(document).ready(function() {
	
	$("#pinCode").blur(function(){
		var formData = {
			"pincode" : jQuery("#pinCode").val()
		};
	
		jQuery.ajax({
			type : "GET",
			url : 'cityListByPincode.htm',
			data : formData,
			success : function(result) {
				if (result == 'null') {
					jQuery('#select[id="areaName"] option:gt(0)').remove().end();
				} else {
					var content = result.split("<@>");
					var optlist = $("#areaName");
					jQuery('#select[id="areaName"] option:gt(0)').remove().end();
					for (var j = 0; j < content.length; j++) {
						var lst = content[j].split("<#>");
						optlist.append(new Option(lst[1],lst[1]));
					}
					$("#areaName").val($("#cityListParam").val());
				}
			},
			error : function() {
				alert("Failed to load City Name");
			}
		});
	});
	
	$("#areaName").change(function() {
		var formData = {
			"cityname" : jQuery("#areaName").val(),
			"pincode" : jQuery("#pinCode").val()
		};
		jQuery.ajax({
			type : "GET",
			url : 'getdistrictStateByCity.htm',
			data : formData,
			success : function(result) {
				if (result == 'null') {
				} else {
					var content = result.split("<>");
					$("#districtName").val(content[0]);
					$("#stateName").val(content[1]);
					$("#cityId").val(content[2]);
					$("#cityName").val(content[3]);
					$("#delivery").val(content[4]);
				
				}
			},
			error : function() {
				alert("Failed to load District and State Name");
			}
		});
	});
});