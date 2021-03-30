package com.experiment.runner;

import com.experiment.model.User;
import com.experiment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleUserDataLoader implements CommandLineRunner {

    private final UserRepository userRepository;

    @Autowired
    public SampleUserDataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        User superMan = new User("Clark", "Kent", "Superman@hotmail.com");
        User spiderMan = new User("Peter", "Parker", "Spiderman@hotmail.com");
        userRepository.save(superMan);
        userRepository.save(spiderMan);
    }
}
