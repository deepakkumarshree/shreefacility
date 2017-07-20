jQuery(document).ready(function() {

	jQuery("#accountmaster-form").validate({
		rules : {
			"assets_id" : "required",
			"subAssets" : "required",
			acname : {
				required : true,
				alphaspaceonly : true,
			},
			acGroupName : {
				required : true,
			},
			bankAddress1 : {
				nameandaddress : true,
			},
			bankAddress2 : {
				nameandaddress : true,
			},
			bankCity : {
				alphaspaceonly : true,
			},
			bankState : {
				alphaspaceonly : true,
			},
			bankPincode : {
				number : true,
				minlength : 6,
			},
			bankCreditCardNo : {
				number : true,
				minlength : 15,
			},
			bankAcno : {
				number : true,
			},			
		},
		
		messages : {
			"assets_id" : "Select Main Head",
			"subAssets" : "Select Sub Head",
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
	
	
	jQuery(document).on('change', "select[id='assets_id']", function() {
		var dat = jQuery(this);
		var accode = dat.val();

		disableOtherheads(accode, this,
				'subAssets');

		var formData = {
			"paramForSubHeads" : accode
		};
		jQuery.ajax({
			type : "GET",
			url : 'subHeadList.htm',
			data : formData,
			success : function(result) {
				if (result == 'null') {
					jQuery('#accountmaster-form select[id="subAssets"] option:gt(0)').remove().end();
					jQuery("#accdiv").removeClass('show');
					jQuery("#carddiv").removeClass('show');
					jQuery('#accdiv').addClass('hide');
					jQuery('#carddiv').addClass('hide');
				}
				else {
					var content = result.split("@");
					var optlist = document
							.getElementById("subAssets");
					jQuery(
							'#accountmaster-form select[id="subAssets"] option:gt(0)')
							.remove()
							.end();
					jQuery("#accdiv")
							.removeClass(
									'show');
					jQuery("#carddiv")
							.removeClass(
									'show');
					jQuery('#accdiv')
							.addClass(
									'hide');
					jQuery('#carddiv')
							.addClass(
									'hide');
					for (var j = 0; j < content.length; j++) {
						var lst = content[j]
								.split("<>");
						optlist.options[j + 1] = new Option(
								lst[1],
								lst[0]);
					}
				}
			},
			error : function() {
				alert("Failed to load main heads");
			}
		});
	}).change();

jQuery(document)
	.on(
			'change',
			"select[name='liablities_id']",
			function() {
				var dat = jQuery(this);
				var accode = dat.val();

				disableOtherheads(accode, this,
						'subLiabilities');

				var formData = {
					"paramForSubHeads" : accode
				};
				jQuery
						.ajax({
							type : "GET",
							url : 'subHeadList.htm',
							data : formData,
							success : function(result) {
								if (result == 'null') {
									jQuery(
											'#accountmaster-form select[id="subLiabilities"] option:gt(0)')
											.remove()
											.end();
									jQuery("#accdiv")
											.removeClass(
													'show');
									jQuery('#accdiv')
											.addClass(
													'hide');
								} else {
									var content = result
											.split("@");
									var optlist = document
											.getElementById("subLiabilities");

									jQuery(
											'#accountmaster-form select[id="subLiabilities"] option:gt(0)')
											.remove()
											.end();
									jQuery("#accdiv")
											.removeClass(
													'show');
									jQuery('#accdiv')
											.addClass(
													'hide');

									for (var j = 0; j < content.length; j++) {
										var lst = content[j]
												.split("<>");
										optlist.options[j + 1] = new Option(
												lst[1],
												lst[0]);
									}
								}
							},
							error : function() {
								alert("Failed to load sub heads");
							}
						});
			}).change();

	jQuery(document).on('change', "select[id='subAssets']",
	function() {
		var dat = jQuery(this);
		var accode = dat.val();

		if (accode == '1360') {
			jQuery('#accdiv').addClass('show');
			jQuery('#carddiv').removeClass('show');
		} else if (accode == '1370') {
			jQuery('#accdiv').removeClass('show');
			jQuery('#carddiv').addClass('show');
		}else {
			jQuery("#accdiv").removeClass('show');
			jQuery("#carddiv").removeClass('show');

			jQuery('#accdiv').addClass('hide');
			jQuery('#carddiv').addClass('hide');
		}
	}).change();

	jQuery(document).on('change', "select[name='income_id']",
	function() {
		var dat = jQuery(this);
		var accode = dat.val();

		disableOtherheads(accode, this, 'NA');
	}).change();

	
	jQuery(document).on('change', "select[name='expense_id']",
	function() {
		var dat = jQuery(this);
		var accode = dat.val();

		disableOtherheads(accode, this, 'NA');
	}).change();

	
	jQuery.validator.addMethod("bankAcno", function(value, element) {
		if (value == '' && jQuery('#subAssets').val() == '1360')
			return false;
		else
			return true;
	}, "Bank account no should be numeric");


	function disableOtherheads(obj, obj1, obj2) {
		if (obj != '') {
			jQuery("table select").not("#" + obj1.id).prop(	"disabled", true);
			if (obj2 != 'NA')
				jQuery("#" + obj2).prop("disabled", false);
		} else {
			jQuery("select").prop("disabled", false);
		}
	}

	function validateHeads() {
		if (jQuery("#assets_id").val() == '' && jQuery("#liablities_id").val() == '' && jQuery("#income_id").val() == '' && jQuery("#expense_id").val() == '') 
		{
			alert("Please select any one head");
			return false;
		}
		if (jQuery("#assets_id").val() != '' && jQuery("#subAssets").val() == '') 
		{ 
			alert("Please select sub asset head");
			return false;
		}
		if (jQuery("#liablities_id").val() != '' && jQuery("#subLiabilities").val() == '') {
			alert("Please select sub liabilities head");
			return false;
		}
		return true;
	}

	$("#acname, #bankAddress1, #bankAddress2, #bankCity, #bankState").Setcase({
		caseValue : 'pascal'
	});

});
