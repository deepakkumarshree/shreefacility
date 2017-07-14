package com.lms.dao;

import java.util.List;

import com.lms.model.LeaveType;

public interface LeaveTypeDao {
	public List<LeaveType> getAll();
	public boolean save(LeaveType leaveType);

}
