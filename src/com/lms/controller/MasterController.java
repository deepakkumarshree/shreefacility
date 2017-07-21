package com.lms.controller;

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
import com.lms.service.LeaveTypeService;


@Controller
public class MasterController {
	
	@Autowired
	private EmployeeService employeeService;	
	private UserBean userBean;
	
	@RequestMapping("/showEmployee")
	public ModelAndView addEmployee()throws Exception{
	 
		System.out.println("Controller :MasterController Method :addEmployee");
	   ModelAndView modelAndView = null;
	   modelAndView = new ModelAndView("addemp","empBean",new EmployeeDetails());		
	   
	   return modelAndView;
	}
	
	@RequestMapping(value = "/saveEmployee", method = RequestMethod.POST)
	public ModelAndView saveEmployee(HttpServletRequest request,@ModelAttribute("empBean")EmployeeDetails employee, BindingResult result)throws Exception
	{
	  
		boolean status=employeeService.save(employee,request);
		return new ModelAndView("redirect:showEmployee", "status",status);
		
	}
	@RequestMapping("/myrecruitment")
	public ModelAndView myrecruitment() throws Exception{
		ModelAndView modelAndView = null;
		modelAndView = new ModelAndView("myrecruitment","leavetypebean",new LeaveType());		
		return modelAndView;
		}
}
