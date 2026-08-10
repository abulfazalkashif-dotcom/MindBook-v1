package com.mindbook.backend.model;

public class Source {

    private Long id;
    private Long notebookId;
    private String title;
    private String type;

    public Source(
            Long id,
            Long notebookId,
            String title,
            String type
    ) {
        this.id = id;
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
}