$(document).ready(function() {
	
	$("#dashboard-form").validate({
		rules : {
			docketNo : {
				required : true,
				number : true,
				maxlength : "10",
			},
		},
		messages : {
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
			form.submit();
		}
	});
	
	
	$(".toggle").on("click", function () {
	    $(".container").toggleClass("microsoft");
	});

});

