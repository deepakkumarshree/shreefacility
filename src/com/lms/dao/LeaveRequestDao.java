package com.lms.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.lms.bean.UserBean;
import com.lms.model.LeaveRequest;

public interface LeaveRequestDao {
	public List<LeaveRequest> getAll();
	public ArrayList<String> getHolyday();
	public Map<String,String> getLeaveBalance(UserBean userBean);
	public int leaveStatus(String leaveIds,String status);
	public boolean save(LeaveRequest leaveType);
}
