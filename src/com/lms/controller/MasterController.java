package com.lms.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.lms.bean.UserBean;
import com.lms.model.EmployeeDetails;
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
		Date dob=new SimpleDateFormat("dd-mm-yyyy").parse(request.getParameter("dob"));
	 	employee.setDob(dob);
	 	Date joinDate=new SimpleDateFormat("dd-mm-yyyy").parse(request.getParameter("emp.doj"));
	 	employee.getEmp().setDoj(joinDate);
		
		boolean status=employeeService.save(employee,request);
	 	userBean = (UserBean)request.getSession().getAttribute("user");
	 	
	 	System.out.println(request.getParameter("dob"));
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
	    	modelAndView = new ModelAndView("myrecruitment","empBean",new EmployeeDetails());
	    	modelAndView.addObject("roleList", masterService.getRoles());
	    	modelAndView.addObject("managerList", masterService.getManagers());
	    	modelAndView.addObject("emplist", employeeService.getAll());
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
	@RequestMapping("/updateEmployee")
	public ModelAndView updateEmployee(HttpServletRequest request,@ModelAttribute("empBean")EmployeeDetails employee,@RequestParam("empId") String empId)throws Exception{
	 
		System.out.println("Controller :MasterController Method :updateEmployee");
	   ModelAndView modelAndView = null;
	   userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	employee=employeeService.getEmployee(empId);
	    	modelAndView = new ModelAndView("updateemployee","empBean",employee);   	
	       	modelAndView.addObject("roleList", masterService.getRoles());
	    	modelAndView.addObject("managerList", masterService.getManagers());
	    }
	    else  modelAndView = new ModelAndView("redirect:login", "status",-1);
	   
	   return modelAndView;
	}
}
