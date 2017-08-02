package com.lms.bean;

import java.util.ArrayList;
import java.util.Date;

public class UserBean {
	private int id;
	private String firstName;
	private String lastName;
	private String empCode;
	private Date doj;
	private Date dob;
	private int roleId;
	private ArrayList<?> permissions;
	
		
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public Date getDoj() {
		return doj;
	}
	public void setDoj(Date doj) {
		this.doj = doj;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmpCode() {
		return empCode;
	}
	public void setEmpCode(String empCode) {
		this.empCode = empCode;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public ArrayList<?> getPermissions() {
		return permissions;
	}
	public void setPermissions(ArrayList<?> permissions) {
		this.permissions = permissions;
	}
	

}
