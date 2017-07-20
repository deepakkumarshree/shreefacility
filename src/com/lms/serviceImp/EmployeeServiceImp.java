package com.lms.serviceImp;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lms.dao.EmployeeDao;
import com.lms.dao.LeaveTypeDao;
import com.lms.model.Employee;
import com.lms.model.EmployeeDetails;
import com.lms.service.EmployeeService;
@Service
public class EmployeeServiceImp implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;
	@Transactional
	@Override
	public List<Employee> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Employee get(int empId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean save(EmployeeDetails employee, HttpServletRequest request) {
		return employeeDao.save(employee);
		
	}

	@Override
	public boolean update(EmployeeDetails employee, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(EmployeeDetails employee, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}

}
