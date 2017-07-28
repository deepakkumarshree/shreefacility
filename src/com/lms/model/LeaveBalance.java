package com.lms.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity 
@Table(name ="leavebalance" )
public class LeaveBalance {

	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
     @Column(name="leavebalanceid")
     private int leavebalanceId; 
	 
	 @Column (name = "sltaken")
     private int slTaken;
	 
	 @Column (name = "pltaken")
     private int plTaken;
	 
	 @Column(name="optional")
	 private int optional;
	 
	 @Column (name = "carryfrwd")
     private int carryForward;
	 
	 @Column(name="compensatory")
	 private int compensatory;
	 
	 @Column(name = "paternity")
	 private int paternity;
	 
	 @Column(name ="maternity")
	 private int maternity;
	 
	 @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn
	 private Employee emp;

	public int getLeavebalanceId() {
		return leavebalanceId;
	}

	public void setLeavebalanceId(int leavebalanceId) {
		this.leavebalanceId = leavebalanceId;
	}

	public int getSlTaken() {
		return slTaken;
	}

	public void setSlTaken(int slTaken) {
		this.slTaken = slTaken;
	}

	public int getPlTaken() {
		return plTaken;
	}

	public void setPlTaken(int plTaken) {
		this.plTaken = plTaken;
	}

	public int getOptional() {
		return optional;
	}

	public void setOptional(int optional) {
		this.optional = optional;
	}

	public int getCarryForward() {
		return carryForward;
	}

	public void setCarryForward(int carryForward) {
		this.carryForward = carryForward;
	}

	public int getCompensatory() {
		return compensatory;
	}

	public void setCompensatory(int compensatory) {
		this.compensatory = compensatory;
	}

	public int getPaternity() {
		return paternity;
	}

	public void setPaternity(int paternity) {
		this.paternity = paternity;
	}

	public int getMaternity() {
		return maternity;
	}

	public void setMaternity(int maternity) {
		this.maternity = maternity;
	}

	public Employee getEmp() {
		return emp;
	}

	public void setEmp(Employee emp) {
		this.emp = emp;
	}
	 
    

}
