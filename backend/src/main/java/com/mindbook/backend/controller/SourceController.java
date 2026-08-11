package com.mindbook.backend.controller;

import com.mindbook.backend.model.Source;
import com.mindbook.backend.service.SourceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SourceController {

  private final SourceService sourceService;

  public SourceController(SourceService sourceService) {
    this.sourceService = sourceService;
  }

  @GetMapping("/api/notebooks/{notebookId}/sources")
  public List<Source> getSources(
      @PathVariable Long notebookId) {

    return sourceService.getSourcesByNotebookId(notebookId);
  }
}