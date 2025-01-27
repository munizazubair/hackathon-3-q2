import React, { useState, useEffect } from "react";
import { faqQuery } from "@/sanity/sanity.query";

const FAQPage = () => {
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");  // New state for email
  const [response, setResponse] = useState("");
  const [questions, setQuestions] = useState([]);
  const [queryss, setQueryd] = useState<any[]>([]);

  // Fetch questions
  useEffect(() => {
    async function fetchData() {
      try {
        const categoryData = await faqQuery();
        setQueryd(categoryData);
      } catch {
        return "something went wrong!";
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mutation = {
      mutations: [
        {
          create: {
            _type: "faqQuestion",
            question,
            email,  // Send email with the question
            status: "Pending",
          },
        },
      ],
    };

    // Send to your API endpoint
    const res = await fetch("/api/submitQuestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, email }),
    });

    if (res.ok) {
      setResponse("Your question has been submitted.");
      setQuestion("");
      setEmail("");  // Clear the email field after submission
    } else {
      setResponse("Failed to submit the question. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">FAQ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2"
          placeholder="Enter your email"
          required
        />
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border p-2"
          placeholder="Ask your question here..."
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {response && <p className="mt-4 text-green-600">{response}</p>}

      <h2 className="mt-8 text-lg font-bold">Previous Questions:</h2>
      <ul className="mt-4">
        {queryss.map((q, index) => (
          <li key={index} className="border-b py-2">
            <strong>Question:</strong> {q.question} <br />
            <strong>Status:</strong> {q.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
