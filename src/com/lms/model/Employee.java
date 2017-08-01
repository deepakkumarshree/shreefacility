package com.lms.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="employee")
public class Employee implements Serializable  {
	 

	/**
	 * 
	 */
	private static final long serialVersionUID = 5037668165157295879L;

	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  @Column(name="empid")
	  private int empid;
	 @Column(name="password")
	  private String password;
	@OneToOne(fetch=FetchType.EAGER )
	@JoinColumn(name="roleId")
	private Role role;	
	
	@Column(name="status")
	  private String status;
	@Column(name="firstname")
	  private String firstname;
	@Column(name="middlename")
	  private String middlename;
	@Column(name="lastname")
	  private String lastname;
	@Column(name="sex")
	  private String sex;
	@Temporal(TemporalType.DATE)
	@Column(name="doj")
	  private Date doj;
	@Column(name="repotingto")
	  private String repotingto;
	@Column(name="designation")
	  private String designation;
	@Column(name="empcode")
	  private String empcode;
	@Column(name="aadhar")
	  private String aadhar;
	  @OneToOne(mappedBy = "emp", cascade = CascadeType.ALL)
	private EmployeeDetails employeedetails;	
	
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getMiddlename() {
		return middlename;
	}
	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Date getDoj() {
		return doj;
	}
	public void setDoj(Date doj) {
		this.doj = doj;
	}
	public String getRepotingto() {
		return repotingto;
	}
	public void setRepotingto(String repotingto) {
		this.repotingto = repotingto;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmpcode() {
		return empcode;
	}
	public void setEmpcode(String empcode) {
		this.empcode = empcode;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	
	

}
