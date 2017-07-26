package com.lms.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

//import com.lms.model.LeaveRequest;
import com.lms.model.LeaveType;
//import com.lms.service.LeaveRequestService;

@Controller
public class LeaveController {
	
	
	/*@Autowired
	private LeaveRequestService leaveTypeService;
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {

		   SimpleDateFormat dateFormat = new SimpleDateFormat("dd-mm-yyyy");
		   dateFormat.setLenient(false);
		   binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
		}
		
	@RequestMapping("/addLeave")
	public ModelAndView showLeaveType() throws Exception{
		ModelAndView modelAndView = null;
		modelAndView = new ModelAndView("leavetype","leavetypebean",new LeaveRequest());
		modelAndView.addObject("leaveTypeInfo", LeaveType.values());		
		ArrayList<String> hList=leaveTypeService.getHolyday();
		modelAndView.addObject("hlist",hList);	
		return modelAndView;
		}
	
	@RequestMapping(value="/saveLeaveType",method = RequestMethod.POST)
	public ModelAndView saveLeaveType(HttpServletRequest request,@ModelAttribute("leavetypebean") LeaveRequest leaveType)throws Exception{
		System.out.println("Controller : MasterController Method :saveLeaveType");	
		System.out.println(request.getParameter("status"));
		boolean status = leaveTypeService.save(leaveType, request);
		return new ModelAndView("redirect:mytime", "status",status);
		
	}*/
	@RequestMapping("/mytime")
	public ModelAndView myTime() throws Exception{
		ModelAndView modelAndView = null;
		//modelAndView = new ModelAndView("mytime","leavetypebean",new LeaveRequest());		
		return modelAndView;
		}
/*	
	@RequestMapping(value="/viewLeave")
	public ModelAndView viewLeaveRequest(HttpServletRequest request, @ModelAttribute("viewLeaveBean") LeaveRequest leaveRequest){
		
		
		return null;
		
	}*/

}
