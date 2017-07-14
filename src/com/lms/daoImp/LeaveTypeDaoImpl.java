package com.lms.daoImp;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.lms.dao.LeaveTypeDao;
import com.lms.model.LeaveType;
@Repository
public class LeaveTypeDaoImpl implements LeaveTypeDao{
	@Autowired
	  private SessionFactory sessionFactory;
	@Override
	public List<LeaveType> getAll() {
		try{
			return sessionFactory
			        .getCurrentSession()
			        .createCriteria(LeaveType.class)
			        .list();
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	public boolean save(LeaveType leaveType) {
		try{
			sessionFactory.getCurrentSession().save(leaveType);
			return true; 
			    
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}
		//return false;
	}

	

}
