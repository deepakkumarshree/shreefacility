package com.lms.model;

import java.io.Serializable;
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
	 
	@Column(name="leavename")
private String leaveName;
	
public int getLeaveId() {
	return leaveId;
}
public void setLeaveId(int leaveId) {
	this.leaveId = leaveId;
}
public String getLeaveName() {
	return leaveName;
}
public void setLeaveName(String leaveName) {
	this.leaveName = leaveName;
}

}
