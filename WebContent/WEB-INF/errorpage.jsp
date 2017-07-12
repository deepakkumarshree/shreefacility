<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page isErrorPage="true"%>

<html>
<head>
<title>Show Error Page</title>


</head>
<body>


<div style="width: 100%" align="center" >

		<%--  <img style="width: 456px; height: 315px; margin-top: 78px;"
			alt="errorimage" src="${styleurl}/error_page.jpg"/> --%>
			 <img style="width: 456px; height: 315px; margin-top: 78px;"
			alt="errorimage" src="resources/image/errorpage.jpg"/>  
</div>
	
	<div
		style="height: 80px; width: 700px; overflow: hidden; margin-left: 350px; text-align: center;">
		  <img alt=""
			src="resources/image/click-go-back-button.png" onclick="history.back();window.close();" style="margin-left: -70px; width: 258px; height: 89px;">
	</div>
	<div style="width: 100%;color: red;" align="center" >
	<p>Error code is ${pageContext.errorData.statusCode}</p>
	<p>URI :${pageContext.errorData.requestURI}</p>
	
	</div>
</body>
</html>