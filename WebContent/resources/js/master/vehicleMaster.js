$(document).ready(function(){
	
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
	
	$("#vehiclemaster-form").validate({
		rules : {
			vehicleType : {
				required : true,
				maxlength : "50",
			},
			vehicleMake : {
				required : true,
				maxlength : "50",
			},
			vehicleModel : {
				required : true,
				maxlength : "50",
			},
			vehicleLength : {
				required : true,
				number : true,
				maxlength : "10",
			},
			vehicleWidth : {
				required : true,
				number : true,
				maxlength : "10",
			},
			vehicleHeight : {
				required : true,
				number : true,
				maxlength : "10",
			},
			noOfWheels : {
				required : true,
			},
			vehicleCapacity : {
				required : true,
			},
			vehicleTaged : {
				required : true,
			},
			vehicleNo : {
				required : true,
				alphanumericonly  : true,
				maxlength : "20",
			},
			registrationDate : {
				required : true,
			},
			registrationName : {
				required : true,
				alphaspaceonly  : true,
				maxlength : "100",
			},
			registrationState : {
				required : true,
			},
			registrationDistrict : {
				required : true,
			},
			fitnessLocation : {
				required : true,
				alphaspaceonly  : true,
				maxlength : "100",
			},
			engineNo : {
				required : true,
				alphanumericonly : true,
				maxlength : "30",
			},
			chasisNo : {
				required : true,
				alphanumericonly : true,
				maxlength : "30",
			},
			pucDateUpto : {
				required : true,
			},
			insuranceProvider : {
				required : true,
				maxlength : "100",
			},
			vehiclePolicyNo : {
				required : true,
				alphanumericonly : true,
				maxlength : "30",
			},
			insuranceDateUpto : {
				required : true,
			},
			//new
			fitnessCertUpto : {
				required : true,
			},
			roadTaxUpto : {
				required : true,
			},
			goodsTaxUpto : {
				required : true,
			},
			npAUpto : {
				required : true,
			},
			npAPermitNo : {
				required : true,
				maxlength : "50",
			},
			gattaTaxUpto : {
				required : true,
			},
			npBUpto : {
				required : true,
			},
			npBPermitNo : {
				required : true,
				maxlength : "50",
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
	
	$("#registrationName,#fitnessLocation,#driverName1,#driverName2").Setcase({
		caseValue : 'pascal'
	});
	
	$("#vehicleNo,#engineNo,#chasisNo,#vehiclePolicyNo,#npAPermitNo,#npBPermitNo").Setcase({
		caseValue : 'upper'
	});
	
	jQuery("#registrationDate").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		 maxDate:'0'//tomorrow is maximum date calendar
	});
	
	jQuery("#pucDateUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',//yesterday is minimum date(for today use 0 or -1970/01/01)
	});
	
	jQuery("#insuranceDateUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	//new
	jQuery("#fitnessCertUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	jQuery("#roadTaxUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	jQuery("#goodsTaxUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	jQuery("#npAUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	jQuery("#gattaTaxUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	jQuery("#npBUpto").datetimepicker({
		format : 'd/m/Y',
		changeMonth : true,
		changeYear : true,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		minDate:'0',
	});
	
	
	
	//district name
	$("#registrationState").change(function(){
			var formData = {
				"stateName" : jQuery("#registrationState").val()
			};
			jQuery.ajax({
				type : "GET",
				url : 'districtListByState.htm',
				data : formData,
				success : function(result) {
					if (result == 'null') {
						jQuery('#vehiclemaster-form select[id="registrationDistrict"] option:gt(0)').remove().end();
					} else {
						var content = result.split("@");

						jQuery('#vehiclemaster-form select[id="registrationDistrict"] option:gt(0)').remove().end();

						for (var j = 0; j < content.length; j++) {
							var lst = content[j].split("<>");
							$("#registrationDistrict").append(new Option(lst[1],lst[1]));
						}
					}
				},
				error : function() {
					alert("Failed to load District Name");
				}
			});
		
	});
	
	//vehicle model
	$("#vehicleMake").change(function(){
			var formData = {
				"vehiclemake" : jQuery("#vehicleMake").val()
			};
			jQuery.ajax({
				type : "GET",
				url : 'vehicleModelListByVehicleMaker.htm',
				data : formData,
				success : function(result) {
					if (result == 'null') {
						jQuery('#vehiclemaster-form select[id="vehicleModel"] option:gt(0)').remove().end();
					} else {
						var content = result.split("@");
						var optlist = $("#vehicleModel");

						jQuery('#vehiclemaster-form select[id="vehicleModel"] option:gt(0)').remove().end();

						for (var j = 0; j < content.length; j++) {
							var lst = content[j].split("<>");
							optlist.append(new Option(lst[1],lst[0]));
						//	optlist.options[j + 1] = new Option(lst[1],lst[0]);
						}
					}
				},
				error : function() {
					alert("Failed to load Vehicle Model");
				}
			});
	});
	
	
	//checking for existing vehicle  registration no
	$("#vehicleNo").change(function(){
			var formData = {
				"vehicleNo" : jQuery("#vehicleNo").val(),
			};
			jQuery.ajax({
				type : "GET",
				url : 'checkVehicleNo.htm',
				data : formData,
				success : function(result){
					if(result >0)
					{
//						var box = confirm("This Vehicle No is already exist, Want to modify data ?");
//						if (box == true) {
//							$(location).attr('href', 'showVehicleMasterEdit.htm?vehicleNo='+jQuery("#vehicleNo").val());
//							$("#vehicleNo").val('');
//						}else{
//							$('#vehicleNo').val('');
//							$('#vehicleNo').focus();
//						}
						alert("This Vehicle No is already exist.Enter new Vehicle No.");
						$('#vehicleNo').val('');
						$('#vehicleNo').focus();
					}
					else
					{
						//alert(" Vehicle Registration No. new......redirecting to new page");
						form.submit();				
					}
				}
				
				
			});
	});
	
});