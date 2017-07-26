package com.lms.daoImp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lms.dao.MasterDao;
import com.lms.model.Employee;
import com.lms.model.Role;
@SuppressWarnings("unchecked")
@Repository
public class MasterDaoImp implements MasterDao{
	@Autowired
	private SessionFactory sessionFactory;

	
	@Override
	@Transactional
	public Map getRoles() {
		 List roleList=sessionFactory.getCurrentSession().createCriteria(Role.class).list();
		// List filnalRole=new ArrayList<Map>();
		 Map roleMap=new HashMap<String,String>();
		 for(Object obj:roleList)
		 {
			 Role role=(Role)obj;
			
			 roleMap.put(role.getRoleId(), role.getRoleName());
			// filnalRole.add(roleMap);
		 }
		 return roleMap;
		 
		 
		
	}
	@Override
	@Transactional
	public Map getManagers() {
		 List managerList= sessionFactory.getCurrentSession().createCriteria(Employee.class)
				 .add(Restrictions.eq("role.roleId",2)).list();
		 Map managerMap=new HashMap<String,String>();
		 for(Object obj:managerList)
		 {
			 Employee emp=(Employee)obj;
			
			 managerMap.put(emp.getEmpcode(), emp.getFirstname()+" "+(emp.getLastname()!=null?emp.getLastname():""));
			// filnalRole.add(roleMap);
		 }
		 return managerMap;
		
	}
}
