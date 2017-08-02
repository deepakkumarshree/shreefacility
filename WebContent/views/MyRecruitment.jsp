<!DOCTYPE html>
<html lang="en">
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
                  <div class="tab-content" style="width: 100%;height: 100%;">
						
						<div class=" tab-pane fade in active" id="addemp">
							<jsp:include page="/showEmployee" ></jsp:include>	
						</div>		              
		             
		               <div class=" col-lg-12 tab-pane" id="viewemp">	
		               		<jsp:include page="/showEmployeeList" ></jsp:include>		
		              </div>
		              
		          </div>
		          </div>
		
          </section></section>
      </section>
  </body>
  <script type="text/javascript">
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
</html>
