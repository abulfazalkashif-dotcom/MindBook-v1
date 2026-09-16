package com.mindbook.backend.service;

import com.mindbook.backend.model.Notebook;
import com.mindbook.backend.model.Source;
import com.mindbook.backend.repository.SourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SourceService {

  private final SourceRepository sourceRepository;

  public SourceService(SourceRepository sourceRepository) {
    this.sourceRepository = sourceRepository;
  }

  public List<Source> getSourcesByNotebookId(Long notebookId) {
    return sourceRepository.findByNotebookId(notebookId);
  }

  public Source createSource(
      Notebook notebook,
      String title,
      String type,
      String content) {

    Source source = new Source(
        notebook,
        title,
        type,
        content);

    return sourceRepository.save(source);
  }
}