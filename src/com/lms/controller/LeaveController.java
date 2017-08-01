package com.lms.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

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

import com.lms.bean.UserBean;
import com.lms.model.LeaveRequest;
import com.lms.service.LeaveRequestService;
import com.lms.service.MasterService;

@Controller
public class LeaveController {
	
	
	@Autowired
	private LeaveRequestService leaveTypeService;
	@Autowired
	private MasterService masterService;	
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {

		   SimpleDateFormat dateFormat = new SimpleDateFormat("dd-mm-yyyy");
		   dateFormat.setLenient(false);
		   binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
		}
		
	@RequestMapping("/addLeave")
	public ModelAndView showLeaveType(HttpServletRequest request) throws Exception{
		ModelAndView modelAndView = null;
		UserBean userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
			modelAndView = new ModelAndView("leavetype","leavetypebean",new LeaveRequest());
			modelAndView.addObject("leaveTypeInfo", masterService.getLeaveType());		
			ArrayList<String> hList=leaveTypeService.getHolyday();
			modelAndView.addObject("hlist",hList);	
	    }
	    else modelAndView = new ModelAndView("redirect:login", "status",-1);	 
	    
		return modelAndView;
		}
	
	@RequestMapping(value="/saveLeaveType",method = RequestMethod.POST)
	public ModelAndView saveLeaveType(HttpServletRequest request,@ModelAttribute("leavetypebean") LeaveRequest leaveType)throws Exception{
		System.out.println("Controller : MasterController Method :saveLeaveType");	
		System.out.println(request.getParameter("status"));
		ModelAndView modelAndView = null;
		UserBean userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	boolean status = leaveTypeService.save(leaveType, request);
	    	modelAndView= new ModelAndView("redirect:mytime", "status",status);
	    }
	    else modelAndView = new ModelAndView("redirect:login", "status",-1);	 
	    
	    return modelAndView;
	}
	@RequestMapping("/mytime")
	public ModelAndView myTime(HttpServletRequest request) throws Exception{
		ModelAndView modelAndView = null;
		
		UserBean userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelAndView = new ModelAndView("mytime","leavetypebean",new LeaveRequest());	
	    	modelAndView.addObject("leaveTypeInfo", masterService.getLeaveType());
	    	modelAndView.addObject("leaveBalInfo", leaveTypeService.getLeaveBalance(userBean));
	    	modelAndView.addObject("leaveReqList", leaveTypeService.getAll());
	    	ArrayList<String> hList=leaveTypeService.getHolyday();
			modelAndView.addObject("hlist",hList);	
	    
	    }
		else modelAndView = new ModelAndView("redirect:login", "status",-1);	    
		return modelAndView;
		}
	
	@RequestMapping("/showAddLeave")
	public ModelAndView showAddLeave(HttpServletRequest request) throws Exception{
		ModelAndView modelAndView = null;
		
		UserBean userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelAndView = new ModelAndView("addleave","leavetypebean",new LeaveRequest());	
	    	modelAndView.addObject("leaveTypeInfo", masterService.getLeaveType());
	    	modelAndView.addObject("leaveBalInfo", leaveTypeService.getLeaveBalance(userBean));
	    	modelAndView.addObject("leaveReqList", leaveTypeService.getAll());
	    	ArrayList<String> hList=leaveTypeService.getHolyday();
			modelAndView.addObject("hlist",hList);	
	    
	    }
		else modelAndView = new ModelAndView("redirect:login", "status",-1);	    
		return modelAndView;
		}
	@RequestMapping("/showApproveLeave")
	public ModelAndView showApproveLeave(HttpServletRequest request) throws Exception{
		ModelAndView modelAndView = null;
		
		UserBean userBean = (UserBean)request.getSession().getAttribute("user");
	    if(userBean!=null)
	    {
	    	modelAndView = new ModelAndView("approveleave","leavetypebean",new LeaveRequest());	
	    	modelAndView.addObject("leaveTypeInfo", masterService.getLeaveType());
	    	modelAndView.addObject("leaveBalInfo", leaveTypeService.getLeaveBalance(userBean));
	    	modelAndView.addObject("leaveReqList", leaveTypeService.getAll());
	    	ArrayList<String> hList=leaveTypeService.getHolyday();
			modelAndView.addObject("hlist",hList);	
	    
	    }
		else modelAndView = new ModelAndView("redirect:login", "status",-1);	    
		return modelAndView;
		}

}
