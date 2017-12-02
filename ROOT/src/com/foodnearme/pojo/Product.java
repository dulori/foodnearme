package com.foodnearme.pojo;

public class Product {

	private String id;
	private String name;
	private String description;
	private String price;
	private String qty;
	private Ordertype ordertype;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public Ordertype getOrdertype() {
		return ordertype;
	}
	public void setOrdertype(Ordertype ordertype) {
		this.ordertype = ordertype;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description="
				+ description + ", price=" + price + ", qty=" + qty
				+ ", ordertype=" + ordertype + "]";
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(String id, String name, String description, String price,
			String qty, Ordertype ordertype) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.qty = qty;
		this.ordertype = ordertype;
	}
	
	
	
}
