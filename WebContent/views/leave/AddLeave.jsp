<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<script type="text/javascript" src="resources/js/MyTime.js"></script>
</head>
   <body>

		               
		               
		              <div class="col-lg-4 container-fluid">
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
		              <h3 class="widgettitle">Balance Leave</h3> 
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="box">
				
						<div class="box-body table-responsive">
							<table id="emptbl" class="table table-bordered table-striped">
							
							<thead>
								<tr>
									<th style="width: 5%">Sr No</th>
									<th style="width: 10%">Leave Type</th>
									<th style="width: 10%">Remaining Leave</th>								
									
								</tr>
							</thead>
							
							<tbody id="tblbody">
								<c:if test="${not empty leaveBalInfo}">
									<c:forEach var="ob" items="${leaveBalInfo}" varStatus="status">
										<tr>
											<td class="text-center">${status.index+1}											
											</td>
											<td class="text-center"><c:out value="${ob.key}"/></td>
											<td><c:out value="${ob.value}" /></td>								
																	
										</tr>
									</c:forEach>
								</c:if>
							</tbody>
							</table>
						</div>
		          	</div>
				</div>
			</div>
		              
		              
		              
		              
		              
		              
		<h3 class="widgettitle">Apply Leave</h3> 
		
		
		
		

			<div class="row">
				<div class="col-lg-12 col-md-4 col-sm-4 col-xs-12">

					<div class="form-group">
						<label class="required">Leave Type</label>
							<form:select path="leaveType.leaveTypeId" maxlength="30" cssClass="form-control">							
								<form:options items="${leaveTypeInfo}"  />
							</form:select>
					</div>
					
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">From Date</label>
							<form:input id="fromdate" path="fromDate" tabindex="1" placeholder="dd-mm-yyyy"
							cssClass="form-control"  readonly="true" style="cursor:pointer;"/>
					</div>
				</div>
			
				<div class="col-lg-6 col-md-6 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">To Date</label>
							<form:input id="todate" path="toDate" tabindex="1" placeholder="dd-mm-yyyy"
							cssClass="form-control" readonly="true" style="cursor:pointer;"/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="required">No Of Days</label>
							<form:input type="text" id="noOfLeaves" path="noOfLeaves" 
							tabindex="1" readonly="true"	cssClass="form-control"  />
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-12">
					<button type="submit" class="btn btn-theme" id="save" tabindex="15">Save</button>
					<button type="submit" class="btn btn-theme" id="apply" tabindex="15">Apply</button>
					<input type="button" class="btn btn-theme"
						onClick="window.location='dashboard'" tabindex="16"
						value="Exit">
				</div>
			</div>			
			<form:hidden id="status" path="status"/>
		</form:form>

	</div>	<!-- End of fist column -->
	 <div class="col-lg-8 container-fluid">
	 <h3 class="widgettitle">Applied Leave</h3> 
	 <div class="row">
				
				<div class="col-lg-12 col-md-12 col-sm-8 col-xs-12">
					<div class="box">
				
						<div class="box-body table-responsive">
							<table id="emptbl" class="table table-bordered table-striped">
							
							<thead>
								<tr>
									<th>Sr No</th>
									<th>Leave Type</th>
									<th>From Date</th>
									<th>To Date</th>
									<th>Status</th>							
									
								</tr>
							</thead>
							
							<tbody id="tblbody">
								<c:if test="${not empty leaveReqList}">
									<c:forEach var="ob" items="${leaveReqList}" varStatus="status">
										<tr>
											<td class="text-center">${status.index+1}</td>
											<td class="text-center"><c:out value="${ob.leaveType.leaveTypeName}"/></td>
											<td><c:out value="${ob.fromDate}" /></td>	
											<td><c:out value="${ob.toDate}" /></td>	
											<td><c:out value="${ob.status}" /></td>						
																	
										</tr>
									</c:forEach>
								</c:if>
							</tbody>
							</table>
						</div>
		          	</div>
				</div>
				
			</div>
	 
	 </div>	
	
  </body>
  </html>
