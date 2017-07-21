package com.lms.daoImp;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;

import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.lms.dao.LoginDao;
import com.lms.model.Employee;


@Repository
public class LoginDaoImp implements LoginDao{
	@Autowired
	  private SessionFactory sessionFactory;
	  
	  public boolean isValidUser(Employee userBean, HttpServletRequest request)
	  {
	    int userId = 0;
	    try
	    {
	      Criteria userCriteria = this.sessionFactory.getCurrentSession()
	        .createCriteria(Employee.class)
	        .add(Restrictions.eq("empcode",userBean.getEmpcode()))
	        .add(Restrictions.eq("password",userBean.getPassword()));
	        //.add(Restrictions.eq("active", Boolean.valueOf(true))));
	      
	      Employee u = (Employee)userCriteria.uniqueResult();
	      String name = ""; 
	      if(u!=null){
		      userId = u.getEmpid();
		      HttpSession session = request.getSession();
		      session.setAttribute("userid", Integer.valueOf(userId));
		      name = u.getFirstname() + " " + u.getLastname(); 
		      session.setAttribute("username", name);
	      }
	      System.out.println(userId);
	      if (userId > 0) {
	        return true;
	      }
	    }
	    catch (Exception e)
	    {
	      e.printStackTrace();
	    }
	    return false;
	  }
	  public boolean changePassword(String oldPass,String newPass,String empCode)
	  {
	        Query qry = sessionFactory.getCurrentSession().createQuery("update Employee e set password=:passnew where e.password=:passold and e.empcode=:empcode");
			
	        qry.setParameter("passnew",newPass);
	        qry.setParameter("passold",oldPass);
	        qry.setParameter("empcode",empCode);
	        int res = qry.executeUpdate();
	        
	        if(res>0)return true;
	        else return false;
	  }
}
