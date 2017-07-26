package com.lms.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.lms.bean.UserBean;
import com.lms.model.Employee;
import com.lms.model.EmployeeDetails;
import com.lms.model.LeaveType;
import com.lms.service.EmployeeService;
import com.lms.service.MasterService;



@Controller
public class MasterController {
	
	@Autowired
	private EmployeeService employeeService;	
	@Autowired
	private MasterService masterService;	
	private UserBean userBean;
	
	@RequestMapping("/showEmployee")
	public ModelAndView addEmployee(HttpServletRequest request)throws Exception{
	 
		System.out.println("Controller :MasterController Method :addEmployee");
	   ModelAndView modelAndView = null;
	   userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelAndView = new ModelAndView("addemp","empBean",new EmployeeDetails());   	
	       	modelAndView.addObject("roleList", masterService.getRoles());
	    	modelAndView.addObject("managerList", masterService.getManagers());
	    }
	    else  modelAndView = new ModelAndView("redirect:login", "status",-1);
	   
	   return modelAndView;
	}
	
	@RequestMapping(value = "/saveEmployee", method = RequestMethod.POST)
	public ModelAndView saveEmployee(HttpServletRequest request,@ModelAttribute("empBean")EmployeeDetails employee, BindingResult result)throws Exception
	{
	  
		boolean status=employeeService.save(employee,request);
	 	userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	return new ModelAndView("redirect:myrecruitment", "status",status);
	    }
	    return new ModelAndView("redirect:login", "status",-1);
		
	}
	@RequestMapping("/myrecruitment")
	public ModelAndView myrecruitment(HttpServletRequest request) throws Exception{
		ModelAndView modelAndView = null;
		userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelAndView = new ModelAndView("myrecruitment","leavetypebean",new EmployeeDetails());
	    }
	    else  modelAndView = new ModelAndView("redirect:login", "status",-1);
	    
		return modelAndView;
		}
	@RequestMapping("/showEmployeeList")
	public ModelAndView showEmployeeList(HttpServletRequest request)throws Exception{
	 
		System.out.println("Controller :MasterController Method :showEmployeeList");
	   ModelAndView modelAndView = null;
	   userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelAndView = new ModelAndView("allemp","empBean",new EmployeeDetails());	
	    	modelAndView.addObject("emplist", employeeService.getAll());
	    }
	    else  modelAndView = new ModelAndView("redirect:login", "status",-1);
	   
	   return modelAndView;
	}
}
