package com.mindbook.backend.controller;

import com.mindbook.backend.model.Notebook;
import com.mindbook.backend.model.Source;
import com.mindbook.backend.repository.NotebookRepository;
import com.mindbook.backend.service.SourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SourceController {

    private final SourceService sourceService;
    private final NotebookRepository notebookRepository;

    public SourceController(
            SourceService sourceService,
            NotebookRepository notebookRepository) {

        this.sourceService = sourceService;
        this.notebookRepository = notebookRepository;
    }

    @GetMapping("/api/notebooks/{notebookId}/sources")
    public List<Source> getSources(
            @PathVariable Long notebookId) {

        return sourceService.getSourcesByNotebookId(notebookId);
    }

    @PostMapping("/api/notebooks/{notebookId}/sources")
    public Source createSource(
            @PathVariable Long notebookId,
            @RequestBody CreateSourceRequest request) {

        Notebook notebook = notebookRepository.findById(notebookId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Notebook not found with id: " + notebookId));

        return sourceService.createSource(
                notebook,
                request.title(),
                request.type(),
                request.content());
    }

    public record CreateSourceRequest(
            String title,
            String type,
            String content) {
    }
}