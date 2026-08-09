package com.mindbook.backend.controller;

import com.mindbook.backend.model.Notebook;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NotebookController {

    @GetMapping("/api/notebooks")
    public List<Notebook> getNotebooks() {

        return List.of(
            new Notebook(
                1L,
                "Java Fundamentals",
                "Learn the fundamentals of Java programming."
            ),
            new Notebook(
                2L,
                "Spring Boot",
                "Explore Spring Boot and backend development."
            ),
            new Notebook(
                3L,
                "Artificial Intelligence",
                "Introduction to AI and intelligent systems."
            )
        );
    }

    @GetMapping("/api/notebooks/{id}")
    public ResponseEntity<Notebook> getNotebookById(
        @PathVariable Long id
    ) {

        List<Notebook> notebooks = getNotebooks();

        for (Notebook notebook : notebooks) {
            if (notebook.getId().equals(id)) {
                return ResponseEntity.ok(notebook);
            }
        }

        return ResponseEntity.notFound().build();
    }
}