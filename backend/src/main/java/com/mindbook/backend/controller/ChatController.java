package com.mindbook.backend.controller;

import com.mindbook.backend.model.Source;
import com.mindbook.backend.repository.SourceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notebooks")
public class ChatController {

  private final SourceRepository sourceRepository;

  public ChatController(SourceRepository sourceRepository) {
    this.sourceRepository = sourceRepository;
  }

  @PostMapping("/{id}/chat")
  public ChatResponse chat(
      @PathVariable Long id,
      @RequestBody ChatRequest request) {

    System.out.println("Notebook ID: " + id);
    System.out.println("User message: " + request.message());

    List<Source> sources = sourceRepository.findByNotebookId(id);

    if (sources.isEmpty()) {
      return new ChatResponse(
          "This notebook does not have any sources yet.");
    }

    StringBuilder reply = new StringBuilder();

    reply.append("This notebook contains ")
        .append(sources.size())
        .append(" sources:\n");

    for (int i = 0; i < sources.size(); i++) {
      Source source = sources.get(i);

      reply.append(i + 1)
          .append(". ")
          .append(source.getTitle())
          .append("\n");
    }

    return new ChatResponse(reply.toString());
  }

  public record ChatRequest(String message) {
  }

  public record ChatResponse(String reply) {
  }
}