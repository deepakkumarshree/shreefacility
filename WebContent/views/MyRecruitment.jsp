<!DOCTYPE html>
<html lang="en">
   <body>

  <section id="container" >    
      <section id="main-content">
          <section class="wrapper">
            
                  <div class="col-lg-12 main-chart">
        
                                        				
					<div class="row">
						 
                      	<div class="col-md-12 col-sm-12">
                      		<ul class="nav nav-tabs" id="myTab">
								<li class="active"><a href="#addemp" data-toggle="tab">Create Employee</a></li>
								<li><a href="#viewemp" data-toggle="tab">View Employee</a></li>
								
							</ul>
                      	</div>
                      	    
                  </div>
                  <div class="tab-content">
						<div class=" backdiv tab-pane fade in active" id="addemp">
		                  <jsp:include page="/showEmployee" ></jsp:include>
		              </div>
		             
		               <div class="tab-pane backdiv" id="viewemp">					
			                  
			             
		              </div>
		            </div>
			</div>
          </section></section>
      </section>
  </body>
</html>
