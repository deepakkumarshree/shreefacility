$(document).ready(function() {
	
	$("[id^=searchopt]").click(function(){
		if($(this).html().trim()=="Pin Code"){
			$("#newPageDiv").load('jsp/dashboard/searchPincode.jsp');
		}
	});
	
	$("[id^=searchopt]").click(function(){
		if($(this).html().trim()=="Party"){
			$("#newPageDiv").load('jsp/dashboard/searchparty.jsp');
		}
	});
	
	
});

