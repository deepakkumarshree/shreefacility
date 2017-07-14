package com.lms.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.lms.model.Employee;


public interface EmployeeService {
	public List<Employee> getAll();
	public Employee get(int empId);
	public boolean save(Employee leaveType,HttpServletRequest request);
	public boolean update(Employee leaveType,HttpServletRequest request);
	public boolean delete(Employee leaveType,HttpServletRequest request);

}
