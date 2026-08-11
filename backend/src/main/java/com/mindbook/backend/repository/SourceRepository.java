package com.mindbook.backend.repository;

import com.mindbook.backend.model.Source;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SourceRepository {

  private final List<Source> sources = new ArrayList<>();

  public SourceRepository() {

    sources.add(
        new Source(
            1L,
            1L,
            "Java Fundamentals",
            "PDF"));

    sources.add(
        new Source(
            2L,
            1L,
            "Core Java Concepts",
            "PDF"));

    sources.add(
        new Source(
            3L,
            1L,
            "Object Oriented Programming",
            "PDF"));
  }

  public List<Source> findByNotebookId(Long notebookId) {

    List<Source> result = new ArrayList<>();

    for (Source source : sources) {

      if (source.getNotebookId().equals(notebookId)) {
        result.add(source);
      }
    }

    return result;
  }
}