package com.foodnearme.pojo;

public class ShefUser {

	private String star;
	private String review;
	private String name;
	private String type;
	private String address;
	private String open;
	private String minimum;
	private String takeaway = "Y";
	private String Delivery = "Y";
	private String Category;
	public String getStar() {
		return star;
	}
	public void setStar(String star) {
		this.star = star;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getOpen() {
		return open;
	}
	public void setOpen(String open) {
		this.open = open;
	}
	public String getMinimum() {
		return minimum;
	}
	public void setMinimum(String minimum) {
		this.minimum = minimum;
	}
	public String getTakeaway() {
		return takeaway;
	}
	public void setTakeaway(String takeaway) {
		this.takeaway = takeaway;
	}
	public String getDelivery() {
		return Delivery;
	}
	public void setDelivery(String delivery) {
		Delivery = delivery;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	@Override
	public String toString() {
		return "ShefUser [star=" + star + ", review=" + review + ", name="
				+ name + ", type=" + type + ", address=" + address + ", open="
				+ open + ", minimum=" + minimum + ", takeaway=" + takeaway
				+ ", Delivery=" + Delivery + ", Category=" + Category + "]";
	}
	public ShefUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ShefUser(String star, String review, String name, String type,
			String address, String open, String minimum, String takeaway,
			String delivery, String category) {
		super();
		this.star = star;
		this.review = review;
		this.name = name;
		this.type = type;
		this.address = address;
		this.open = open;
		this.minimum = minimum;
		this.takeaway = takeaway;
		Delivery = delivery;
		Category = category;
	}

	
	
}
