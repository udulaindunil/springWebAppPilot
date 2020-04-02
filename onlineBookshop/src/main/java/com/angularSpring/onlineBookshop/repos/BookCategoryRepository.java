package com.angularSpring.onlineBookshop.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularSpring.onlineBookshop.entities.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
