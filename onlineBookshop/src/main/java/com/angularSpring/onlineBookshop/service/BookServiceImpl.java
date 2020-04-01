package com.angularSpring.onlineBookshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angularSpring.onlineBookshop.entities.Book;
import com.angularSpring.onlineBookshop.repos.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookRepository repository;

	@Override
	public Book saveBook(Book book) {

		return repository.save(book);
	}

	@Override
	public Book updtaeBook(Book book) {
		// TODO Auto-generated method stub
		return repository.save(book);
	}

	@Override
	public void deleteBook(Book book) {
		repository.delete(book);

	}

	@Override
	public Book getBookById(Long id) {
		return repository.getOne(id);
	}

	@Override
	public List<Book> getAllBooks() {
		return repository.findAll();
	}

}
