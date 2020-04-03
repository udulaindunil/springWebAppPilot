package com.angularSpring.onlineBookshop.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.angularSpring.onlineBookshop.entities.BookCategory;


@RepositoryRestResource(collectionResourceRel = "bookCategories", path = "bookCategories")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
