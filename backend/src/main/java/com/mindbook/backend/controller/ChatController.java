package com.mindbook.backend.controller;

import com.mindbook.backend.model.Source;
import com.mindbook.backend.repository.SourceRepository;
import com.mindbook.backend.service.GeminiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notebooks")
public class ChatController {

  private final GeminiService geminiService;
  private final SourceRepository sourceRepository;

  public ChatController(
      GeminiService geminiService,
      SourceRepository sourceRepository) {

    this.geminiService = geminiService;
    this.sourceRepository = sourceRepository;
  }

  @PostMapping("/{id}/chat")
  public ChatResponse chat(
      @PathVariable Long id,
      @RequestBody ChatRequest request) {

    System.out.println("Notebook ID: " + id);
    System.out.println("User message: " + request.message());

    // Get all sources belonging to this notebook
    List<Source> sources = sourceRepository.findByNotebookId(id);

    // Combine all source content into one text
    String sourceContent = sources.stream()
        .map(source -> "SOURCE: " + source.getTitle() + "\n" +
            source.getContent())
        .reduce("", (combined, source) -> combined + "\n\n" + source);

    // Send the user's question + source material to Gemini
    String reply = geminiService.generateResponse(
        request.message(),
        sourceContent);

    return new ChatResponse(reply);
  }

  public record ChatRequest(String message) {
  }

  public record ChatResponse(String reply) {
  }
}