package com.lms.daoImp;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lms.bean.UserBean;
import com.lms.dao.LeaveRequestDao;
import com.lms.model.LeaveBalance;
import com.lms.model.LeaveRequest;
import com.lms.model.LeaveStatus;

@Repository
public class LeaveRequestDaoImpl implements LeaveRequestDao {
	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<LeaveRequest> getAll() {
		try {
			return sessionFactory.getCurrentSession().createCriteria(LeaveRequest.class).list();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Transactional
	public boolean save(LeaveRequest leaveType) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(leaveType);
			status = true;

		} catch (Exception e) {
			e.printStackTrace();

		}
		return status;
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional
	public ArrayList<String> getHolyday() {

		ArrayList<String> holydayList = new ArrayList<String>();

		try {

			String sql = "SELECT DATE_FORMAT(date,'%d-%m-%Y') FROM HOLYDAY";

			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(sql);

			holydayList = (ArrayList<String>) (query.list());

		} catch (Exception e) {
			e.printStackTrace();

		}
		return holydayList;
	}

	public Map<String, String> getLeaveBalance(UserBean userBean) {
/*		int causalLeave = 0;
		int paidLeave = 0;
		int optionalLeave = 2;
		Map<String, String> leaveBalMap = new HashMap<String, String>();
		Calendar cal = Calendar.getInstance();
		int currentYear = cal.get(Calendar.YEAR);
		
		cal.setTime(userBean.getDoj());
		int empDOJYear = cal.get(Calendar.YEAR);
		if (empDOJYear == currentYear) {

		} else {
			Calendar oldEmpCal = Calendar.getInstance();
			int oldEmpMonth = oldEmpCal.get(Calendar.MONTH);
			if (oldEmpMonth >= 4 && oldEmpMonth <= 6) {
				causalLeave = 3;
				paidLeave = 6;
			} else if (oldEmpMonth >= 7 && oldEmpMonth <= 9) {
				causalLeave = 6;
				paidLeave = 6;
			} else if (oldEmpMonth >= 10 && oldEmpMonth <= 12) {
				causalLeave = 9;
				paidLeave = 12;
			} else if (oldEmpMonth >= 1 && oldEmpMonth <= 3) {
				causalLeave = 12;
				paidLeave = 12;
			}
		}

		Criteria leaveBalance = sessionFactory.getCurrentSession().createCriteria(LeaveBalance.class)
				.add(Restrictions.eq("emp.empid", userBean.getId()));
		LeaveBalance balance = (LeaveBalance) leaveBalance.uniqueResult();
		int empPaidLeave = paidLeave - (balance==null?0:balance.getPlTaken());
		int empCausalLeave = causalLeave - (balance==null?0:balance.getSlTaken());
		int empOptionalLeave = optionalLeave - (balance==null?0:balance.getOptional());

		leaveBalMap.put("Casual Leave", Integer.valueOf(empCausalLeave).toString());
		leaveBalMap.put("Paid Leave", Integer.valueOf(empPaidLeave).toString());
		leaveBalMap.put("Optional Leave ", Integer.valueOf(empOptionalLeave).toString());*/
		Map<String, String> leaveBalMap = new HashMap<String, String>();
		leaveBalMap.put("Casual Leave", "0");
		leaveBalMap.put("Paid Leave","0");
		leaveBalMap.put("Optional Leave ", "0");

		return leaveBalMap;
	}

	@Override
	public int leaveStatus(String leaveIds, String status) {
		String[] leaveId = leaveIds.split("@");
		int result = 0;
		for (String leaveid : leaveId) {
			if (leaveid.length() > 0) {
				String hql = "UPDATE LeaveRequest set status = :approve " + "WHERE leaverequestid = :leaveId";
				Query query = sessionFactory.getCurrentSession().createQuery(hql);
				if ("A".equals(status))
					query.setParameter("approve", LeaveStatus.APPROVED);
				else
					query.setParameter("approve", LeaveStatus.REJECTED);

				query.setParameter("leaveId", leaveid);
				result = query.executeUpdate();

			}
		}
		return result;
	}
}
