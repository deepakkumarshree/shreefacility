package com.lms.daoImp;

import java.io.PrintStream;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.classic.Session;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Junction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.lms.model.Employee;
import com.lms.model.EmployeeDetails;

@Repository
public class LoginDaoImp {
	@Autowired
	  private SessionFactory sessionFactory;
	  
	  public boolean isValidUser(Employee userBean, HttpServletRequest request)
	  {
	    int userId = 0;
	    try
	    {
	      Criteria userCriteria = this.sessionFactory
	        .getCurrentSession()
	        .createCriteria(Employee.class)
	        .add(Restrictions.disjunction()
	        .add(Restrictions.eq("loginname", 
	        userBean.getLoginName()))
	        .add(Restrictions.eq("password", 
	        userBean.getPassword()))
	        .add(Restrictions.eq("active", Boolean.valueOf(true))));
	      
	      Employee u = (Employee)userCriteria.uniqueResult();
	      
	      Criteria userDetailsCriteria = this.sessionFactory
	        .getCurrentSession()
	        .createCriteria(EmployeeDetails.class)
	        .add(Restrictions.disjunction().add(
	        Restrictions.eq("userid", Integer.valueOf(u.getId()))));
	      EmployeeDetails ud = (EmployeeDetails)userDetailsCriteria.uniqueResult();
	      
	      String name = ud.getFirstname() + " " + ud.getLastname();
	      String filepath = request.getSession().getServletContext()
	        .getRealPath("/");
	      
	      userId = u.getId();
	      
	      HttpSession session = request.getSession();
	      session.setAttribute("userid", Integer.valueOf(userId));
	      session.setAttribute("username", name);
	      
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

}
