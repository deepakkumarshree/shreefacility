package com.lms.dao;

import java.util.ArrayList;
import java.util.List;

import com.lms.model.LeaveRequest;


public interface LeaveRequestDao {
	public List<LeaveRequest> getAll();
	public boolean save(LeaveRequest leaveType);
	public ArrayList<String> getHolyday();

}
