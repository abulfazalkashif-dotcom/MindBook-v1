package com.mindbook.backend;

import com.mindbook.backend.model.Notebook;
import com.mindbook.backend.repository.NotebookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

  private final NotebookRepository notebookRepository;

  public DataInitializer(NotebookRepository notebookRepository) {
    this.notebookRepository = notebookRepository;
  }

  @Override
  public void run(String... args) {

    if (notebookRepository.count() == 0) {

      notebookRepository.save(
          new Notebook(
              "Java Fundamentals - FROM BACKEND",
              "Learn the fundamentals of Java programming."));

      notebookRepository.save(
          new Notebook(
              "Spring Boot",
              "Explore Spring Boot and backend development."));

      notebookRepository.save(
          new Notebook(
              "Artificial Intelligence",
              "Introduction to AI and intelligent systems."));
    }
  }
}