package com.lms.serviceImp;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lms.bean.UserBean;
import com.lms.dao.LeaveRequestDao;
import com.lms.model.LeaveRequest;
import com.lms.service.LeaveRequestService;

@Service
public class LeaveRequestServiceImpl implements LeaveRequestService{
	@Autowired
	private LeaveRequestDao leaveTypeDao;
	
	@Override
	public List<LeaveRequest> getAll() {			
		return leaveTypeDao.getAll();
	}
	@Override
	public LeaveRequest get(int leaveTypeId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean save(LeaveRequest leaveType, HttpServletRequest request) {
		return leaveTypeDao.save(leaveType);
	
	}
	@Override
	public boolean update(LeaveRequest leaveType, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean delete(LeaveRequest leaveType, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public ArrayList<String> getHolyday() {			
		return leaveTypeDao.getHolyday();
	}
	@Override
	public Map<String,String> getLeaveBalance(UserBean userBean) {			
		return leaveTypeDao.getLeaveBalance(userBean);
	}
	@Override
	@Transactional
	public int leaveStatus(String leaveIds,String status) {

		int res=leaveTypeDao.leaveStatus(leaveIds,status);
		return res;
	}
	
	

}
