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

    Notebook notebook = notebookRepository
        .findById(1L)
        .orElseThrow();

    if (sourceRepository.count() == 0) {

      sourceRepository.save(
          new Source(
              notebook,
              "Java Fundamentals",
              "PDF",
              """
                  Java is a high-level, object-oriented programming language.
                  Java programs are compiled into bytecode that runs on the Java Virtual Machine (JVM).
                  Java uses classes and objects to organize programs.
                  Important Java fundamentals include variables, data types, operators,
                  conditional statements, loops, methods, classes, and objects.
                  """));

      sourceRepository.save(
          new Source(
              notebook,
              "Core Java Concepts",
              "PDF",
              """
                  Core Java includes important concepts such as classes, objects,
                  inheritance, polymorphism, abstraction, and encapsulation.
                  Inheritance allows one class to acquire properties and behavior from another class.
                  Polymorphism allows the same interface or method to behave in different ways.
                  Encapsulation means combining data and methods inside a class and controlling access to the data.
                  Abstraction focuses on exposing essential features while hiding implementation details.
                  """));

      sourceRepository.save(
          new Source(
              notebook,
              "Object Oriented Programming",
              "PDF",
              """
                  Object Oriented Programming (OOP) is a programming approach based on objects and classes.
                  The four major principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.
                  A class is a blueprint for creating objects.
                  An object is an instance of a class.
                  Encapsulation protects data by restricting direct access to an object's internal state.
                  """));

    } else {

      Source javaFundamentals = sourceRepository.findById(1L).orElseThrow();
      javaFundamentals.setContent("""
          Java is a high-level, object-oriented programming language.
          Java programs are compiled into bytecode that runs on the Java Virtual Machine (JVM).
          Java uses classes and objects to organize programs.
          Important Java fundamentals include variables, data types, operators,
          conditional statements, loops, methods, classes, and objects.
          """);

      Source coreJava = sourceRepository.findById(2L).orElseThrow();
      coreJava.setContent("""
          Core Java includes important concepts such as classes, objects,
          inheritance, polymorphism, abstraction, and encapsulation.
          Inheritance allows one class to acquire properties and behavior from another class.
          Polymorphism allows the same interface or method to behave in different ways.
          Encapsulation means combining data and methods inside a class and controlling access to the data.
          Abstraction focuses on exposing essential features while hiding implementation details.
          """);

      Source oop = sourceRepository.findById(3L).orElseThrow();
      oop.setContent("""
          Object Oriented Programming (OOP) is a programming approach based on objects and classes.
          The four major principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.
          A class is a blueprint for creating objects.
          An object is an instance of a class.
          Encapsulation protects data by restricting direct access to an object's internal state.
          """);

      sourceRepository.save(javaFundamentals);
      sourceRepository.save(coreJava);
      sourceRepository.save(oop);
    }
  }
}