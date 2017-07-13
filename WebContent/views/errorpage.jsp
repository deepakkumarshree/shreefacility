<%@page isErrorPage="true"%>

<html>
<head>
<title>Error Page</title>
</head>
<body>


<div style="width: 100%" align="center" >
<h1>Sorry,We are Unavilable !!!!!!!!!!!!!!!!</h1> 
</div>
	
	<div
		style="height: 80px; width: 700px; overflow: hidden; margin-left: 350px; text-align: center;">
		  <img alt=""
			src="resources/image/click-go-back-button.png" onclick="history.back();window.close();" style="margin-left: -70px; width: 258px; height: 89px;">
	</div>
	<div style="width: 100%;color: red;" align="center" >
	<p>Error code is ${pageContext.errorData.statusCode}</p>
	<p>URI :${pageContext.errorData.requestURI}</p> 	</div>
	

</body>
</html>