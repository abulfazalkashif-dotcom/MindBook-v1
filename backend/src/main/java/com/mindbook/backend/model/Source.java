package com.mindbook.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "sources")
public class Source {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long notebookId;

    private String title;

    private String type;

    public Source() {
    }

    public Source(
            Long notebookId,
            String title,
            String type) {
        this.notebookId = notebookId;
        this.title = title;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public Long getNotebookId() {
        return notebookId;
    }

    public String getTitle() {
        return title;
    }

    public String getType() {
        return type;
    }

    public void setNotebookId(Long notebookId) {
        this.notebookId = notebookId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setType(String type) {
        this.type = type;
    }
}