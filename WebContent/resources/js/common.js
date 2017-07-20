$(document).ready(function() {
	
	// OnBlurGettingCityListByPincode
	jQuery(document).on('blur', "#pinCode", function() {
		if ($("#pinCode").val() != "" && ($("#pinCode").val().length) == 6) {
			var formData = {
				"pincode" : jQuery("#pinCode").val()
			};

			jQuery.ajax({
				type : "GET",
				url : 'cityListByPincode.htm',
				data : formData,
				success : function(result) {
					if (result == 'null') {
						jQuery(
							'#branch-form select[id="areaName"] option:gt(0)').remove().end();
					} else {
						$('#areaName')
					    .find('option')
					    .remove()
					    .end()
					    .append('<option>Select</option>')
					    .val('');
						var content = result.split("<@>");
						jQuery('#branch-form select[id="areaName"] option:gt(0)').remove().end();
						for (var j = 0; j < content.length; j++) 
						{
							var lst = content[j].split("<#>");
							$('#areaName').append(new Option(lst[1], lst[1]));
						}
						$('#areaName').val($("#areaParam").val());
					}
				},
				error : function() {
					alert("Failed to load City Name");
				}
			});
		}
	}).blur();

	//OnCityChangeGettingDistrictAndStateInTextBox
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
				}
			},
			error : function() {
				alert("Failed to load District and State Name");
			}
		});
	});
	
	$("#creditAccount").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			
			var formdata = {
				'searchKeyword' : request.term.trim(),
				'actype' : $('input:radio[name=acradio]:checked').val()
			};
			$.ajax({
				type : "POST",
				url : "getCreditAccounts.htm",
				data : formdata,
				success : function(data) {
					response($.parseJSON(data));
				},
				error : function(data) {
					alert(data.status + ' ' + data.statusText);
				}
			});
		},
		select : function(event, ui) {
			$("#creditAccount").val(ui.item.acname);
			$("#creditAccode").val(ui.item.accode);
			return false;
		},
		change : function(event, ui) {
			if (!ui.item) {
				alert('Please select valid Account.');
				this.value = '';
				this.focus();
			}
		}
	}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.acname + "</a>")
				.appendTo(ul);
	};

});