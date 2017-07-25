<header class="main-header">
	 <header class="header black-bg">
              <div class="sidebar-toggle-box">
                
              </div>
            <!--logo start-->
            <a href="http://www.shreepartners.com" class="logo" target="_blank"><img alt="" src="resources/images/sipl_logo.png"></a>
            <!--logo end-->

            <div class="top-menu">
            <ul class="menu">
            <li class="dropdown user user-menu">
				
				</li>
            </ul>
            	<div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="logout">Logout</a></li>
            	</ul>
            </div>
            </div>
        </header>

</header>

<!-- <body onpageshow="if(event.persisted)" onUnload=""></body> -->

<script type="text/javascript">
	$(document).ready(function() 
	{
		var delay = 300000;
		setInterval(function() {
			$("#ringbell").effect("shake");
			checkNewTasks();
		}, delay);
	});
	 
	function checkNewTasks()
	{
		jQuery.ajax({
			type : "GET",
			url : 'checkNewTasks.htm',
			success : function(data) {
				$("#maillist").html(data);
			}
		});
	}
</script>


