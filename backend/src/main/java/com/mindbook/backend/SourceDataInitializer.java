package com.mindbook.backend;

import com.mindbook.backend.model.Notebook;
import com.mindbook.backend.model.Source;
import com.mindbook.backend.repository.NotebookRepository;
import com.mindbook.backend.repository.SourceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SourceDataInitializer implements CommandLineRunner {

  private final SourceRepository sourceRepository;
  private final NotebookRepository notebookRepository;

  public SourceDataInitializer(
      SourceRepository sourceRepository,
      NotebookRepository notebookRepository) {
    this.sourceRepository = sourceRepository;
    this.notebookRepository = notebookRepository;
  }

  @Override
  public void run(String... args) {

    if (sourceRepository.count() == 0) {

      Notebook notebook = notebookRepository
          .findById(1L)
          .orElseThrow();

      sourceRepository.save(
          new Source(
              notebook,
              "Java Fundamentals",
              "PDF"));

      sourceRepository.save(
          new Source(
              notebook,
              "Core Java Concepts",
              "PDF"));

      sourceRepository.save(
          new Source(
              notebook,
              "Object Oriented Programming",
              "PDF"));
    }
  }
}