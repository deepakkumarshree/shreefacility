$(document).ready(function() {
	var frightArray=new Array();
	
	var url	=	jQuery(location).attr('href');
	var status = url.split("?status=")[1];
	
	if(status!='undefined')
	{
		if(status=='Unable')
		{
			$("#errorbar").text("");
			$('#errorbar').append("Unable to Save Data.");
			$("#errorbardiv").removeClass("hide").addClass("show");
		}
		else if (String(status).length>9 ){
		    $("#infobar").text("");
		    $("#infoNobar").text("");
			$('#infobar').append("Data Saved Successfully.");
			$('#infoNobar').append("Debtor Code : " + decodeURIComponent(status));
			$("#infobardiv").removeClass("hide").addClass("show");
		}
		
		$("input").keyup(function() {
			$("#infobar").text("");
			$("#infoNobar").text("");
			$("#infobardiv").removeClass("show").addClass("hide");
			$("#errorbar").text("");
			$("#errorbardiv").removeClass("show").addClass("hide");
		});
	}
	
	
	jQuery("#debtor-form").validate({
		rules : {
			acname : {
				required : true,
				alphaspaceonly : true,
			},
			groupName : {
				required : true,
			},
			industry : {
				required : true,
				maxlength:"50",
			},
			vertical : {
				required : true,
				maxlength:"50",
			},
			branchName : {
				required : true,
				maxlength:"50",
			},
			keyManager : {
				required : true,
				maxlength:"50",
			},
			opOwner : {
				required : true,
				maxlength:"50",
			},
			podcell : {
				required : true,
				maxlength:"50",
			},
			collPerson : {
				required : true,
				maxlength:"50",
			},
			paymentType : {
				required : true,
				maxlength:"50",
			},
			bookingType : {
				required : true,
				maxlength:"50",
			},
			pickUpDelivery : {
				required : true,
				maxlength:"50",
			},
			transitMode : {
				required : true,
				maxlength:"50",
			},
			packagingType : {
				required : true,
				maxlength:"50",
			},
			contentType : {
				required : true,
				maxlength:"50",
			},
			address1 : {
				required:true,
				maxlength:"100",
			},
			bankacno:{
				required:true,
				maxlength:"25",
				digits:true,
			},
			bankName:{
				required:true,
				alphaspaceonly:true,
				maxlength:"100",
			},
			ifscCode:{
				required:true,
				maxlength:"25",
				alphanumericonly:true,
			},
			bankBranch:{
				required:true,
				alphaspaceonly:true,
				maxlength:"100",
			},
			location:{
				required:true,
				maxlength:"50",
			},
			pincode:{
				required:true,
				number:true,
				maxlength:"6",
				digits:true,
			},
			city:{
				required:true,
				maxlength:"30",
			},
			district:{
				required:true,
				maxlength:"30",
			},
			panno:{
				panno:true,
				required:true,
				maxlength:"30",
			},
			tinno:{
				alphanumericonly:true,
				required:true,
			},
			servicetaxno:{
				alphanumericonly:true,
			},
			cstno:{
				alphanumericonly:true,
			},
			ratepkg:{
				decimaltwospaceonly:true,
				maxlength:"10",
			},
			minwght:{
				maxlength:"10",
				digits:true,
			},
			mindocket:{
				maxlength:"10",
				digits:true,
			},
			fovchrg:{
				percentupto100:true,
			},
			minfov:{
				digits:true,
				maxlength:"10",
			},
			maxfov:{
				maxlength:"10",
				digits:true,
			},
			rateperbox:{
				maxlength:"10",
				decimaltwospaceonly:true,
			},
			minbox:{
				maxlength:"10",
				digits:true,
			},
			docketchrg:{
				maxlength:"10",
				decimaltwospaceonly:true,
			},
			fuelcharge:{
				percentupto100:true,
				decimaltwospaceonly:true,
			},
			daccchrg:{
				maxlength:"10",
				decimaltwospaceonly:true,
			},
			coddodcharg:{
				maxlength:"10",
				decimaltwospaceonly:true,
			},
			volumcft:{
				maxlength:"10",
				digits:true,
			},
			contactPersono:{
				required:true,
				alphaspaceonly:true,
				maxlength:"50",
				
			},
			contactPersonacc:{
				required:true,
				alphaspaceonly:true,
				maxlength:"50",
			},
			designationope:{
				required:true,
				alphaspaceonly:true,
				maxlength:"30",
			},
			designationacc:{
				required:true,
				alphaspaceonly:true,
				maxlength:"30",
			},
			emailope:{
				email:true,
				required:true,
				maxlength:"50",
			},
			emailacc:{
				email:true,
				required:true,
				maxlength:"50",
			},
			mobilenoope:{
				maxlength:"10",
				digits:true,
			},
			mobilenoacc:{
				maxlength:"10",
				digits:true,
			},
			contractdate:{
				required:true,
			},
			effectivedate:{
				required:true,
			},
			validuntil:{
				required:true,
			},
			slab1From:{
				maxlength:"10",
				digits:true,
			},
			slab1To:{
				maxlength:"10",
				digits:true,
			},
			slab2From:{
				maxlength:"10",
				digits:true,
			},
			slab2To:{
				maxlength:"10",
				digits:true,
			},
			slab3From:{
				maxlength:"10",
				digits:true,
			},
			slab3To:{
				maxlength:"10",
				digits:true,
			},
			slab4From:{
				maxlength:"10",
				digits:true,
			},
			slab4To:{
				maxlength:"10",
				digits:true,
			},
			slab5From:{
				maxlength:"10",
				digits:true,
			},
			slab5To:{
				maxlength:"10",
				digits:true,
			},
			slab6From:{
				maxlength:"10",
				digits:true,
			},
			slab6To:{
				maxlength:"10",
				digits:true,
			},
			oda1From:{
				maxlength:"10",
				digits:true,
			},
			oda1To:{
				maxlength:"10",
				digits:true,
			},
			oda2From:{
				maxlength:"10",
				digits:true,
			},
			oda2To:{
				maxlength:"10",
				digits:true,
			},
			oda3From:{
				maxlength:"10",
				digits:true,
			},
			oda3To:{
				maxlength:"10",
				digits:true,
			},
			oda4From:{
				maxlength:"10",
				digits:true,
			},
			oda4To:{
				maxlength:"10",
				digits:true,
			},
			oda5From:{
				maxlength:"10",
				digits:true,
			},
			oda5To:{
				maxlength:"10",
				digits:true,
			},
			oda6From:{
				maxlength:"10",
				digits:true,
			},
			oda6To:{
				maxlength:"10",
				digits:true,
			},
			stateName:{
				required:true,
			},
			districtName:{
				required:true,
			},
			email:{
				email:true,
			},
			mobileno:{
				maxlength:"10",
				digits:true,
			},
			creditDay:{
				maxlength:"3",
				digits:true,
			},
			creditLimit:{
				maxlength:"10",
				digits:true,
			},
			website:{
				url:true,
			},
			codeno:{
				alphanumericonly:true,
			},
			odachrg1Slab1:{
			 maxlength:"10",
				digits:true,
			},
			odachrg1Slab2:{
				digits:true,
			 maxlength:"10",
			},
			odachrg1Slab3:{
				digits:true,
			 maxlength:"10",	
			},
			odachrg1Slab4:{
			 maxlength:"10",
				digits:true,
			},
			odachrg1Slab5:{
			 maxlength:"10",
				digits:true,
			},
			odachrg1Slab6:{
			 maxlength:"10",
				digits:true,
			},
			odachrg2Slab1:{
			 maxlength:"10",
				digits:true,
			},
			odachrg2Slab2:{
			 maxlength:"10",
				digits:true,
			},
			odachrg2Slab3:{
			 maxlength:"10",
				digits:true,
			},
			odachrg2Slab4:{
			 maxlength:"10",
				digits:true,
			},
			odachrg2Slab5:{
			 maxlength:"10",
				digits:true,
			},
			odachrg2Slab6:{
			 maxlength:"10",
				digits:true,
			},
			odachrg3Slab1:{
			 maxlength:"10",
				digits:true,
			},
			odachrg3Slab2:{
			 maxlength:"10",
				digits:true,
			},
			odachrg3Slab3:{
			 maxlength:"10",
				digits:true,
			},
			odachrg3Slab4:{
			 maxlength:"10",
				digits:true,
			},
			odachrg3Slab5:{
			 maxlength:"10",
				digits:true,
			},
			odachrg3Slab6:{
			 maxlength:"10",
				digits:true,
			},
			odachrg4Slab1:{
			 maxlength:"10",
				digits:true,
			},
			odachrg4Slab2:{
			 maxlength:"10",
				digits:true,
			},
			odachrg4Slab3:{
			 maxlength:"10",
				digits:true,
			},
			odachrg4Slab4:{
			 maxlength:"10",
				digits:true,
			},
			odachrg4Slab5:{
			 maxlength:"10",
				digits:true,
			},
			odachrg4Slab6:{
			 maxlength:"10",
				digits:true,
			},
			odachrg5Slab1:{
			 maxlength:"10",
				digits:true,
			},
			odachrg5Slab2:{
			 maxlength:"10",
				digits:true,
			},
			odachrg5Slab3:{
			 maxlength:"10",
				digits:true,
			},
			odachrg5Slab4:{
			 maxlength:"10",	
				digits:true,
			},
			odachrg5Slab5:{
			 maxlength:"10",
				digits:true,
			},
			odachrg5Slab6:{
			 maxlength:"10",
				digits:true,
			},
			odachrg6Slab1:{
			 maxlength:"10",
				digits:true,
			},
			odachrg6Slab2:{
			 maxlength:"10",
				digits:true,
			},
			odachrg6Slab3:{
			 maxlength:"10",
				digits:true,
			},
			odachrg6Slab4:{
			 maxlength:"10",
				digits:true,
			},
			odachrg6Slab5:{
			 maxlength:"10",
				digits:true,
			},
			odachrg6Slab6:{
			 maxlength:"10",
				digits:true,
			},
		},
		
		messages : {
		},
		
		highlight : function(input) {
			jQuery(input).closest('.form-group').addClass('error');
			jQuery(input).closest('.form-group').removeClass('success');
		},
		
		success : function(input) {
			input.addClass('valid').closest('.form-group').addClass('success');
			jQuery(input).closest('.form-group').removeClass('error');
		},
		
		
	});

	$("#address1,#address2,#location,#acname,#bankName,#bankBranch,#contactPersono,#designationope,#designationacc,#contactPersonacc").Setcase({
		caseValue : 'pascal'
	});
	
	$("#tinno,#panno,#cstno,#servicetaxno,#ifscCode,#codeno").Setcase({
		caseValue : 'upper'
	});
					
	jQuery("#contractdate").datetimepicker({
		format : 'd/m/Y',
		changeMonth : false,
		changeYear : false,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		maxDate : 0,
	});

	
	jQuery("#effectivedate").datetimepicker({
		format : 'd/m/Y',
		changeMonth : false,
		changeYear : false,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
	});	
	
	jQuery("#validuntil").datetimepicker({
		format : 'd/m/Y',
		changeMonth : false,
		changeYear : false,
		timepicker : false,
		closeOnDateSelect : true,
		scrollInput : false,
		
	});			
			
	$("#validuntil").blur(function() {
			
		var contractdate = $("#contractdate").val();
	    var validuntil=$("#validuntil").val();
	    var contractdatesplit=contractdate.split("/");
	    var validuntilsplit=validuntil.split("/");
	    var valid=new Date(validuntilsplit[2],validuntilsplit[1],validuntilsplit[0]);
		var contract=new Date(contractdatesplit[2],contractdatesplit[1],contractdatesplit[0]);
		
		if(valid<contract)
		{
			alert("Valid Until Date Must Be Greater Than Contract Date ");
	        $("#validuntil").val('');
		    $("#validuntil").focus();
		}
	});
			
				
	$("#stateNameOda").change(function() {
		
		$('#pintblbody tr').remove();// reset the pin Oda Table
		
		if ($("#stateNameOda").val() != "") {
			var formData = {
				"stateName" : jQuery("#stateNameOda").val(),
			};

			jQuery.ajax({
				type : "GET",
				url : 'districtListByState.htm', 
				data : formData,
				success : function(result) {
					if (result == 'null') {
						jQuery("#debtor-form select[id='districtNameOda'] option:gt(0)").remove().end();
					} else {
						var content = result.split("@");
						var optlist = $("#districtNameOda");
						jQuery("#debtor-form select[id='districtNameOda'] option:gt(0)").remove().end();
						for (var j = 0; j < content.length; j++) {
							var lst = content[j].split("<>");
							optlist.append(new Option(lst[0],lst[1]));
						}
					}
				},
				error : function() {
					alert("Failed to load District Name");
				}
			});
		}
	});
				
	
				
	$("#saveCustomerBtn").click(function(){
		
		$('#infobar').text("");
	
	  	pincodeCityjsonObjChecked = [];
		var	masterodadata = [];
		var	statefreightdata = [];
		var	cityfreightdata = [];
		var rowCount=$('#defineOdaChargesDistance tr').length;

		for(var j=1;j<rowCount;j++)
		{
			var odalocation=$("#odacharges"+j).val();	  
			var slab1=Number($("#Slab1odachrg"+j).val());
			var slab2=Number($("#Slab2odachrg"+j).val());
			var slab3=Number($("#Slab3odachrg"+j).val());
			var slab4=Number($("#Slab4odachrg"+j).val());
			var slab5=Number($("#Slab5odachrg"+j).val());
			var slab6=Number($("#Slab6odachrg"+j).val());
		  
		    item={};
		    item["odalocation"]=odalocation;
		    item["slab1"]=slab1;
		    item["slab2"]=slab2;
		    item["slab3"]=slab3;
		    item["slab4"]=slab4;
		    item["slab5"]=slab5;
		    item["slab6"]=slab6;
		    masterodadata.push(item);
	  }
		
		$('#masterodaData').val(JSON.stringify(masterodadata));
		  
		$("input:checkbox:checked.checkboxcls").each(function () {
			
			var id = $(this).val();
			
			var cityid =$("#cityid"+id+"").val();
			var pincode = $("#pincode"+id+"").val();
			var cityname = $("#cityname"+id+"").val();
			var oda= Number($("#oda"+id+"").val());
			item = {};
			item["cityid"] = cityid;
			item["pincode"] = pincode;
			item["cityname"] = cityname;
			item["oda"]=oda;
			
			pincodeCityjsonObjChecked.push(item);
		});
		  
		$('#pincodeCityDataChecked').val(JSON.stringify(pincodeCityjsonObjChecked));

		var statefrieghttbl = $('#statefrieghttbl').dataTable();
		var statefrieghttbl_len = statefrieghttbl.fnGetNodes().length;//fnGetNodes fnGetData
	   
		for(var j=1;j<statefrieghttbl_len;j++)
		{
			var statename=statefrieghttbl.fnGetData(j)[1];	
				 
		    item={};
		    item["statename"]=statename;
		    item["frieghtamount"]=frightArray[j];		   
		    statefreightdata.push(item);
		}
		$('#hiddenstatefrieghts').val(JSON.stringify(statefreightdata));

		
		var cityfrieghttbl = $('#cityfrieghttblbody tr');
		var cityfrieghttbl_len = cityfrieghttbl.length;//fnGetNodes fnGetData
		
		for(var j=0;j<cityfrieghttbl_len;j++)
		{
			var citynamefrom=$("#fromcity"+j).val();
			var citynameto=$("#tocity"+j).val();
			var rate=$("#rate"+j).val();
				 
		    item={};
		    item["citynamefrom"]=citynamefrom;
		    item["citynameto"]=citynameto;	
		    item["rate"]=rate;	
		    cityfreightdata.push(item);
		}		
		
		$('#hiddencityfreights').val(JSON.stringify(cityfreightdata));
	  
  		var	staxdata = [];
  		var rowsCount=$('#staxtable tr').length;

		for(var j=0; j<rowsCount-1; j++)
		{
			var stappch=Number($("#stApp"+j).val());
			var ttype=$("#transitType"+j).val();
			var sttype=$("#staxType"+j).val();
		  
		    item={};
		    item["stapp"]=stappch;
		    item["trantype"]=ttype;
		    item["staxtype"]=sttype;
		    staxdata.push(item);
		}
	
		$('#serviceTaxData').val(JSON.stringify(staxdata));
		
		
		var	brdata = [];
		var	brtodata = [];
		//alert($('#frombranchtable tr').length);
  		var rowbCount=$('#frombranchtable tr').length-1;
  		//alert(1);
		for(var j=0; j<rowbCount; j++)
		{
			if($('#from'+j).is(":checked") ) 
			{
				var bid=$("#frombid"+j).val();
			  
			    item={};
			    item["brid"]=bid;
			    brdata.push(item);
			}
			if($('#to'+j).is(":checked") ) 
			{
				var bid=$("#tobid"+j).val();
			  
			    item={};
			    item["brid"]=bid;
			    brtodata.push(item);
			}
		}	
		if( brdata.length < 1 )
		{
			alert("Please Select Customer Booking Location Branch.");
			return false;
		}
		/*if( brtodata.length < 1 )
		{
			alert("Please Select Customer Delivery Location Branch.");
			return false;
		}*/
		//alert(brdata);
		//alert(brtodata);
		$('#branchName').val(JSON.stringify(brdata));
		$('#hiddenDeliveryBranch').val(JSON.stringify(brtodata));
		
	});	
	
	 
	$("#allchk").click(function() {
        if ($(this).is(':checked')) {
        	$(".checkboxcls").prop('checked', true);
        }
        else {
        	$(".checkboxcls").prop('checked', false);
        } 
	});	

	$(".checkboxcls").click(function() {
		var id = $(this).val();
		
		if( $(this).prop('checked') ) {
			$("#oda"+id+"").val("1");
		} else {
			$("#oda"+id+"").val("0");
		} 
	});
	
	$(".checkboxStax").click(function() {
		var id = $(this).val();
		
		if( $(this).prop('checked') ) {
			$("#stApp"+id+"").val("1");
		} else {
			$("#stApp"+id+"").val("0");
		} 
	});
	
	$(".cboxBranch").click(function() {
		var id = $(this).val();
		
		if( $(this).prop('checked') ) {
			$("#brchbox"+id+"").val("1");
		} else {
			$("#brchbox"+id+"").val("0");
		} 
	});
	
	
	$("#creditDay").val($("#creditDayParam").val());
	$("#creditLimit").val($("#creditLimitParam").val());
				
	var formData = {
		"pincode" : jQuery("#pinCode").val()
	};

	jQuery.ajax({
		type : "GET",
		url : 'cityListByPincode.htm',
		data : formData,
		success : function(result) {
			if (result == 'null') {
				jQuery('#debtor-form select[id="areaName"] option:gt(0)').remove().end();
			} else {
				var content = result.split("<@>");
				var optlist = $("#areaName");
				jQuery('#debtor-form select[id="areaName"] option:gt(0)').remove().end();
				for (var j = 0; j < content.length; j++) {
					var lst = content[j].split("<#>");
					optlist.append(new Option(lst[1],lst[1]));
				}
				$("#areaName").val($("#cityListParam").val());
			}
		},
		error : function() {
			alert("Failed to load City Name");
		}
	});
			
	/*$("#roadNChb").click(function() {
		if($('#roadNChb').prop('checked')) 
		{
	    	$("#rNormal").val('1');
		} else {
	    	$("#rNormal").val('0');
		} 
     });
	
	$("#roadPChb").click(function() {
		if($("#roadPChb").prop('checked'))
		{
	    	$("#rPremium").val('1');
		} else {
	    	$("#rPremium").val('0');
		} 
	});
	
	$("#airNChb").click(function() {
		if ($("#airNChb").prop('checked'))
		{
	    	$("#aNormal").val('1');
		} else {
	    	$("#aNormal").val('0');
		} 
	});
	
	$("#airPChb").click(function() {
		if ($("#airPChb").prop('checked'))
		{
	    	$("#aPremium").val('1');
		} else {
	    	$("#aPremium").val('0');
		} 
	});
	
	$("#trainNChb").click(function() {		
		if ($("#trainNChb").prop('checked'))
		{
	    	$("#tNormal").val('1');
		} else {
	    	$("#tNormal").val('0');
		} 
	});
	
	$("#trainPChb").click(function() {
		if ($("#trainPChb").prop('checked'))
		{
	    	$("#tPremium").val('1');
		} else {
	    	$("#tPremium").val('0');
		} 
	});*/

	
	/*$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('href'));
	});
	
	
	if($("#codeno").val()!='' && $("#codeno").val()!= null)
	{
		var activeTab = localStorage.getItem('activeTab');
		if(activeTab)
		{
	       $('#myTab a[href="' + activeTab + '"]').tab('show');
		}
	}*/
		
	$("#stateNamefreight").change(function() {
	 
	 if(jQuery("#transitModefrieght").val()=='')
		 {alert('Select the Transit Mode.');return;}
	 
	 $('#statefrieghttblbody tr').remove();// reset the State Freight table body	
		
		if ($("#stateNamefreight").val() != "") {
			var formData = {
				"stateName" : jQuery("#stateNamefreight").val(),
				"transitmode" : jQuery("#transitModefrieght").val(),
			};

			jQuery.ajax({
				type : "GET",
				url : 'getStatesFrieght.htm', 
				data : formData,
				success : function(data)
				{
					if (data.length > 0) 
					{
						 data = JSON.parse(data);
						
						 var tab=3; 
						 var rowCount = 0;
						 $.each(data, function(key, value)							 
						 {
							 var tableStr = "";
							 rowCount++;
							
							 tableStr = tableStr + "<tr> <td class='text-center'>"+rowCount+"<input type='hidden' id='stateId"+rowCount+"' value='"+value.STATENAME+"' /></td> ";
							
							 tableStr = tableStr + " <td class='text-left'>"+value.STATENAME+"</td> " ;
							
							
							 tableStr = tableStr + " <td><input type='text' class='form-control input-sm text-right' name='framt"+rowCount+"' id='framt"+rowCount+"' value='"+value.AMOUNT+"'  tabindex='"+tab+"'/></td> " ;
							" </tr>";
							
							tab = Number(tab) + 1 ;
							$("#statefrieghttblbody").append(tableStr);
							frightArray.push(value.AMOUNT);
							 $("[id^=framt]").blur(function(){
									
									console.log( $(this).val());
									
									var index=$(this).attr('id').substr(5);
									console.log('index:: '+ index);
									frightArray[index]=$(this).val();
							});
				        });
					}
				},
				error : function() {
					alert("Failed to load State Freight.");
				}
			});
		}
	});

	// Ajax to get PinCode ODA
	$("#districtNameOda").change(function() {	
			
			$('#pintblbody tr').remove();// reset the pin Oda table body			
				if ($("#districtNameOda").val() != "") {
					var formData = {
						"districtNameOda" : jQuery("#districtNameOda").val(),
						"stateNameOda" : jQuery("#stateNameOda").val(),
					};
	
					jQuery.ajax({
						type : "GET",
						url : 'getPincodeCityNameOda.htm', 
						data : formData,
						success : function(result)
						{
							if (result.length > 2) 
							{
								result = JSON.parse(result);							
								 var tab=3; 
								 var rowCount = 0;
								 $.each(result, function(key, value)							 
								 {
									 var pintableStr = "";
									 rowCount++;					
									 								
									 pintableStr = pintableStr + " <tr><td class='text-left'>"+value.CITYNAME+"</td><td class='text-left'> "+value.PINCODE+"</td>" ;	
									 
									 if(value.ODA==0)
										 pintableStr = pintableStr + "<td><input type='checkbox' class='checkboxcls' id='"+rowCount+"' value='"+rowCount+"' tabindex='"+tab+"'/></td> ";
									 else
										 pintableStr = pintableStr + "<td><input type='checkbox' class='checkboxcls'  checked id='"+rowCount+"' value='"+rowCount+"' tabindex='"+tab+"'/>";
									
									 pintableStr = pintableStr +"<input type='hidden' id='cityname"+rowCount+"' value='"+value.CITYNAME+"'/>";
									 pintableStr = pintableStr +"<input type='hidden' id='cityid"+rowCount+"' value='"+value.CITYID+"'/>";
									 pintableStr = pintableStr +"<input type='hidden' id='pincode"+rowCount+"' value='"+value.PINCODE+"'/>";
									 pintableStr = pintableStr +"<input type='hidden' id='oda"+rowCount+"' value='"+value.ODA+"'/>";
									 
									 pintableStr = pintableStr +"</td></tr>";
									
									tab = Number(tab) + 1 ;
									$("#pintblbody").append(pintableStr);
									
						        });
								 
							}
							
							
						},
						error : function() {
							alert("Failed to load ODA PinCode.");
						}
					});
				}
		});	
	
	
	
	// help of city From
	$("#cityfreightfrom").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			var formdata = {'searchKeyword' : request.term.trim()
			};
				$.ajax({
					type : "POST",
					url : "getDistrictName.htm",
					data : formdata,
					success : function(data) {//alert(data);
						response($.parseJSON(data));
					},
					error : function(data) {
						console.log("City Freight Form autocomplete error " + data.status + ' ' + data.statusText);
					}
				});
			},
			select : function(event, ui) {
				$("#cityfreightfrom").val(ui.item.cityname);
				$("#cityid").val(ui.item.cityname);
				return false;
			},
			change : function(event, ui) {
				if(this.value!='')
				if (!ui.item) {
					alert('Please select valid City.');
					$("#cityfreightfrom").val('');
					$("#cityid").val('');
					this.value = '';
					this.focus();
				}
			}
		}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.cityname + "</a>").appendTo(ul);
	};
	
	
	
	// help of city To
	$("#cityfreightto").autocomplete({
		autoFocus: true,
		source : function(request, response) {
			var formdata = {'searchKeyword' : request.term.trim()
			};
				$.ajax({
					type : "POST",
					url : "getDistrictName.htm",
					data : formdata,
					success : function(data) {//alert(data);
						response($.parseJSON(data));
					},
					error : function(data) {
						console.log("City Freight To autocomplete error " + data.status + ' ' + data.statusText);
					}
				});
			},
			select : function(event, ui) {
				$("#cityfreightto").val(ui.item.cityname);
				$("#cityid").val(ui.item.cityname);
				return false;
			},
			change : function(event, ui) {
				if(this.value!='')
				if (!ui.item) {
					alert('Please select valid City.');
					$("#cityfreightto").val('');
					$("#cityid").val('');
					this.value = '';
					this.focus();
				}
			}
		}).autocomplete("instance")._renderItem = function(ul, item) {
		return $("<li>").append("<a>" + item.cityname + "</a>").appendTo(ul);
	};
	
	
	//add table for the cty wise freight
	
	$("#addCityBtn").click(function() {		 					
		
		if($("#chkcityfreight").val()=='true')
		{ 
			alert('The selected city freight is already added');
			return;
		}
		 var len=Number($('#cityfrieghttblbody tr').length);
		 var cityfreightratetablestr="";
		 var fromCity=$("#cityfreightfrom").val();
		 var toCity=$("#cityfreightto").val();
		 var cityfreightrate=$("#cityfreightrate").val();
		 
		 cityfreightratetablestr = cityfreightratetablestr + " <tr><td class='text-left'>"+fromCity+"<input type='hidden' id='fromcity"+len+"' value='"+fromCity+"'/>" +
		 		"</td><td class='text-left'> "+toCity+"<input type='hidden' id='tocity"+len+"' value='"+toCity+"'/>" +
		 		"</td><td class='text-left'> "+cityfreightrate+"<input type='hidden' id='rate"+len+"' value='"+cityfreightrate+"'/>" +"</td>" ;	
		 cityfreightratetablestr = cityfreightratetablestr +"</tr>";
		
		
		$("#cityfrieghttblbody").append(cityfreightratetablestr);
		
		$("#chkcityfreight").val(true);
	});	
	
	
	$("#newCityBtn").click(function() {	
		 $("#cityfreightfrom").val('');
		 $("#cityfreightto").val('');
		 $("#cityfreightrate").val('');
		 $("#chkcityfreight").val(false);
	});
	
	
  
});