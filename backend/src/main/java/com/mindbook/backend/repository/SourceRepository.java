package com.mindbook.backend.repository;

import com.mindbook.backend.model.Source;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SourceRepository extends JpaRepository<Source, Long> {

  List<Source> findByNotebookId(Long notebookId);
}