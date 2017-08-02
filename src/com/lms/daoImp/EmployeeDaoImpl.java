package com.lms.daoImp;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
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
		//sessionFactory.getCurrentSession().saveOrUpdate(employee.getEmp());
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
	public EmployeeDetails getEmployee(String empId) {
		
	/*Criteria empdetailCriteria = sessionFactory.getCurrentSession().createCriteria(EmployeeDetails.class);
	Criteria empCriteria =  empdetailCriteria .createCriteria("emp");
	empCriteria.add(Restrictions.eq("empid",Integer.parseInt(empId)));*/
		
	/*	Criteria empdetailCriteria = sessionFactory.getCurrentSession().createCriteria(EmployeeDetails.class).
				createCriteria("emp").add(Restrictions.eq("empid",Integer.parseInt(empId)));*/
		

		Criteria empdetailCriteria = sessionFactory.getCurrentSession().createCriteria(EmployeeDetails.class).
				add(Restrictions.eq("emp.empid",Integer.parseInt(empId)));

		
		EmployeeDetails result1=(EmployeeDetails)empdetailCriteria.uniqueResult();
		
		return result1;
	}

	@Override
	public void deleteEmployee(EmployeeDetails employee) {
	     sessionFactory.getCurrentSession().delete(Employee.class);
	}


}
