<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Shree Partners Leave Management System</title>

    <!-- Bootstrap core CSS -->
    <link href="resources/assets/css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="resources/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="resources/assets/css/zabuto_calendar.css">
    <link rel="stylesheet" type="text/css" href="resources/assets/js/gritter/css/jquery.gritter.css" />
    <link rel="stylesheet" type="text/css" href="resources/assets/lineicons/style.css">    
    
    <!-- Custom styles for this template -->
    <link href="resources/assets/css/style.css" rel="stylesheet">
    <link href="resources/assets/css/style-responsive.css" rel="stylesheet">
    <script src="resources/assets/js/chart-master/Chart.js"></script> 
  </head>

  <body>

  <section id="container" >
     
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
      
      <!-- **********************************************************************************************************************************************************
      MAIN SIDEBAR MENU
      *********************************************************************************************************************************************************** -->
      <!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">
              
              	  <p class="centered"><a href="profile.html"><img src="resources/image/ui-sam.png" class="img-circle" width="60"></a></p>
              	  <h5 class="centered">Shree Partners LMS</h5>
              	  	
                  <li class="mt">
                      <a class="active" href="index.html">
                          <i class="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-desktop"></i>
                          <span>Leave Management System</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="general.html">Change Password for self/others</a></li>
                          <li><a  href="buttons.html">Deactivate Employee</a></li>
                          <li><a  href="panels.html">Create Leave</a></li>
                          <li><a  href="panels.html">Register Employee</a></li>
                          <li><a  href="panels.html">View All Employees</a></li>
                          <li><a  href="panels.html">View/Edit Employee</a></li>
                          <li><a  href="showLeaveType">Add/View Leave Type</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-cogs"></i>
                          <span>Recruitment Portal</span>
                      </a>
                      <ul class="sub">
                        
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-book"></i>
                          <span>Profile</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="blank.html">Change Password</a></li>
                          <li><a  href="login.html">Change Email-Id</a></li>
                          
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-tasks"></i>
                          <span>Leave</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="form_component.html">Create Leave</a></li>
                          <li><a  href="form_component.html">Approve Leave</a></li>
                      </ul>
                  </li>
                  
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->
      
      <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
      <!--main content start-->
      <section id="main-content">
          <section class="wrapper">

              <div class="row">
                  <div class="col-lg-9 main-chart">
                      <div class="row mt">
                      	<div class="col-md-4 col-sm-4 mb">
                      	</div>
						<div class="col-md-4 mb">
						</div><!-- /col-md-4 -->
                    </div><!-- /row -->
					<div class="row">
					
					</div>
					
					<div class="row mt">
                      <!--CUSTOM CHART START -->
                      <div class="border-head">
                          <h3>DashBoard</h3>
                      </div>
                      <div class="custom-bar-chart">
                          <ul class="y-axis">
                              <li><span></span></li>
                              <li><span></span></li>
                              <li><span></span></li>
                              <li><span></span></li>
                              <li><span></span></li>
                              <li><span></span></li>
                          </ul>
                          <div class="bar">
                          
                          </div>
                          <div class="bar ">
                             
                          </div>
                          <div class="bar ">
                             
                          </div>
                          <div class="bar ">
                          </div>
                          <div class="bar">
                          </div>
                          <div class="bar ">
                          </div>
                          <div class="bar">
                          </div>
                      </div>
                      <!--custom chart end-->
					</div><!-- /row -->	
					
                  </div><!-- /col-lg-9 END SECTION MIDDLE -->
                  <div class="col-lg-3 ds">
                    <!--COMPLETED ACTIONS DONUTS CHART-->
						<h3>NOTIFICATIONS</h3>
                                        
                      <!-- First Action -->
                      <div class="desc">
                      
                      </div>
                      <!-- Second Action -->
                      <div class="desc">
                      	
                      	<div class="details">
                      		
                      	</div>
                      </div>
                      <!-- Third Action -->
                      <div class="desc">
                      	
                      	<div class="details">
                      		
                      	</div>
                      </div>
                      <!-- Fourth Action -->
                      <div class="desc">
                      	
                      	
                      </div>
                      <!-- Fifth Action -->
                      <div class="desc">
                      
                      </div>

                       <!-- USERS ONLINE SECTION -->
						<h3>TEAM MEMBERS</h3>
                      <!-- First Member -->
                      <div class="desc">
                      
                      </div>
                      <!-- Second Member -->
                      <div class="desc">
                      	
                      </div>
                      <!-- Third Member -->
                      <div class="desc">
                      	
                      	</div>
                      </div>
                      <!-- Fourth Member -->
                      <div class="desc">
                      
                      	</div>
                      </div>
                      <!-- Fifth Member -->
                      <div class="desc">
                      	
                      	
                      </div>
          </section>
      </section>

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
             Copyright © 2017 Shreepartners.com All rights reserved
              <a href="index.html#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
      <!--footer end-->
  </section>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="resources/assets/js/jquery.js"></script>
    <script src="resources/assets/js/jquery-1.8.3.min.js"></script>
    <script src="resources/assets/js/bootstrap.min.js"></script>
    <script class="include" type="text/javascript" src="resources/assets/js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="resources/assets/js/jquery.scrollTo.min.js"></script>
    <script src="resources/assets/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="resources/assets/js/jquery.sparkline.js"></script>


    <!--common script for all pages-->
    <script src="resources/assets/js/common-scripts.js"></script>
    
    <script type="text/javascript" src="resources/assets/js/gritter/js/jquery.gritter.js"></script>
    <script type="text/javascript" src="resources/assets/js/gritter-conf.js"></script>

    <!--script for this page-->
    <script src="resources/assets/js/sparkline-chart.js"></script>    
	<script src="resources/assets/js/zabuto_calendar.js"></script>	
	
	
  

  </body>
</html>
