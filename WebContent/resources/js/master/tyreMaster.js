$(document)
		.ready(
				function() {
					

					var url = jQuery(location).attr('href');
					var status = url.split("?status=")[1];
					if (status != 'undefined') {
						if (status == '0') {
							$('#errorbar').append("Unable to Save Data.");
							$("#errorbardiv").removeClass("hide").addClass("show");
						} else if (Number(status) > 0) {
							$('#infobar').append("Data Saved Successfully.");
							$("#infobardiv").removeClass("hide").addClass(
									"show");
						}
						$("input").keyup(function() {
							$("#infobar").text("");
							$("#infobardiv").removeClass("show").addClass("hide");
							$("#errorbar").text("");
							$("#errorbardiv").removeClass("show").addClass("hide");
						});
					}
					
					
					jQuery("#tyremaster-form").validate({
						rules : {
							make : {
								required : true,
						   alphaspaceonly:true,
							    maxlength:"30"
							},
							model : {
								required : true,
						 alphanumericonly:true,
						        maxlength:"30"
							},
							number : {
								required : true,
						 alphanumericonly:true,
								maxlength:"50"
							},
							width : {
								maxlength:"10",
								   digits:true,
							},
							diameter : {
								maxlength:"10",
								   digits:true,
							},
							tyreType : {
								required : true,
							},
							mileage : {
								maxlength:"10",
								   digits:true,
							},
							speedRating : {
								maxlength:"10",
								   digits:true,
							},
							weight : {
								maxlength:"10",
								   digits:true,
							},
							tyreCondition : {
								required : true,
							},
							tyreVendorName : {
								required : true,
								maxlength:"30",
						   alphaspaceonly:true,
							},
							tyreBillNo : {
								required : true,
						 alphanumericonly:true,
							    maxlength:"10",
							},
							tyreBillDate : {
								required : true,
							},
							purchaseAmount : {
						  onlytwodecimal : true,
								required : true,
							   maxlength : "50",
								   number:true,
							},
						
						},
						
						messages : {
						},
						
						highlight : function(input) {
							jQuery(input).closest('.form-group').addClass('error');
							jQuery(input).closest('.form-group').removeClass('success');
						},
						
						success : function(input) {
							input.addClass('valid').closest('.form-group').addClass('success');
							jQuery(input).closest('.form-group').removeClass('error');
						}
					});

					$("#make,#model,#tyreType,#tyreVendorName").Setcase({
						caseValue : 'pascal'
					});
					$("#tyreBillNo,#number").Setcase({
						caseValue : 'upper'
					});
				
			 jQuery("#tyreBillDate").datetimepicker({
					format : 'd/m/Y',
					changeMonth : false,
					changeYear : false,
					timepicker : false,
					closeOnDateSelect : true,
					scrollInput : false,
					maxDate : 0,
				});	
				
				
	});