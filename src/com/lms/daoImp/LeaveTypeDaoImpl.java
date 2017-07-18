package com.lms.daoImp;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lms.dao.LeaveTypeDao;
import com.lms.model.LeaveType;
@Repository
public class LeaveTypeDaoImpl implements LeaveTypeDao{
	@Autowired
	  private SessionFactory sessionFactory;
	@SuppressWarnings("unchecked")
	@Override
	public List<LeaveType> getAll() {
		try{
			return sessionFactory.getCurrentSession().createCriteria(LeaveType.class).list();
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	@Transactional
	public boolean save(LeaveType leaveType) {
		boolean status=false;
		try{
		
			sessionFactory.getCurrentSession().saveOrUpdate(leaveType);
			System.out.println("Inserted Leave Id ::"+leaveType.getLeaveId());
			if(leaveType.getLeaveId()>0)
				status= true; 
			    
		}catch(Exception e){
			e.printStackTrace();
			
		}
		return status;
	}
	@Override
	@Transactional
	public ArrayList<String> getHolyday() {
		ArrayList<String> holydayList=new ArrayList<String>();
		try{
		
			String sql = "SELECT DATE_FORMAT(date,'%Y-%m-%d') FROM HOLYDAY";
			
			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(sql);
			//query.addEntity(String.class);
			holydayList = (ArrayList<String>)(query.list());
			    
		}catch(Exception e){
			e.printStackTrace();
			
		}
		return holydayList;
	}

	

}
