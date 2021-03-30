package com.experiment.repository;

import com.experiment.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    User findByFirstName(String firstName);
    User findByFirstNameAndEmail(String firstName, String email);
    User findByEmail(String email);
    Long countAllByEmail(String email);
    User findAllByEmail(String email);
}
