// // First, install the Google AI SDK
// npm install @google/generative-ai

// // Import and configure the SDK
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

// // Create a function to interact with Gemini
// async function runGemini(userInput) {
//   // For text-only input
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
//   try {
//     const result = await model.generateContent(userInput);
//     const response = await result.response;
//     return response.text();
//   } catch (error) {
//     console.error("Error:", error);
//     return "An error occurred";
//   }
// }