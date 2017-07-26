<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
 
<div class="container-fluid">
	<h4 class="widgettitle">Employee List</h4>
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hide"
			id="infobardiv">
			<div class="alert alert-info alert-dismissable" id="infobar">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
			</div>
		</div>

		<div class="col-lg-12 hide" id="errorbardiv">
			<div class="alert-error alert-error-info" id="errorbar">
				<button type="button" class="close" data-dismiss="alert">&times;</button>
			</div>
		</div>
		
   		<form:form role="form" id="emplist-form" path="emplist-form" action="" commandName="empBean">	
      		
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="box">
						<div class="box-body table-responsive">
							<table id="debUpdate" class="table table-bordered table-striped">
							
							<thead>
								<tr>
									<th style="width: 5%">Sr No</th>
									<th style="width: 10%">Emp Code</th>
									<th style="width: 10%">First Name</th>
									<th style="width: 10%">Middle Name</th>
									<th style="width: 10%">Last Name</th>
									<th style="width: 10%">Address</th>
								</tr>
							</thead>
							
							<tbody id="tblbody">
								<c:if test="${not empty emplist}">
									<c:forEach var="ob" items="${emplist}" varStatus="status">
										<tr>
											<td class="text-center">${status.index+1}
												<input type="hidden" name="code${status.index}" id="code${status.index}" value="${ob.emp.empcode}" />
											</td>
											<td class="text-center"><c:out value="${ob.emp.empcode}"/></td>
											<td><c:out value="${ob.emp.firstname}" /></td>
											<td><c:out value="${ob.emp.middlename}"/></td>
											<td><c:out value="${ob.emp.lastname}" /></td>											
											<td><c:out value="${ob.paddress}" /></td>
											
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
		   		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="form-group">
						<input type="button" class="btn btn-theme"
						onClick="window.location='dashboard'" tabindex="16"
						value="Exit">
					</div>
		 		</div>
			</div>
		</form:form>
	</div>

<script>
 /*  $(function () {
    $('#debUpdate').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true
    });
  }); */
</script>	
	
</body>
</html>

