package com.lms.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table(name ="holiday" )
public class Holiday {

	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
     @Column(name="h_id")
     private int holidayId; 
	 
	 @Column (name = "h_name")
     private String holidayName;
	 
	 @Column (name = "h_date")
     private Date holidayDate;
	 
	
	public int getHolidayId() {
		return holidayId;
	}
	public void setHolidayId( int holidayId) {
	 this.holidayId = holidayId;
	}
	public String getHolidayName() {
		return holidayName;
	}
	public void setHolidayName( String holidayName) {
	 this.holidayName = holidayName;
	}

	public Date getHolidayDate() {
		return holidayDate;
	}
	public void setHolidayDate( Date holidayDate) {
	 this.holidayDate = holidayDate;
	}

}
