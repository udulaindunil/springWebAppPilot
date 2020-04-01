package com.angularSpring.onlineBookshop.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularSpring.onlineBookshop.entities.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
