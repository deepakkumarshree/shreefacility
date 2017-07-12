package com.lms.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="employeedetails")

public class EmployeeDetails implements Serializable{
	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
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
	  @OneToOne(fetch=FetchType.LAZY, cascade={javax.persistence.CascadeType.ALL})
	  @JoinColumn(name="userid")
	  private Employee employee;
	  
	  public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Integer getUserdetailsid()
	  {
	    return this.userdetailsid;
	  }
	  
	  public void setUserdetailsid(Integer userdetailsid)
	  {
	    this.userdetailsid = userdetailsid;
	  }
	  
	  public String getFirstname()
	  {
	    return this.firstname;
	  }
	  
	  public void setFirstname(String firstname)
	  {
	    this.firstname = firstname;
	  }
	  
	  public String getMiddlename()
	  {
	    return this.middlename;
	  }
	  
	  public void setMiddlename(String middlename)
	  {
	    this.middlename = middlename;
	  }
	  
	  public String getLastname()
	  {
	    return this.lastname;
	  }
	  
	  public void setLastname(String lastname)
	  {
	    this.lastname = lastname;
	  }
	  
	  public String getMailId()
	  {
	    return this.mailId;
	  }
	  
	  public void setMailId(String mailId)
	  {
	    this.mailId = mailId;
	  }
	  
	  public String getAlternatemailId()
	  {
	    return this.alternatemailId;
	  }
	  
	  public void setAlternatemailId(String alternatemailId)
	  {
	    this.alternatemailId = alternatemailId;
	  }
	  
	  public String getDateofcreation()
	  {
	    return this.dateofcreation;
	  }
	  
	  public void setDateofcreation(String dateofcreation)
	  {
	    this.dateofcreation = dateofcreation;
	  }
	  
	  public String getDob()
	  {
	    return this.dob;
	  }
	  
	  public void setDob(String dob)
	  {
	    this.dob = dob;
	  }
	  
	  public String getSex()
	  {
	    return this.sex;
	  }
	  
	  public void setSex(String sex)
	  {
	    this.sex = sex;
	  }
	  
	  public String getAddress()
	  {
	    return this.address;
	  }
	  
	  public void setAddress(String address)
	  {
	    this.address = address;
	  }
	  
	  public String getPhone()
	  {
	    return this.phone;
	  }
	  
	  public void setPhone(String phone)
	  {
	    this.phone = phone;
	  }
	  
	  public String getMobile()
	  {
	    return this.mobile;
	  }
	  
	  public void setMobile(String mobile)
	  {
	    this.mobile = mobile;
	  }
	  
	  public String getDeviceUid()
	  {
	    return this.deviceUid;
	  }
	  
	  public void setDeviceUid(String deviceUid)
	  {
	    this.deviceUid = deviceUid;
	  }
	  
	  public String getAnnuanlIncome()
	  {
	    return this.annuanlIncome;
	  }
	  
	  public void setAnnuanlIncome(String annuanlIncome)
	  {
	    this.annuanlIncome = annuanlIncome;
	  }
	  
	  public String getRemark()
	  {
	    return this.remark;
	  }
	  
	  public void setRemark(String remark)
	  {
	    this.remark = remark;
	  }

}
