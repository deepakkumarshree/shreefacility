<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">
<head>
<script type="text/javascript" src="resources/js/MyTime.js"></script>
</head>
   <body>

  <section id="container" >    
      <section id="main-content">
          <section class="wrapper">
            
                  <div class="col-lg-9 main-chart">
        
                                        				
					<div class="row">
						 
                      	<div class="col-md-9 col-sm-9">
                      		<ul class="nav nav-tabs" id="myTab">
								<!-- <li class="active"><a href="#attendance" data-toggle="tab">Attendance</a></li> -->
								<li><a href="#leave" data-toggle="tab">Leave</a></li>
								
							</ul>
                      	</div>
                      	    
                  </div>
                   <div class="tab-content">
						<div class=" backdiv tab-pane fade " id="attendance">
		                 <%--  <jsp:include page="/showEmployee" ></jsp:include> --%>
		              </div>
		             
		               <div class="tab-pane backdiv in active" id="leave">	
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
		
		<form:form role="form" id="leaveform" name="leaveform" method="POST" action="saveLeaveType" commandName="leavetypebean">

			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Leave Type</label>
							<form:select path="leaveType.leaveTypeId" maxlength="30" cssClass="form-control">
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
							cssClass="form-control"  readonly="true" style="cursor:pointer;"/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">To Date</label>
							<form:input id="todate" path="toDate" tabindex="1"
							cssClass="form-control" readonly="true" style="cursor:pointer;"/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">No Of Days</label>
							<form:input type="text" id="noOfLeaves" path="noOfLeaves" 
							tabindex="1" readonly="true"	cssClass="form-control"  />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12">
					<button type="button" class="btn btn-theme" id="save" tabindex="15">Save</button>
					<button type="button" class="btn btn-theme" id="apply" tabindex="15">Apply</button>
					<input type="button" class="btn btn-theme"
						onClick="window.location='dashboard'" tabindex="16"
						value="Exit">
				</div>
			</div>			
			<form:hidden id="status" path="status"/>
		</form:form>

	</div>	
		              </div>
		          </div>
              </div>
          </section></section>
      </section>
  </body>
</html>
