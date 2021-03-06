package com.lms.serviceImp;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lms.dao.LoginDao;
import com.lms.model.Employee;
import com.lms.service.LoginService;

@Service("loginService")
public class LoginServiceImp implements LoginService{
	@Autowired
	  private LoginDao loginDao;
	  
	  @Transactional
	  public boolean isValidUser(Employee userBean, HttpServletRequest request)
	  {
		  	
		    return loginDao.isValidUser(userBean, request);
	  }
	  @Transactional
	  public boolean changePassword(String oldPass, String newPass,String empCode)
	  {
		  	
		    return loginDao.changePassword(oldPass, newPass,empCode);
	  }

}
