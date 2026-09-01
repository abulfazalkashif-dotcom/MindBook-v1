package com.mindbook.backend.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

  private final Client client;

  public GeminiService() {
    this.client = Client.builder()
        .apiKey(System.getenv("GEMINI_API_KEY"))
        .build();
  }

  public String generateResponse(String message) {

    GenerateContentResponse response = client.models.generateContent(
        "gemini-3.6-flash",
        message,
        null);

    return response.text();
  }
}