var rowId;

$(document).ready(function() {
	
	$("#tracking-form").validate({
		rules : {
			docketNo : {
				required : true,
				numbercoma : true,
				maxlength : "1000",
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
	
	
	$("a[id^=podwin]").click(function() {
		
		var id = $(this).attr('id');
		rowId = id.substring(6);
		
		$('#colorbox').colorbox({
		    width : "80%",
			height : "90%",
		    href : 'http://images.maxpacific.org/POD/'+rowId,
		    title : '',
		    open : true,
		    onClosed:function(e){
			},
		});
	});
	
	$("a[id^=trackwin]").click(function() {
		
		var id = $(this).attr('id');
		rowId = id.substring(8);
		
		$.colorbox({
			inline : true,
			width : "50%",
			height : "75%",
			href : "#trackingwindow",
			onComplete : function() {
				$('#cboxLoadedContent').css('backgroundColor',"#fff");
			}
		});
		
		$('#tracktblbody tr').remove();// reset the tracktblbody table data	
		
		var formData = {
			"cnoteNo" : rowId,
		};

		jQuery.ajax({
			type : "GET",
			url : 'getTrackingData.htm', 
			data : formData,
			success : function(data)
			{
				if (data.length > 0) 
				{
					 var tableStr = "";
					 data = JSON.parse(data);
					 
					 $.each(data, function(key, value)							 
					 {
						 tableStr = tableStr + "<tr> " +
					 		"<td class='text-center'>"+value.SCANTIME+"</td> "
					 		+ "<td class='text-left'>"+value.CURRENTSTATUS+"</td> "
					 		+ "</tr>";
					 });
					 
					 $("#tracktblbody").append(tableStr);
				}
			},
			error : function() {
				alert("Failed to Tracking Data.");
			}
		});
	});
	
	$("a[id^=viewwin]").click(function() {
		
		var id = $(this).attr('id');
		rowId = id.substring(7);
		
		$("#colorbox").colorbox({
		    iframe : true,
		    width : "90%", 
			height : "90%",
		});
		
		$('#colorbox').colorbox({
			href : 'cNoteView.htm?cNoteNo=' + rowId,
		    title : '',
		    open : true,
		    onClosed:function(e){
				//alert("parent.jQuery.colorbox.close();");
			},
		});
	});
	
	$("a[id^=statwin]").click(function() {
		
		var id = $(this).attr('id');
		rowId = id.substring(7);
		
		$.colorbox({
			inline : true,
			width : "90%",
			height : "20%",
			href : "#statuswindow",
			onComplete : function() {
				$('#cboxLoadedContent').css('backgroundColor',"#fff");
			}
		});
		
		$('#stattblbody tr').remove();
		
		var formData = {
			"cnoteNo" : rowId,
		};

		jQuery.ajax({
			type : "GET",
			url : 'getStatusData.htm', 
			data : formData,
			success : function(data)
			{
				if (data.length > 0) 
				{
					 var tableStr = "";
					 data = JSON.parse(data);
					 
					 $.each(data, function(key, value)							 
					 {
						 tableStr = tableStr + "<tr> " 
						    + "<td class='text-center'>"+value.PRSNO+"</td> "
					 		+ "<td class='text-center'>"+value.MANIFESTNO+"</td> "
					 		+ "<td class='text-center'>"+value.TRIPSHEETNO+"</td> "
					 		+ "<td class='text-center'>"+value.DDRSNO+"</td> "
					 		+ "<td class='text-center'>"+value.MFCLOSE+"</td> "
					 		+ "<td class='text-center'>"+value.DELIVERED+"</td> "
					 		+ "<td class='text-center'>"+value.PFMNO+"</td> "
					 		+ "</tr>";
					 });
					 
					 $("#stattblbody").append(tableStr);
				}
			},
			error : function() {
				alert("Failed to Status Data.");
			}
		});
	});

});

