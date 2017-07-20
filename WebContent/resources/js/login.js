$(document).ready(function() {
	
	$("#login-form").validate({
		// Specify the validation rules
		rules : {
			cid : {
				required : true,
			},
			username : {
				required : true,
			},
			password : {
				required : true,
			},
		},
		
		// Specify the validation error messages
		messages : {
		},
		highlight : function(label) {
			jQuery(label).closest('.form-group').addClass('error');
			jQuery(label).closest('.form-group').removeClass('success');
		},
		success : function(label) {
			label.addClass('valid').closest('.form-group').addClass('success');
			jQuery(label).closest('.form-group').removeClass('error');
		}
	});

	$("#cid").Setcase({
		caseValue : 'upper'
	});

	var url = jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	//alert(status);

	if (status != 'undefined') {
		if (status == '0') {
			alert("Unable to Save Agent.");
		}else if (status=='INVPASSWORD') {
			alert("Invalid Password or Password is case sensitive ! Please check and login!");
		}else if (status=='INVUSERNAME') {
			alert("Invalid Username! Please check and login!");
		}else if (status=='Invalid') {
			alert("Something Went Wrong! Please check and login!");
		}else if (status == 'DISABLED') {
			alert("User has been disabled. Please contact your supervisor.");
		}else if (status == 'ALEADYLOGGED') {
			
			/*var logout = confirm("You already logged in with another user, Do You want to logout from old user ?");
			
			if(logout){
				$("#login-form").prop("action","logout.htm");
				$("#login-form").submit();
			} else {
				$("#login-form").prop("action","showDashboard.htm");
				$("#login-form").submit();
			}*/
			
			alert("Only one id will be allow for login, want to open another id first logout than login again.");
			
			$("#login-form").prop("action","showLogin.htm");
			$("#login-form").submit();
			
		}
	} else { 
		alert('Loggedd In');
	}
	
});

var creq ;
var pack;

 function GetFinYear(cid)
 {
	var url='getFinyear.htm?method=checkfinyear&CompId='+trimAll(cid);
 	var browser = navigator.appName;
     if(browser == "Microsoft Internet Explorer"){
    	 pack = new ActiveXObject("Microsoft.XMLHTTP");
     }else{
    	 pack = new XMLHttpRequest() ;
     }
 	if (pack) {
 		pack.onreadystatechange = processYear ;
 		pack.open("POST", url, true);
 		pack.send(null);
     }
 	
 } 

 function processYear()
 {	
 	if (pack.readyState == 4)
 	{ 
	 	if (pack.status == 200) 
	 	{
 			var data=pack.responseText.split(";;;;");
 		  	for(var ik=0;ik<data.length-1;ik++)
 		  	{
 		    	var pck=data[ik].split(">>>>");
 		    	document.forms[0].FYear.options[ik]=new Option(pck[0],pck[1]);
 			}
	 	}
 	}
 }
 
 function trimAll(sString) 
 {
 	while (sString.substring(0,1) == ' ')
 	{
 	sString = sString.substring(1, sString.length);
 	}
 	while (sString.substring(sString.length-1, sString.length) == ' ')
 	{
 	sString = sString.substring(0,sString.length-1);
 	}
 	return sString;
 }
 
 
 
 