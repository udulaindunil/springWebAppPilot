package com.angularSpring.onlineBookshop;



import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.angularSpring.onlineBookshop.entities.Book;
import com.angularSpring.onlineBookshop.service.BookServiceImpl;

@SpringBootTest
class OnlineBookshopApplicationTests {

	@Autowired
	BookServiceImpl x;

	@Test
	void contextLoads() {

		Date date = new Date();

		Book b = new Book();
		b.setName("name here");
		b.setDescription("Description");
		b.setSubject("Sublect");
		b.setImageUrl("Url");
		b.setActive(true);
		b.setUnitPrice(200);
		b.setUnitsInStock(100);
		b.setCreatedOn(date);
		b.setUpdatedOn(date);
		
		b.toString();
		System.out.println(b);
		
		x.saveBook(b);

	}

}
