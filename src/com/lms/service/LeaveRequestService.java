package com.lms.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.lms.model.LeaveRequest;

public interface LeaveRequestService {
	public List<LeaveRequest> getAll();
	public LeaveRequest get(int leaveTypeId);
	public boolean save(LeaveRequest leaveType,HttpServletRequest request);
	public boolean update(LeaveRequest leaveType,HttpServletRequest request);
	public boolean delete(LeaveRequest leaveType,HttpServletRequest request);
	public ArrayList<String> getHolyday();

}
