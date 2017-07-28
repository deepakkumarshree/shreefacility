package com.lms.dao;

import java.util.ArrayList;
import java.util.List;

import com.lms.bean.UserBean;
import com.lms.model.LeaveRequest;
import java.util.Map;


public interface LeaveRequestDao {
	public List<LeaveRequest> getAll();
	public boolean save(LeaveRequest leaveType);
	public ArrayList<String> getHolyday();
	public Map<String,String> getLeaveBalance(UserBean userBean) ;
}
