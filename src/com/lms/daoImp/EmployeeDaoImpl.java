package com.lms.daoImp;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.lms.dao.EmployeeDao;
import com.lms.model.Employee;
@Repository
@SuppressWarnings("unchecked")
public class EmployeeDaoImpl implements EmployeeDao{
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	@Transactional
	public boolean save(Employee employee) {
		boolean status=false;
		sessionFactory.getCurrentSession().saveOrUpdate(employee);
		if(employee.getId()>0)
			status=true;
		else status=false;
		return status;
	}

	
	@Override
	public List<Employee> listEmployees() {
       return sessionFactory.getCurrentSession().createCriteria(Employee.class).list();
	}

	@Override
	public Employee getEmployee(int empid) {
		
		return (Employee) sessionFactory.getCurrentSession().get(Employee.class, empid);
	}

	@Override
	public void deleteEmployee(Employee employee) {
	     sessionFactory.getCurrentSession().delete(Employee.class);
	}


}
