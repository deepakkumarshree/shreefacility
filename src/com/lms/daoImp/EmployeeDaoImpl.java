package com.lms.daoImp;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.lms.dao.EmployeeDao;
import com.lms.model.Employee;
import com.lms.model.EmployeeDetails;
@Repository
@SuppressWarnings("unchecked")
public class EmployeeDaoImpl implements EmployeeDao{
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	@Transactional
	public boolean save(EmployeeDetails employee) {
		boolean status=false;
		sessionFactory.getCurrentSession().saveOrUpdate(employee.getEmp());
		sessionFactory.getCurrentSession().saveOrUpdate(employee);
		if(employee.getEmp().getEmpid()>0)
			status=true;
		else status=false;
		return status;
	}

	
	@Override
	public List<EmployeeDetails> getAll() {
       return sessionFactory.getCurrentSession().createCriteria(EmployeeDetails.class).list();
	}

	@Override
	public EmployeeDetails getEmployee(int empid) {
		
		return (EmployeeDetails) sessionFactory.getCurrentSession().get(EmployeeDetails.class, empid);
	}

	@Override
	public void deleteEmployee(EmployeeDetails employee) {
	     sessionFactory.getCurrentSession().delete(Employee.class);
	}


}
