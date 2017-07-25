<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	

</head>
<body>

	<div class="container-fluid">
		<h2 class="widgettitle">Apply Leave</h2> 
		
		<div class="col-lg-12 hide" id="infobardiv">
			<div class="alert alert-info" id="infobar">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
			</div>
		</div>

		<div class="col-lg-12 hide" id="errorbardiv">
			<div class="alert-error alert-error-info" id="errorbar">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
			</div>
		</div>
		
		<form:form role="form" id="leavetype-form" name="leavetype-form" method="POST" action="saveLeaveType" commandName="leavetypebean">

			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Leave Type</label>
							<form:select path="leaveType" maxlength="30" cssClass="form-control">
							<option selected="selected"> -- Please choose --</option>
							<form:options items="${leaveTypeInfo}"  />
							 </form:select>
					</div>
				</div>
			</div>
			
			
			
			
			 
			
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">From Date</label>
							<form:input id="fromdate" path="fromDate" tabindex="1"
							cssClass="form-control" placeholder="dd-mm-yyyy" autocomplete="off"
							 />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">To Date</label>
							<form:input id="todate" path="toDate" tabindex="1"
							cssClass="form-control" placeholder="dd-mm-yyyy" autocomplete="off" 
							 />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">No Of Days</label>
							<form:input type="text" id="noOfLeaves" path="noOfLeaves" tabindex="1"
							cssClass="form-control" 
							 />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12">
					<button type="submit" class="btn btn-default" id="save" tabindex="15">Save</button>
					<button type="submit" class="btn btn-default" id="apply" tabindex="15">Apply</button>
					<input type="button" class="btn btn-default"
						onClick="window.location='<%=request.getContextPath() %>/dashboard'" tabindex="16"
						value="Exit">
				</div>
			</div>
			
			<form:hidden id="status" path="status"/>

		</form:form>

	</div>
</body>
  <script>
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
				

				$("#save").click(function() {
					$("#status").val("SAVED");
				});
				$("#apply").click(function() {
					$("#status").val("PENDING");
				});
				
			});

</script>

  <script type="text/javascript"> 

  var disableddates ='${hlist}';
  disableddates=disableddates.substring(1,disableddates.length-1);
//  alert(disableddates);
  function disableSpecificDates(date) { 
	  var i= disableddates.length;

      var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
    
      if (disableddates.indexOf(string) == -1)
    	  {
    	  return [true];
    	  }
      return [false];
    }  

  function setCustomDate(date) {	   
	    var arr2 = disableSpecificDates(date);
	    var arr3 = $.datepicker.noWeekends(date);

	    return [(!arr2[0] || !arr3[0]) ? false : true];
	}
  /* 
  $( function() {
	  $('#datepicker').datepicker({
		  changeYear:true,		 
		  beforeShowDay:setCustomDate,
		  changeMonth:true,
		  dateFormat: "dd-mm-yy"
		});
	  
  } ); */
  

 /*  $( function() {
	  $( "#datepicker").datepicker({
		  changeYear:true,
		  beforeShowDay: $.datepicker.noWeekends,
		  beforeShowDay:setCustomDate,
		  changeMonth:true,
		  dateFormat: "dd-mm-yy"
		});
	  
  } ); */ 
  
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
	  
  
  </script>
  
</html>