package com.lms.dao;

import java.util.List;

import com.lms.model.Employee;
import com.lms.model.EmployeeDetails;
public interface EmployeeDao {
	public boolean save(EmployeeDetails employee);	
	public List<EmployeeDetails> getAll();	
	public EmployeeDetails getEmployee(int empid);	
	public void deleteEmployee(EmployeeDetails employee);
}
