$(function () {

	$("#mpanel-form").validate({
		rules : {
			months : {
				required:true,
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
	});


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
	
	$("#months").change(function() {	
		$("#mpanel-form").prop("action", "magixPanel.htm");
		$("#mpanel-form").submit();
	});	
	
	    var areaChartData = {
	      labels: ["January", "February", "March", "April"],
	      datasets: [
	        {
	          label: "QC Pending",
	          fillColor: "rgba(210, 214, 222, 1)",
	          strokeColor: "rgba(210, 214, 222, 1)",
	          pointColor: "rgba(210, 214, 222, 1)",
	          pointStrokeColor: "#c1c7d1",
	          pointHighlightFill: "#fff",
	          pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [65, 59, 80, 81]
	        },
	        {
	          label: "Delivery Pending",
	          fillColor: "rgba(60,141,188,0.9)",
	          strokeColor: "rgba(60,141,188,0.8)",
	          pointColor: "#3b8bba",
	          pointStrokeColor: "rgba(60,141,188,1)",
	          pointHighlightFill: "#fff",
	          pointHighlightStroke: "rgba(60,141,188,1)",
	          data: [28, 48, 40, 19]
	        },
	        {
	          label: "POD Pending",
	          fillColor: "rgba(60,141,188,0.9)",
	          strokeColor: "rgba(60,141,188,0.8)",
	          pointColor: "#3b8bba",
	          pointStrokeColor: "rgba(60,141,188,1)",
	          pointHighlightFill: "#fff",
	          pointHighlightStroke: "rgba(60,141,188,1)",
	          data: [38, 58, 30, 39]
	        }
	      ]
	    };

 	    var barChartCanvas = $("#barChart").get(0).getContext("2d");
	    var barChart = new Chart(barChartCanvas);
	    var barChartData = areaChartData;
	    barChartData.datasets[1].fillColor = "#00a65a";
	    barChartData.datasets[1].strokeColor = "#00a65a";
	    barChartData.datasets[1].pointColor = "#00a65a";
	    var barChartOptions = {
	      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	      scaleBeginAtZero: true,
	      //Boolean - Whether grid lines are shown across the chart
	      scaleShowGridLines: true,
	      //String - Colour of the grid lines
	      scaleGridLineColor: "rgba(0,0,0,.05)",
	      //Number - Width of the grid lines
	      scaleGridLineWidth: 1,
	      //Boolean - Whether to show horizontal lines (except X axis)
	      scaleShowHorizontalLines: true,
	      //Boolean - Whether to show vertical lines (except Y axis)
	      scaleShowVerticalLines: true,
	      //Boolean - If there is a stroke on each bar
	      barShowStroke: true,
	      //Number - Pixel width of the bar stroke
	      barStrokeWidth: 2,
	      //Number - Spacing between each of the X value sets
	      barValueSpacing: 5,
	      //Number - Spacing between data sets within X values
	      barDatasetSpacing: 1,
	      //String - A legend template
	      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	      //Boolean - whether to make the chart responsive
	      responsive: true,
	      maintainAspectRatio: true
	    };

	    barChartOptions.datasetFill = false;
	    barChart.Bar(barChartData, barChartOptions);

	
});

function getDataList(types) {
	
	if(types=="Booked"){
		$("#mpanel-form").prop("action", "magixBooked.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="Stock"){
		$("#mpanel-form").prop("action", "magixStock.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="QcPend"){
		$("#mpanel-form").prop("action", "magixQcPend.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="AcPend"){
		$("#mpanel-form").prop("action", "magixAcPend.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="DrsPend"){
		$("#mpanel-form").prop("action", "magixDrsPend.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="DrsUpd"){
		$("#mpanel-form").prop("action", "magixDrsUpd.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="PodPend"){
		$("#mpanel-form").prop("action", "magixPodPend.htm");
		$("#mpanel-form").submit();
	}
	
	if(types=="PfmPend"){
		$("#mpanel-form").prop("action", "magixPfmPend.htm");
		$("#mpanel-form").submit();
	}
	
}

