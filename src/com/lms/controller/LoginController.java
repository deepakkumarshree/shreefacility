package com.lms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import com.lms.model.Employee;
import com.lms.service.LoginService;



@Controller
public class LoginController {
	@Autowired
	private LoginService loginService;

	
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
	    
	    return modelandview;
	  }
	 @RequestMapping("/dashboard")
	  public ModelAndView dashboard()
	    throws Exception
	  {
	    ModelAndView modelandview = null;
	    modelandview = new ModelAndView("home");
	    System.out.println("Controller :LoginController Method :home");
	 
	    
	    return modelandview;
	  }


}
