package com.lms.serviceImp;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lms.dao.LeaveTypeDao;
import com.lms.model.LeaveType;
import com.lms.service.LeaveTypeService;

@Service
public class LeaveTypeServiceImpl implements LeaveTypeService{
	@Autowired
	private LeaveTypeDao leaveTypeDao;
	@Transactional
	@Override
	public List<LeaveType> getAll() {			
		return leaveTypeDao.getAll();
	}
	@Override
	public LeaveType get(int leaveTypeId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean save(LeaveType leaveType, HttpServletRequest request) {
		return leaveTypeDao.save(leaveType);
	
	}
	@Override
	public boolean update(LeaveType leaveType, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean delete(LeaveType leaveType, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public ArrayList<String> getHolyday() {			
		return leaveTypeDao.getHolyday();
	}


}
