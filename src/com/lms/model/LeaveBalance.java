package com.lms.model;

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

@Entity 
@Table(name ="Leave_Balance" )
public class LeaveBalance {

	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
     @Column(name="L_id")
     private int leaveId; 
	 
	 @Column (name = "SLTaken")
     private int sLTaken;
	 
	 @Column (name = "PLTaken")
     private int pLTaken;
	 
	 @Column(name="Optional")
	 private int optional;
	 
	 @Column (name = "Carry_Frwd")
     private int carryForward;
	 
	 @Column(name="Compensatory")
	 private int compensatory;
	 
	 @Column(name = "Paternity")
	 private int paternity;
	 
	 @Column(name ="Maternity")
	 private int maternity;
	 
	 @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	 @JoinColumn(name="id")
	 private Employee eId;
	 
     public int getLeaveId() {  
          return leaveId;  
     }  
     
     public void setLeaveId(int leaveId) {  
         this.leaveId = leaveId;  
     }  
     
     public int getSLTaken() {  
         return sLTaken;  
     }  
     
     public void setSLTaken(int sLTaken) {  
        this.sLTaken = sLTaken;  
     }  
    
     public int getPLTaken() {  
         return sLTaken;  
     }  
     
     public void setPLTaken(int pLTaken) {  
        this.pLTaken = pLTaken;  
     } 
     
     public int getCForward() {  
         return carryForward;  
     }  
     
     public void setCForward(int carryForward) {  
        this.carryForward = carryForward;  
     }
     
     public Employee getEmployee()
     {
    	 
    	 return eId;
     }

}
