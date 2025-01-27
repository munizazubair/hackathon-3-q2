import { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@/sanity/sanity.client";
import nodemailer from "nodemailer";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-seller-email@gmail.com",
    pass: "your-email-password",
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { questionId, answer } = req.body;

    if (!questionId || !answer) {
      return res.status(400).json({ error: "Question ID and Answer are required" });
    }

    try {
      // Update the question with the seller's answer
      await sanityClient.patch(questionId).set({ answer, status: "Answered" }).commit();

      // Send an email to the user with the answer
      const userEmail = "user-email@example.com"; // Get the user's email from the question document if stored

      await transporter.sendMail({
        from: "your-seller-email@gmail.com",
        to: userEmail,
        subject: "Your Question Has Been Answered",
        text: `Your question has been answered: \n\n ${answer}`,
      });

      res.status(200).json({ message: "Answer submitted successfully" });
    } catch (error) {
      console.error("Error submitting answer:", error);
      res.status(500).json({ error: "Failed to submit answer" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
