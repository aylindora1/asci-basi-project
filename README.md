# 🍳 Aşçıbaşı

![Aşçıbaşı Preview](./ascibasi-preview.png)

> A minimalist AI-powered recipe generator web application.
> 
##  About the Project

**Aşçıbaşı** is a simple web application that helps users generate recipes based on the ingredients they already have at home.

Users can enter ingredients one by one, and the app uses an AI model to generate a well-formatted recipe in Markdown format.

The goal of this project was to practice frontend development and API integration.

## Tech Stack

- **React (Vite)**
- **JavaScript**
- **ReactMarkdown**
- **Hugging Face Inference API (Mistral / Mixtral models)**
- **CSS for styling**

1. User types an ingredient.
2. Ingredient is stored in React state.
3. Ingredients are sent to the AI model via API.
4. The AI generates:
   - Recipe title
   - Ingredients list
   - Step-by-step instructions
   - Time estimate
   - Tips
5. The Markdown response is rendered dynamically on the page.
