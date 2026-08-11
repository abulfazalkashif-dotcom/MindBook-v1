package com.mindbook.backend;

import com.mindbook.backend.model.Source;
import com.mindbook.backend.repository.SourceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SourceDataInitializer implements CommandLineRunner {

  private final SourceRepository sourceRepository;

  public SourceDataInitializer(SourceRepository sourceRepository) {
    this.sourceRepository = sourceRepository;
  }

  @Override
  public void run(String... args) {

    if (sourceRepository.count() == 0) {

      sourceRepository.save(
          new Source(
              1L,
              "Java Fundamentals",
              "PDF"));

      sourceRepository.save(
          new Source(
              1L,
              "Core Java Concepts",
              "PDF"));

      sourceRepository.save(
          new Source(
              1L,
              "Object Oriented Programming",
              "PDF"));
    }
  }
}