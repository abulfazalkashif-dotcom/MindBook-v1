package com.mindbook.backend.controller;

import com.mindbook.backend.service.GeminiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notebooks")
public class ChatController {

  private final GeminiService geminiService;

  public ChatController(GeminiService geminiService) {
    this.geminiService = geminiService;
  }

  @PostMapping("/{id}/chat")
  public ChatResponse chat(
      @PathVariable Long id,
      @RequestBody ChatRequest request) {

    System.out.println("Notebook ID: " + id);
    System.out.println("User message: " + request.message());

    String reply = geminiService.generateResponse(request.message());

    return new ChatResponse(reply);
  }

  public record ChatRequest(String message) {
  }

  public record ChatResponse(String reply) {
  }
}