package com.foodnearme.pojo;

public class LoginUser {
	
	private String loginUserId;
	private String loginUserPassword;
	private String loginType;
	@Override
	public String toString() {
		return "LoginUser [loginUserId=" + loginUserId + ", loginUserPassword="
				+ loginUserPassword + ", loginType=" + loginType + "]";
	}
	public String getLoginUserId() {
		return loginUserId;
	}
	public void setLoginUserId(String loginUserId) {
		this.loginUserId = loginUserId;
	}
	public String getLoginUserPassword() {
		return loginUserPassword;
	}
	public void setLoginUserPassword(String loginUserPassword) {
		this.loginUserPassword = loginUserPassword;
	}
	public String getLoginType() {
		return loginType;
	}
	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}
	public LoginUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginUser(String loginUserId, String loginUserPassword,
			String loginType) {
		super();
		this.loginUserId = loginUserId;
		this.loginUserPassword = loginUserPassword;
		this.loginType = loginType;
	}
	
	
	
}
