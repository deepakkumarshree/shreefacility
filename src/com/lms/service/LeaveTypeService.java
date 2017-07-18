package com.lms.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.lms.model.LeaveType;

public interface LeaveTypeService {
	public List<LeaveType> getAll();
	public LeaveType get(int leaveTypeId);
	public boolean save(LeaveType leaveType,HttpServletRequest request);
	public boolean update(LeaveType leaveType,HttpServletRequest request);
	public boolean delete(LeaveType leaveType,HttpServletRequest request);
	public ArrayList<String> getHolyday();

}
