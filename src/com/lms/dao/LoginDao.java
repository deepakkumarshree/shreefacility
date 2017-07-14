package com.lms.dao;

import javax.servlet.http.HttpServletRequest;

import com.lms.model.Employee;

public interface LoginDao {
	public boolean isValidUser(Employee paramUsers, HttpServletRequest paramHttpServletRequest);
}
