package com.lms.service;

import javax.servlet.http.HttpServletRequest;

import com.lms.model.Employee;

public interface LoginService {
	public boolean isValidUser(Employee paramUsers, HttpServletRequest paramHttpServletRequest);

}
