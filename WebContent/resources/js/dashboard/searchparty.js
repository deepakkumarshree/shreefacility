$(document).ready(function() {

	$("#pinCode").blur(function() {	
		if($('#pinCode').val()=='')
			return;
		
		var formData = {
			"pincode" : jQuery("#pinCode").val()			
		};
		
		jQuery.ajax({
			type : "GET",
			url : 'pincodeSubDebtor.htm',
			data : formData,
			success : function(data) {
				if (JSON.parse(data).length > 0) 
				{
					data = JSON.parse(data);	
					$('#pinCode').prop('readonly',true);
					$.each(data, function(key, value) 
					{
			            $("#acName").append($('<option></option>').val(value.subcode).html(value.subname));
			        });	
				}
				else
				{
					alert('No any Party exist on entered pin code.');
					$('#pinCode').val('');
					$('#pinCode').focus();
					return;
				}
			}
		});
	});
	
	$("#acName").change(function() {
		if($('#acName').val()==''){
			alert('Select the valid Party Name.');
		}
		
		var formData = {
			"accode" : jQuery("#acName").val()
		};
		
		jQuery.ajax({
			type : "GET",
			url : 'subDebtorDetails.htm',
			data : formData,
			success : function(data) {
				if (data.length > 0) {
					data = JSON.parse(data);					
					 $.each(data, function(key, value) {
						 $("#houseno").val(value.SHOUSENO);
						 $("#address").val(value.SADDRESS);
						 $("#custcat").val(value.SCATEGORY);
						 $("#areaName").val(value.SAREANAME);
						 $("#cityName").val(value.CITYNAME);
						 $("#districtName").val(value.DISTRICTNAME);
						 $("#stateName").val(value.STATENAME);
						 $("#mobileno").val(value.SMOBILE);
						 $("#email").val(value.SEMAIL);
						 $("#floor").val(value.SFLOOR);
						 $("#distance").val(value.SDISTANCE);
						 $("#contact").val(value.CONTACTNAME);
						 $("#latitude").val(value.SLATITUDE);
						 $("#longitude").val(value.SLONGITUDE);
						 $("#lpickup").val(value.PICKUPTIME);
						 $("#ldelivery").val(value.DELIVERYTIME);
			        });	
				}
			}
		});
	});
	

});