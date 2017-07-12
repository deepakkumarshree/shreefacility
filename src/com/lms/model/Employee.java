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
public class Employee {
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

}
