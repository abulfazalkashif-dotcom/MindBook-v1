package com.mindbook.backend.controller;

import com.mindbook.backend.model.Notebook;
import com.mindbook.backend.repository.NotebookRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NotebookController {

    private final NotebookRepository notebookRepository;

    public NotebookController(NotebookRepository notebookRepository) {
        this.notebookRepository = notebookRepository;
    }

    // Get all notebooks
    @GetMapping("/api/notebooks")
    public List<Notebook> getNotebooks() {
        return notebookRepository.findAll();
    }

    // Get one notebook by ID
    @GetMapping("/api/notebooks/{id}")
    public ResponseEntity<Notebook> getNotebookById(
            @PathVariable Long id) {
        return notebookRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}