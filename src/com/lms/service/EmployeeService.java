package com.lms.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.lms.model.Employee;
import com.lms.model.EmployeeDetails;


public interface EmployeeService {
	public List<EmployeeDetails> getAll();
	public Employee get(int empId);
	public boolean save(EmployeeDetails leaveType,HttpServletRequest request);
	public boolean update(EmployeeDetails leaveType,HttpServletRequest request);
	public boolean delete(EmployeeDetails leaveType,HttpServletRequest request);

}
