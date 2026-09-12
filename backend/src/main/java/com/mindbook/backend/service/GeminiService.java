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

  public String generateResponse(String message, String sourceContent) {

    String prompt = """
        You are the AI assistant inside MindBook.

        Answer the user's question using the provided source material.

        SOURCE MATERIAL:
        %s

        USER QUESTION:
        %s

        Instructions:
        - Use the source material as the primary basis for your answer.
        - If the answer is present in the source material, explain it clearly.
        - If the answer cannot be found in the source material, say that the information
          is not available in the provided sources.
        - Do not invent information that is not supported by the sources.
        """.formatted(sourceContent, message);

    GenerateContentResponse response = client.models.generateContent(
        "gemini-3.6-flash",
        prompt,
        null);

    return response.text();
  }
}