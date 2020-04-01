package com.angularSpring.onlineBookshop.service;

import java.util.List;

import com.angularSpring.onlineBookshop.entities.Book;

public interface BookService {

	Book saveBook(Book book);

	Book updtaeBook(Book book);

	void deleteBook(Book book);

	Book getBookById(Long id);

	List<Book> getAllBooks();

}
