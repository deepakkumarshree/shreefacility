package com.lms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;

import com.lms.bean.UserBean;
import com.lms.model.Employee;
import com.lms.service.LoginService;



@Controller
public class LoginController {
	@Autowired
	private LoginService loginService;
	private UserBean userBean;
	
	 @RequestMapping("login")
	  public ModelAndView login() throws Exception
	  {
	    ModelAndView modelandview = null;
	    modelandview = new ModelAndView("login", "logincommand", new Employee());
	    System.out.println("Controller :LoginController Method :login");
	    return modelandview;
	  }
	 @RequestMapping(value="/validateUser" ,method = RequestMethod.POST)
	  public ModelAndView validateUser(HttpServletRequest request, @ModelAttribute("logincommand") Employee emp)
	    throws Exception
	  {
	    ModelAndView modelandview = null;
	    modelandview = new ModelAndView("home");
	    System.out.println("Controller :LoginController Method :showLogin");
	    boolean status = loginService.isValidUser(emp, request);
	    if(!status) modelandview = new ModelAndView("redirect:login", "status",status);
	    userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
		    request.getSession().setAttribute("username",userBean.getFirstName()+" "+(userBean.getLastName()!=null?userBean.getLastName():""));
	    return modelandview;
	  }
	 @RequestMapping("/dashboard")
	  public ModelAndView dashboard(HttpServletRequest request)
	    throws Exception
	  {
	    ModelAndView modelandview = null;
	    userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelandview = new ModelAndView("home");
	    	System.out.println("Controller :LoginController Method :home"); 
	    }
	    else modelandview = new ModelAndView("redirect:login", "status",false);
	    return modelandview;
	  }
	 @RequestMapping("/changepassword")
	  public ModelAndView changepassword(HttpServletRequest request)throws Exception
	  {
	    ModelAndView modelandview = null;
	    userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelandview = new ModelAndView("changepassword");
	    	System.out.println("Controller :LoginController Method :changepassword"); 
	    }
	    else modelandview = new ModelAndView("redirect:login", "status",false);
	    
	    return modelandview;
	  }
	 @RequestMapping("/updatepassword")
	  public ModelAndView updatepassword(HttpServletRequest request,@RequestParam("password") String oldPass , @RequestParam("newPassword") String newPass)throws Exception
	  {
	    ModelAndView modelandview = null;
	    boolean status =false;
	    userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelandview = new ModelAndView("changepassword");
	    	System.out.println("Controller :LoginController Method :changepassword");
	    	 status = loginService.changePassword(oldPass, newPass, userBean.getEmpCode());
	    }
	    else modelandview = new ModelAndView("redirect:login", "status",false); 
	    modelandview = new ModelAndView("redirect:login", "status",status);
	    return modelandview;
	  }
	 @RequestMapping("/logout")
	  public ModelAndView logout(HttpServletRequest request)throws Exception
	  {
	    ModelAndView modelandview = null;
	    request.getSession().removeAttribute("user");
	    modelandview = new ModelAndView("redirect:login", "status",0);
	    return modelandview;
	  }
	 


}
