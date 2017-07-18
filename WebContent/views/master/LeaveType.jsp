<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	 <link href="resources/assets/css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jquery-ui.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jquery.datetimepicker.css">	
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jqwidgets/jqx.base.css" type="text/css" />
  	<link rel="stylesheet" href="resources/assets/plugins/datatables/dataTables.bootstrap.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
 
  <script>
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  </script>
  	

    <!--external css-->
<script src="resources/js/LeaveType.js"></script>
<script src="resources/assets/js/jquery.js"></script>
<script src="resources/assets/js/bootstrap.min.js"></script>

</head>
<body>
  <header class="header black-bg">
              <div class="sidebar-toggle-box">
                
              </div>
            <!--logo start-->
            <a href="http://www.shreepartners.com" class="logo" target="_blank"><img alt="" src="resources/image/sipl_logo.png"></a>
            <!--logo end-->

            <div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="login.html">Logout</a></li>
            	</ul>
            </div>
        </header>
      <!--header end-->
      
      <div class="row">	<div class="col-lg-10" style="padding-top: 100px"></div></div>
	<div class="container-fluid">
		<h4 class="widgettitle">Leave Type</h4>
		
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
						<label class="required">Leave Name</label>
							<form:input id="leavetype" path="leaveType" tabindex="1"
							cssClass="form-control" placeholder="Leave Name"
							 maxlength="30"/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">From Date</label>
							<form:input id="datepicker9" path="fromDate" tabindex="1"
							cssClass="form-control" placeholder="mm-dd-yyyy" 
							 />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12">
					<button type="submit" class="btn btn-default" tabindex="15">Save</button>
					<input type="button" class="btn btn-default"
						onClick="window.location='<%=request.getContextPath() %>/dashboard'" tabindex="16"
						value="Exit">
				</div>
			</div>



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
				
			});

</script>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script type="text/javascript"> 


  var disableddates = ["20-07-2017", "12-11-2017", "12-25-2014", "12-20-2014"];
  
  function disableSpecificDates(date) {
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
  
  
  $( function() {
	  $( "#datepicker9" ).datepicker({
		  changeYear:true,
		  beforeShowDay: $.datepicker.noWeekends,
		  beforeShowDay:setCustomDate,
		  changeMonth:true,
		  dateFormat: "dd-mm-yy"
		});
	  
  } );

  
  </script>
  
</html>