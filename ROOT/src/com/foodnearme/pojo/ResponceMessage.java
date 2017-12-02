package com.foodnearme.pojo;

public class ResponceMessage {

	private String responceMessage="failure";
	private String responceCode="-1";
	private String description="invalid Data";
	private Object data;
	public ResponceMessage() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ResponceMessage [responceMessage=" + responceMessage
				+ ", responceCode=" + responceCode + ", description="
				+ description + ", data=" + data + "]";
	}
	public ResponceMessage(String responceMessage, String responceCode,
			String description, Object data) {
		super();
		this.responceMessage = responceMessage;
		this.responceCode = responceCode;
		this.description = description;
		this.data = data;
	}
	public String getResponceMessage() {
		return responceMessage;
	}
	public void setResponceMessage(String responceMessage) {
		this.responceMessage = responceMessage;
	}
	public String getResponceCode() {
		return responceCode;
	}
	public void setResponceCode(String responceCode) {
		this.responceCode = responceCode;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
}
