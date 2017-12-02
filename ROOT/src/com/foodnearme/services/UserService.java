package com.foodnearme.services;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.foodnearme.pojo.LoginUser;
import com.foodnearme.pojo.Ordertype;
import com.foodnearme.pojo.Product;
import com.foodnearme.pojo.ResponceMessage;
import com.foodnearme.pojo.ShefUser;

@Path("/authentication")
public class UserService {

	/**
	 * 
	 * @param input
	 *            : contains the username and passswords
	 * @param servletResponse
	 *            : return the json contianing the result and status : if status
	 *            is invalid authentication fialed, otherwise Success
	 * @return
	 */
	static List<LoginUser> loginUsers = new ArrayList<LoginUser>();
	static List<ShefUser> shefList = new ArrayList<ShefUser>();
	static List<Product> products = new ArrayList<Product>();

	static {

		// Initialize Login Users
		loginUsers.add(new LoginUser("customer", "123", "Customer"));
		loginUsers.add(new LoginUser("shef", "123", "Shef"));

		// Initialize Shef Users

		shefList.add(new ShefUser("4", "55", "Taco Mexican", "p", "Arkansas",
				"17:00", "15", "Y", "Y", "Mexican / American"));
		shefList.add(new ShefUser("4", "55", "Taco California", "p",
				"California", "17:00", "15", "Y", "Y", "Mexican / American"));
		shefList.add(new ShefUser("4", "55", "Alabama Mexican", "p", "Alabama",
				"17:00", "15", "Y", "Y", "Mexican / American"));
		shefList.add(new ShefUser("4", "55", "Taco Alabama", "p", "Alabama",
				"17:00", "15", "Y", "Y", "Mexican / American"));
		shefList.add(new ShefUser("4", "55", "Taco Hawaii", "p", "Hawaii",
				"17:00", "15", "Y", "Y", "Mexican / American"));
		shefList.add(new ShefUser("4", "55", "Hawaii Mexican", "p", "Hawaii",
				"17:00", "15", "Y", "Y", "Mexican / American"));
		shefList.add(new ShefUser("4", "55", "New Jersey", "p", "New Jersey",
				"17:00", "15", "Y", "Y", "Mexican / American"));

		// Initialize Products
		products.add(new Product("1", "Product 1",
				"product 1 Description add here", "500", "0", new Ordertype(
						true, false)));
		products.add(new Product("2", "Product 2",
				"product 2 Description add here", "600", "0", new Ordertype(
						true, true)));
		products.add(new Product("3", "Product 3",
				"product 3 Description add here", "700", "0", new Ordertype(
						true, true)));
		products.add(new Product("4", "Product 4",
				"product 4 Description add here", "400", "0", new Ordertype(
						false, true)));
		products.add(new Product("5", "Product 5",
				"product 5 Description add here", "300", "0", new Ordertype(
						true, false)));
		products.add(new Product("6", "Product 6",
				"product 6 Description add here", "450", "0", new Ordertype(
						true, true)));
		products.add(new Product("7", "Product 7",
				"product 7 Description add here", "5500", "0", new Ordertype(
						false, true)));

	}

	@POST
	@Path("/login")
	@Produces({ MediaType.APPLICATION_JSON })
	public ResponceMessage authenticate(@FormParam("input") String input,
			@Context HttpServletResponse servletResponse) {

		ResponceMessage responceMessage = new ResponceMessage();
		
		String loginUserId = "customer";
		String loginUserPassword = "123";
		String loginType = "Customer";

		Object o = null;

		for (LoginUser loginUser : loginUsers) {
			if (loginUserId.equals(loginUser.getLoginUserId())
					&& loginUserPassword.equals(loginUser
							.getLoginUserPassword()) && loginType.equals(loginUser.getLoginType())) {
				o = loginUser;
				break;
			}
		}
		if (null != o) {
			responceMessage.setResponceMessage("success");
			responceMessage.setResponceCode("valid");
		}

		return responceMessage;
	}

}
