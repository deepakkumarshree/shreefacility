<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<script type="text/javascript" src="resources/js/MyTime.js"></script>
</head>
   <body>

  <section id="container" >    
      <section id="main-content">
          <section class="wrapper">
            
                  <div class="col-lg-12 main-chart">
        
                                        				
					<div class="row">
						 
                      	<div class="col-md-12 col-sm-9">
                      		<ul class="nav nav-tabs" id="myTab">
								 
								<li><a href="#leave" class="active" data-toggle="tab">Leave</a></li>

							   <li><a href="#apleidleave" data-toggle="tab">Leave Approval</a></li>

								<!-- <li class="active"><a href="#attendance" data-toggle="tab">Attendance</a></li>  -->

								
							</ul>
                      	</div>
                      	    
                  </div>
                 
                   <div class="tab-content">
	                     <div class="tab-pane  in active" id="leave">	
	                   		<jsp:include page="/showAddLeave" ></jsp:include>
	                   </div>
	                    <div class="tab-pane" id="apleidleave">	
	                   		<jsp:include page="/showApproveLeave" ></jsp:include>
	                   </div>                                     
						<div class=" backdiv tab-pane fade " id="attendance">					
		                <%--  <jsp:include page="/showEmployee" ></jsp:include> --%>
		              </div>
		          
              </div></div>
          </section></section>
      </section>
  </body>   
</html>
