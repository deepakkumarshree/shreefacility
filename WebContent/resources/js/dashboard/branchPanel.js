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
	
	$("#branchPanel-form").validate({
		rules : {
			prsCnoteDateFrom : {
				required : true,
			},
			prsCnoteDateTo : {
				required : true,
			},
			origin : {
				required : true,
			},
			destination : {
				required : true,
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
	
	jQuery("#prsCnoteDateFrom").datetimepicker({
		format : 'd/m/Y',
		changeMonth : false,
		changeYear : false,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});
	
	jQuery("#prsCnoteDateTo").datetimepicker({
		format : 'd/m/Y',
		changeMonth : false,
		changeYear : false,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});
	
	
	/*  $(".sparkline").each(function () {
	    var $this = $(this);
	    $this.sparkline('html', $this.data());
	  }); */
	
	$(".dStatus").sparkline('html', {
		type: 'pie',
		width: '200',
		height: '200',
		sliceColors: ['green','red'],
		offset: 90,
		borderColor: '#000',
		tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)',
		tooltipValueLookups: {
		names: {
				0: 'Delivered',
				1: 'Not Deliver',
			}
		}
	});
  
	$(".dPerform").sparkline('html', {
		type: 'pie',
		width: '200',
		height: '200',
		sliceColors: ['green','MediumVioletRed'],
		offset: 40,
		borderColor: '#000',
		tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)',
		tooltipValueLookups: {
		names: {
				0: 'On Time',
				1: 'Delay',
			}
		}
	});
	  
	$(".dPending").sparkline('html', {
		type: 'pie',
		width: '200',
		height: '200',
		sliceColors: ['green','yellow'],
		offset: 70,
		borderColor: '#000',
		tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)',
		tooltipValueLookups: {
		names: {
				0: 'Out For Delivered',
				1: 'Pending Delivery',
			}
		}
	});

	/* var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Delivery Status"
		},
              animationEnabled: true,
		legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		data: [
		{        
			indexLabelFontSize: 20,
			indexLabelFontFamily: "Monospace",       
			indexLabelFontColor: "darkgrey", 
			indexLabelLineColor: "darkgrey",        
			indexLabelPlacement: "outside",
			type: "pie",       
			showInLegend: true,
			toolTipContent: "{y} - <strong>#percent%</strong>",
			dataPoints: [
				{  y: 60, legendText:"Deliver", indexLabel: "Delivered" },
				{  y: 40, legendText:"Pending" , indexLabel: "Pending"}
			]
		}
		]
	});
	chart.render(); */
  
});
