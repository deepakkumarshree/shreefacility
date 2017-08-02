<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
 
<div class="container-fluid">
	<h4 class="widgettitle">Employee List</h4>		
   		<form:form role="form" id="emplist-form" path="emplist-form" action="" commandName="empBean">	
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="box">
						<div class="box-body table-responsive">
							<table id="emptbl" class="table table-bordered table-striped">
							
							<thead>
								<tr>
									<th style="width: 2%">Sr No</th>
									<th style="width: 10%">Emp Code</th>
									<th style="width: 10%">First Name</th>									
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
											<td class="text-center"><a href="updateEmployee?empId=${ob.emp.empid}" id="addConsig" class="iframe" onclick=""><c:out value="${ob.emp.empcode}"/></a></td>
											<td><c:out value="${ob.emp.firstname}" /></td>											
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
   $(function () {
    $('#emptbl').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": false,
      "info": false,
      "autoWidth": true,
      /* "overflow-y":scroll,
      "overflow-x":hidden, */
     
    });
    $(".iframe").colorbox({
		iframe : true,
		width : "90%",
		height : "80%",
		scrolling : true,
	});
  }); 
</script>	
	
</body>
</html>

