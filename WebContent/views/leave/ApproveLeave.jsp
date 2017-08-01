<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>

</head>
   <body>
           <div class="container-fluid">
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
									<th><input type="checkbox" name="checkall" id="checkall"></th> 					
									
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
											<td><input type="checkbox" name="id" value="Java"></td>						
																	
										</tr>
									</c:forEach>
								</c:if>
							</tbody>
							</table>
						</div>
		          	</div>
				</div>
				
			</div>
			<div class="row">
				<div class="col-lg-12">
					<button type="submit" class="btn btn-theme" id="approve" tabindex="15">Approve</button>
					<button type="submit" class="btn btn-theme" id="reject" tabindex="15">Reject</button>
					<input type="button" class="btn btn-theme"
						onClick="window.location='dashboard'" tabindex="16"
						value="Exit">
				</div>
			</div>		 
	 </div>
  </body>
   <script>
			$(document).ready(function() {
				 $('#checkall').click(function(){
			            if($(this).prop("checked") == true){
			            
			                $('input[type="checkbox"]').prop("checked",true);
			            }
			            else if($(this).prop("checked") == false){
			            	  $('input[type="checkbox"]').prop("checked",false);
			            }
			        });
			});
			</script>
</html>
