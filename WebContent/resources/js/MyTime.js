$(document).ready(function() {
	
	var url	=	jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	if(status!=undefined)
	{
		if (status == 'false') {
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		} else {
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
	$("#leaveform" ).validate({
		  rules: {					
			  fromDate: {
				required : true,				
			},
			'toDate': {
				required : true,
			},
			
		  },
		  messages : {},
			highlight : function(label) {
				jQuery(label).closest('.form-group').addClass('error');
				jQuery(label).closest('.form-group').removeClass('success');
			},
			 
		
		});

	$("#save").click(function() {
		$("#status").val("SAVED");
		
		
		
	});
	$("#apply").click(function() {
		$("#status").val("PENDING");
	});
	
	$("#approve").click(function() {
		$("#status").val("APPROVED");
	});
	$("#reject").click(function() {
		$("#status").val("REJECTED");
	});
	
	
  var disableddates ='${hlist}';
  if(disableddates.length>2)disableddates=disableddates.substring(1,disableddates.length-1);

  
  $("#fromdate").datepicker({
	    dateFormat: "dd-mm-yy",
	    changeMonth: true,
	    changeYear: true,
	    beforeShowDay:setCustomDate,
	});
  
   $('#todate').datepicker({
	    dateFormat: "dd-mm-yy",
	    changeMonth: true,
	    changeYear: true,
	    beforeShowDay:setCustomDate,
	}); 
 $("#fromdate").datepicker().bind("change", function () {
	    var minValue = $(this).val();
	    minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
	    $("#todate").datepicker("option", "minDate", minValue);
	    calculate();
	});
	$("#todate").datepicker().bind("change", function () {
	    var maxValue = $(this).val();
	    maxValue = $.datepicker.parseDate("dd-mm-yy", maxValue);
	    $("#fromdate").datepicker("option", "maxDate", maxValue);
	    calculate();
	}); 

	function setCustomDate(date) {	   
	    var arr2 = disableSpecificDates(date);
	    var arr3 = $.datepicker.noWeekends(date);

	    return [(!arr2[0] || !arr3[0]) ? false : true];
	}
	
	function calculate() {
	    var d1 = $("#fromdate").datepicker('getDate');
	  //  alert(d1); 
	    var datetime1= new Date(d1).getTime();
	  //  alert(datetime1);
	    var d2 = $("#todate").datepicker('getDate');
	    var datetime2= new Date(d2).getTime();
	   // alert(datetime2);
	    var oneDay = 24*60*60*1000;
	    var n_days=0; 
	    var i=disableddates.length;	
	    var dis1 = disableddates[0].split("-")
	    var d3 = new Date(dis1[2],dis1[1]-1,dis1[0]);
	  //  alert(d3);
	    while (i--) { 
	    	// loop over holidays
	    	 var dis1 = disableddates[i].split("-");
	         var d3 = new Date(dis1[2],dis1[1]-1,dis1[0]);
	         if ((new Date(d3).getTime()) >= datetime1)
	        	if ((new Date(d3).getTime()) <= datetime2)
	        		n_days= n_days+1;
	        	// day holiday within dates
	    }
	    // alert(n_days); 
	    
	         
	    var diff = 0;
	    var total= 0;
	    if (d1 && d2) {
	  
	      diff = Math.round(Math.abs((d2.getTime() - d1.getTime())/(oneDay))+1);
	      
	     
	      
	      var nsaturdays = Math.floor( (d1.getDay()+diff) / 7 );
	       // alert(nsaturdays);
	      total = diff - (n_days +(nsaturdays*2));

	    }
	      document.getElementById("noOfLeaves").value=total;

	}
		  
	function disableSpecificDates(date) { 
		  var i= disableddates.length;
		  if(disableddates.length>2){
			    var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
			  
			    if (disableddates.indexOf(string) == -1)
			  	  {
			  	  return [true];
			  	  }
			    return [false];
			  } 
		  return [true];
	}
});





 


