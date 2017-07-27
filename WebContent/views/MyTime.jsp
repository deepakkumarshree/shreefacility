<!DOCTYPE html>
<html lang="en">
   <body>

  <section id="container" >    
      <section id="main-content">
          <section class="wrapper">
            
                  <div class="col-lg-9 main-chart">
        
                                        				
					<div class="row">
						 
                      	<div class="col-md-9 col-sm-9 mb">
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
		               	<jsp:include page="/addLeave" ></jsp:include>		
		              </div>
		          </div>
              </div>
          </section></section>
      </section>
  </body>
</html>
