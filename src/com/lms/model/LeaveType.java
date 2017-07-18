package com.lms.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
@Entity
@Table(name="leavetype")

public class LeaveType implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	 @Column(name="leaveid")
     private int leaveId;
	 
@Column(name="leaveType")
private String leaveType;

@Column(name="leaveReasons")
private String leaveReasons;

@Column(name="fromDate")
private Date fromDate; 


	
public int getLeaveId() {
	return leaveId;
}

public void setLeaveId(int leaveId) {
	this.leaveId = leaveId;
}

public String getLeaveType() {
	return leaveType;
}

public void setLeaveType(String leaveType) {
	this.leaveType = leaveType;
}

public String getLeaveReasons() {
	return leaveReasons;
}

public void setLeaveReasons(String leaveReasons) {
	this.leaveReasons = leaveReasons;
}

public Date getFromDate() {
	return fromDate;
}

public void setFromDate(Date fromDate) {
	this.fromDate = fromDate;
}



}
