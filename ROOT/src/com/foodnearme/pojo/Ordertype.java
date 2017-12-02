package com.foodnearme.pojo;

public class Ordertype {

	private boolean takeaway;
	private boolean delivery;
	
	public boolean isDelivery() {
		return delivery;
	}
	public void setDelivery(boolean delivery) {
		this.delivery = delivery;
	}
	public Ordertype() {
		super();
		// TODO Auto-generated constructor stub
	}
	public boolean isTakeaway() {
		return takeaway;
	}
	public void setTakeaway(boolean takeaway) {
		this.takeaway = takeaway;
	}
	@Override
	public String toString() {
		return "Ordertype [takeaway=" + takeaway + ", delivery=" + delivery
				+ "]";
	}
	public Ordertype(boolean takeaway, boolean delivery) {
		super();
		this.takeaway = takeaway;
		this.delivery = delivery;
	}
	
	
	
}
