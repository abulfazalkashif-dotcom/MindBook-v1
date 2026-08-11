package com.mindbook.backend.controller;

import com.mindbook.backend.model.Notebook;
import com.mindbook.backend.repository.NotebookRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NotebookController {

    private final NotebookRepository notebookRepository;

    public NotebookController(NotebookRepository notebookRepository) {
        this.notebookRepository = notebookRepository;
    }

    @GetMapping("/api/notebooks")
    public List<Notebook> getNotebooks() {
        return notebookRepository.findAll();
    }
}