package com.lms.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.lms.model.LeaveType;
import com.lms.service.LeaveTypeService;

@Controller
public class LeaveController {
	
	@Autowired
	private LeaveTypeService leaveTypeService;
		
	@RequestMapping("/addLeave")
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

}
