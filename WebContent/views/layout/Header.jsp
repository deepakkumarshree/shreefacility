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
            	<ul class="nav pull-right top-menu">
                    <!-- <li><a class="logout" href="login.html">Logout</a></li> -->
                    	<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-user" aria-hidden="true"></i>
						<span class="hidden-xs">Profile</span>
						</a>
					<ul class="dropdown-menu">
						<li class="user-header">
							<i class="fa fa-user" aria-hidden="true"></i>
							<p>
								Deepak Kumar - Sr Software 
								<small>9431660197</small>
								<small><a href="#" style="color: white;">Profile</a></small>
							</p>
						</li>
						
						<li class="user-footer">
							<div class="pull-left">
								<a href="changePassword.htm" class="btn btn-default btn-flat">Change Password</a>
							</div>
							<div class="pull-right">
								<a href="logout.htm" class="btn btn-default btn-flat">Sign out</a>
							</div>
						</li>
					</ul>
            	</ul>
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


