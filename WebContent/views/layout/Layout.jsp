<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<meta name="description" content="">
	<meta name="author" content="">
	
	<link rel="shortcut icon" href="<%=path %>/images/favicon.ico"/>
	
	<title><tiles:insertAttribute name="title" ignore="true" /></title>

	 <head>
    <title>Shree Partners Leave Management System</title>

    <!-- Bootstrap core CSS -->
    <link href="resources/assets/css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="resources/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="resources/assets/css/zabuto_calendar.css">
    <link rel="stylesheet" type="text/css" href="resources/assets/js/gritter/css/jquery.gritter.css" />
    <link rel="stylesheet" type="text/css" href="resources/assets/lineicons/style.css"> 
   	<link href="resources/assets/css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
	<link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="resources/bootstrap/css/jquery-ui.css">
	<link rel="stylesheet" href="resources/assets/bootstrap/css/jqwidgets/jqx.base.css" type="text/css" />
  	<link rel="stylesheet" href="resources/assets/plugins/datatables/dataTables.bootstrap.css">   
  	<link rel="stylesheet" href="resources/bootstrap/css/jquery.datetimepicker.css"> 	
    
    <!-- JS -->
 	<script src="resources/plugins/jQuery/jquery-2.2.3.min.js"></script>
	<script src="resources/js/layout/jquery-ui.js" /></script>
	<script src="resources/bootstrap/js/bootstrap.min.js"></script>
	<script src="resources/dist/js/app.min.js"></script>
	<script src="resources/js/layout/validate.min.js" /></script>
	<script src="resources/js/layout/setcase.js" /></script>
	<script src="resources/js/layout/jquery.datetimepicker.js" /></script>
	 <script class="include" type="text/javascript" src="resources/assets/js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="resources/assets/js/jquery.scrollTo.min.js"></script>
    <script src="resources/assets/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="resources/assets/js/jquery.sparkline.js"></script>
    <script src="resources/assets/js/common-scripts.js"></script>    
    <script type="text/javascript" src="resources/assets/js/gritter/js/jquery.gritter.js"></script>
    <script type="text/javascript" src="resources/assets/js/gritter-conf.js"></script>
  </head>
</head>
<body class="hold-transition skin-blue sidebar-mini">
	<div>
	
		<tiles:insertAttribute name="header" />
		
		<tiles:insertAttribute name="menu" />
		
		<div class="content-wrapper">
			<tiles:insertAttribute name="body" />
		</div>
			
	  	<footer class="main-footer" style="padding-top: 100px;">
	    	<div class="pull-right hidden-xs">
	      		<b>Version</b> 1.1&nbsp;&nbsp;&nbsp;&nbsp;
	    	</div>
	    	<strong><label style="padding-left:300px;"></label><a href="http://www.shreepartners.com/">Copyright © 2017 Shreepartners.com All rights reserved.</a></strong>  
	  	</footer>
	</div>
</body>

</html>