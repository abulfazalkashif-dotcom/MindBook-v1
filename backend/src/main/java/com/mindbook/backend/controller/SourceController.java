package com.mindbook.backend.controller;

import com.mindbook.backend.model.Source;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SourceController {

  @GetMapping("/api/notebooks/{notebookId}/sources")
  public List<Source> getSources(
      @PathVariable Long notebookId) {

    if (notebookId == 1L) {
      return List.of(
          new Source(
              1L,
              1L,
              "Java Fundamentals",
              "PDF"),
          new Source(
              2L,
              1L,
              "Core Java Concepts",
              "PDF"),
          new Source(
              3L,
              1L,
              "Object Oriented Programming",
              "PDF"));
    }

    return List.of();
  }
}