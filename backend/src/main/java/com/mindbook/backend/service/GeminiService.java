// package com.mindbook.backend.service;

// import com.google.genai.Client;
// import com.google.genai.types.GenerateContentResponse;
// import org.springframework.stereotype.Service;

// @Service
// public class GeminiService {

//   private final Client client;

//   public GeminiService() {
//     this.client = Client.builder()
//         .apiKey(System.getenv("GEMINI_API_KEY"))
//         .build();
//   }

//   public String generateResponse(String message, String sourceContent) {

//     String prompt = """
//         You are the AI assistant inside MindBook.

//         Answer the user's question using the provided source material.

//         SOURCE MATERIAL:
//         %s

//         USER QUESTION:
//         %s

//         Instructions:
//         - Use the source material as the primary basis for your answer.
//         - If the answer is present in the source material, explain it clearly.
//         - If the answer cannot be found in the source material, say that the information
//           is not available in the provided sources.
//         - Do not invent information that is not supported by the sources.
//         """.formatted(sourceContent, message);

//     GenerateContentResponse response = client.models.generateContent(
//         "gemini-3.6-flash",
//         prompt,
//         null);

//     return response.text();
//   }
// }

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

    // Check whether the notebook contains any source material.
    if (sourceContent == null || sourceContent.isBlank()) {
      return "This notebook does not contain any source material yet. "
          + "Please add a source before asking questions about the notebook.";
    }

    String prompt = """
        You are the AI assistant inside MindBook.

        Your job is to answer the user's questions using ONLY the
        source material provided below.

        SOURCE MATERIAL:
        %s

        USER QUESTION:
        %s

        Follow these rules carefully:

        1. Use the provided source material as the primary and authoritative
           context for your answer.

        2. If the answer is clearly available in the source material,
           answer it accurately and explain it in a clear and simple way.

        3. If the source material contains only part of the answer,
           answer only the part supported by the sources.

        4. If the requested information cannot be found in the source material,
           clearly say:
           "This information is not available in the provided sources."

        5. Do not invent facts, examples, definitions, explanations, or
           details that are not supported by the source material.

        6. Do not claim that information comes from the sources if it
           does not actually appear in them.

        7. Keep the response relevant to the user's question.
           Do not unnecessarily repeat the entire source material.

        8. Use clear formatting when useful, such as short paragraphs
           or bullet points.

        Now answer the user's question.
        """.formatted(sourceContent, message);

    GenerateContentResponse response = client.models.generateContent(
        "gemini-3.6-flash",
        prompt,
        null);

    return response.text();
  }
}
