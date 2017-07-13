package com.lms.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="employee")
public class Employee implements Serializable  {
	 

	/**
	 * 
	 */
	private static final long serialVersionUID = 5037668165157295879L;

	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  @Column(name="id")
	  private int id;
	 
	  @Column(name="loginname")
	  private String loginName;
	  
	  @Column(name="password")
	  private String password;
	  
	  @Column(name="active")
	  private String active;
	  
	  @Column(name="profileno")
	  private String profileno;
	  
	  @Column(name="userdetailsid")
	  private Integer userdetailsid;
	  
	  @Column(name="firstname")
	  private String firstname;
	  
	  @Column(name="middlename")
	  private String middlename;
	  
	  @Column(name="lastname")
	  private String lastname;
	  
	  @Column(name="mailid")
	  private String mailId;
	  
	  @Column(name="alternatemailid")
	  private String alternatemailId;
	  
	  @Column(name="dateofcreation")
	  private String dateofcreation;
	  
	  @Column(name="dob")
	  private String dob;
	  
	  @Column(name="sex")
	  private String sex;
	  
	  @Column(name="address")
	  private String address;
	  
	  @Column(name="phone")
	  private String phone;
	  
	  @Column(name="mobile")
	  private String mobile;
	  
	  @Column(name="deviceuid")
	  private String deviceUid;
	  
	  @Column(name="annuanlincome")
	  private String annuanlIncome;
	  
	  @Column(name="remark")
	  private String remark;
	  
	  @Column(name="supervisor")
	  private String supervisor;
	  
	  public int getId()
	  {
	    return this.id;
	  }
	  
	  public void setId(int id)
	  {
	    this.id = id;
	  }
	  
	  public String getLoginName()
	  {
	    return this.loginName;
	  }
	  
	  public void setLoginName(String loginName)
	  {
	    this.loginName = loginName;
	  }
	  
	  public String getPassword()
	  {
	    return this.password;
	  }
	  
	  public void setPassword(String password)
	  {
	    this.password = password;
	  }
	  
	  public String getActive()
	  {
	    return this.active;
	  }
	  
	  public void setActive(String active)
	  {
	    this.active = active;
	  }
	  
	  public String getProfileno()
	  {
	    return this.profileno;
	  }
	  
	  public void setProfileno(String profileno)
	  {
	    this.profileno = profileno;
	  }

	public Integer getUserdetailsid() {
		return userdetailsid;
	}

	public void setUserdetailsid(Integer userdetailsid) {
		this.userdetailsid = userdetailsid;
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

	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}

	public String getAlternatemailId() {
		return alternatemailId;
	}

	public void setAlternatemailId(String alternatemailId) {
		this.alternatemailId = alternatemailId;
	}

	public String getDateofcreation() {
		return dateofcreation;
	}

	public void setDateofcreation(String dateofcreation) {
		this.dateofcreation = dateofcreation;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getDeviceUid() {
		return deviceUid;
	}

	public void setDeviceUid(String deviceUid) {
		this.deviceUid = deviceUid;
	}

	public String getAnnuanlIncome() {
		return annuanlIncome;
	}

	public void setAnnuanlIncome(String annuanlIncome) {
		this.annuanlIncome = annuanlIncome;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(String supervisor) {
		this.supervisor = supervisor;
	}

}
