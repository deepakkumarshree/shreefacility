package com.lms.dao;

import java.util.List;

import com.lms.model.Employee;
public interface EmployeeDao {
	public boolean save(Employee employee);	
	public List<Employee> listEmployees();	
	public Employee getEmployee(int empid);	
	public void deleteEmployee(Employee employee);
}
