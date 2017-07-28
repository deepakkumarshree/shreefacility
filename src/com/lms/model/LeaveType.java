package com.lms.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="leavetype")
public class LeaveType implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  @Column(name="leavetypeid")
	  private int leaveTypeId;
	 @Column(name="leavetypename")
	  private String leaveTypeName;
	 
	public int getLeaveTypeId() {
		return leaveTypeId;
	}
	public void setLeaveTypeId(int leaveTypeId) {
		this.leaveTypeId = leaveTypeId;
	}
	public String getLeaveTypeName() {
		return leaveTypeName;
	}
	public void setLeaveTypeName(String leaveTypeName) {
		this.leaveTypeName = leaveTypeName;
	}
	 
	
}
