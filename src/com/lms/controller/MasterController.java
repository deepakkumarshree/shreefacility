package com.lms.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.lms.model.Employee;
import com.lms.model.LeaveType;
import com.lms.service.EmployeeService;
import com.lms.service.LeaveTypeService;


@Controller
public class MasterController {
	@Autowired
	private LeaveTypeService leaveTypeService;
	@Autowired
	private EmployeeService employeeService;
	

	
	@RequestMapping("/showLeaveType")
	public ModelAndView showLeaveType() throws Exception{
		ModelAndView modelAndView = null;
		modelAndView = new ModelAndView("leavetype","leavetypebean",new LeaveType());
		
		System.out.println("Controller :MasterController Method :showLeaveType");
		return modelAndView;
		}
	@RequestMapping(value="/saveLeaveType",method = RequestMethod.POST)
	public ModelAndView saveLeaveType(HttpServletRequest request,@ModelAttribute("leavetypebean") LeaveType leaveType)throws Exception{
		System.out.println("Controller : MasterController Method :saveLeaveType");	
		boolean status = leaveTypeService.save(leaveType, request);
		return new ModelAndView("redirect:showLeaveType", "status",status);
		
	}
	@RequestMapping("/showEmployee")
	public ModelAndView addEmployee()throws Exception{
	 
		System.out.println("Controller :MasterController Method :addEmployee");
	   ModelAndView modelAndView = null;
	   modelAndView = new ModelAndView("addemp","empBean",new Employee());		
	   
	   return modelAndView;
	}
	
	@RequestMapping(value = "/saveEmployee", method = RequestMethod.POST)
	public ModelAndView saveEmployee(HttpServletRequest request,@ModelAttribute("empBean")Employee employee, BindingResult result)
	{
	  
		boolean status=employeeService.save(employee,request);
		return new ModelAndView("redirect:showEmployee", "status",status);
		
	}
}
