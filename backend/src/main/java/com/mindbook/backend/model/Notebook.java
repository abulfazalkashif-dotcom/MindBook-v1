package com.mindbook.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "notebooks")
public class Notebook {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;

  private String description;

  @OneToMany(mappedBy = "notebook", cascade = CascadeType.ALL, orphanRemoval = true)
  @JsonManagedReference
  private List<Source> sources = new ArrayList<>();

  public Notebook() {
  }

  public Notebook(String title, String description) {
    this.title = title;
    this.description = description;
  }

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public List<Source> getSources() {
    return sources;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setSources(List<Source> sources) {
    this.sources = sources;
  }

  public void addSource(Source source) {
    sources.add(source);
    source.setNotebook(this);
  }

  public void removeSource(Source source) {
    sources.remove(source);
    source.setNotebook(null);
  }
}