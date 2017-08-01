package com.lms.model;

import java.io.Serializable;
import java.util.Date;

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
@Table(name="employeedetails")
public class EmployeeDetails implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	  @Id	 
	  @Column(name="emailId")
	  private String emailId;
	  @OneToOne(fetch=FetchType.EAGER )
	  @JoinColumn(name="empid")
	  private Employee emp;	
	  @Temporal(TemporalType.DATE)
	  @Column(name="dob")
	  private Date dob;
	  @Column(name="pan")
	  private String pan;
	  @Column(name="paddress")
	  private String paddress;
	  @Column(name="caddress")
	  private String caddress;
	  @Column(name="phone")
	  private String phone;
	 
	  @Column(name="emconname")
	  private String emconname;
	  @Column(name="emconaddress")
	  private String emconaddress; 
	  @Column(name="emconphone")
	  private String emconphone; 
	  @Column(name="spousename")
	  private String spousename; 
	  @Column(name="fathername")
	  private String fathername;	  
		
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getPaddress() {
		return paddress;
	}
	public void setPaddress(String paddress) {
		this.paddress = paddress;
	}
	public String getCaddress() {
		return caddress;
	}
	public void setCaddress(String caddress) {
		this.caddress = caddress;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getEmconname() {
		return emconname;
	}
	public void setEmconname(String emconname) {
		this.emconname = emconname;
	}
	public String getEmconaddress() {
		return emconaddress;
	}
	public void setEmconaddress(String emconaddress) {
		this.emconaddress = emconaddress;
	}
	public String getEmconphone() {
		return emconphone;
	}
	public void setEmconphone(String emconphone) {
		this.emconphone = emconphone;
	}
	public String getSpousename() {
		return spousename;
	}
	public void setSpousename(String spousename) {
		this.spousename = spousename;
	}
	public String getFathername() {
		return fathername;
	}
	public void setFathername(String fathername) {
		this.fathername = fathername;
	}
	public Employee getEmp() {
		return emp;
	}
	public void setEmp(Employee emp) {
		this.emp = emp;
	} 
	  
}
