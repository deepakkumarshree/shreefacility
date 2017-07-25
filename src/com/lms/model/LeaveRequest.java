package com.lms.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
@Entity
@Table(name="leaveRequest")

public class LeaveRequest implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="Req_id")
    private int reqId;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="id")
    private Employee eId;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="sup_id")
    private Employee supId;
	 
	 @Column (name = "fromDate")
    private Date fromDate;
	 
	 @Column (name = "ToDate")
    private Date toDate;
	 
	 @Column (name = "noOfLeaves")
    private int noOfLeaves;
	 
	 @Enumerated(EnumType.STRING)
    private LeaveStatus status;
	 
	 public LeaveStatus getStatus() {
		return status;
	}
	public void setStatus(LeaveStatus status) {
		this.status = status;
	}
	@Enumerated(EnumType.STRING)
	 private LeaveType leaveType;
	
    public int getReqId() {  
         return reqId;  
    }  
    public void setReqId(int reqId) {  
        this.reqId = reqId;  
    }  
    
    public Date getFromDate() {  
        return fromDate;  
    }  
    
    public void setFromDate(Date fromDate) {  
       this.fromDate = fromDate;  
    }  
    
    public int getNoOfLeaves() {
		return noOfLeaves;
	}
	public void setNoOfLeaves(int noOfLeaves) {
		this.noOfLeaves = noOfLeaves;
	}
	public Date getToDate() {  
        return toDate;  
    }  
    public void setToDate(Date toDate) {  
       this.toDate = toDate;  
    } 
    
     
    
    public LeaveType getLeaveType() {
		return leaveType;
	}
	public void setLeaveType(LeaveType leaveType) {
		this.leaveType = leaveType;
	}
	
	public Employee geteId() {
		return eId;
	}
	public Employee getSupId()
    {    	 
   	 return supId;
    }
  

}
