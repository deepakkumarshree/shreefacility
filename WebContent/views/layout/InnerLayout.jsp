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

	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="bootstrap/css/jquery-ui.css">
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  	<link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css">
	<link rel="stylesheet" href="bootstrap/css/jquery.datetimepicker.css">
  	<link rel="stylesheet" href="dist/css/AdminLTE.min.css">
  	<link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">
	<link rel="stylesheet" href="plugins/iCheck/flat/blue.css">
	<link rel="stylesheet" href="bootstrap/css/colorbox/colorbox.css" type="text/css" />	
	<link rel="stylesheet" href="bootstrap/css/jqwidgets/jqx.base.css" type="text/css" />
	
	<script src="plugins/jQuery/jquery-2.2.3.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="js/layout/jquery-ui.js" /></script>
	<script src="plugins/datatables/jquery.dataTables.min.js"></script>
	<script src="plugins/datatables/dataTables.bootstrap.min.js"></script>
	<script src="dist/js/app.min.js"></script>
	<script src="js/layout/validate.min.js" /></script>
	<script src="js/layout/setcase.js" /></script>
	<script src="js/layout/jquery.datetimepicker.js" /></script>
	<script src="js/colorbox/jquery.colorbox.js"></script>
	<script src="js/jqwidgets/jqx-all.js" /></script>
	
	<script src="js/common.js" /></script>
	
</head>

<body class="hold-transition skin-blue sidebar-collapse">
<div class="wrapper">
	<div class="content-wrapper">
		<tiles:insertAttribute name="body" />
	</div>
</div>

</body>

</html>