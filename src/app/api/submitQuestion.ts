import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import sanityClient from "@/sanity/sanity.client";

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this to any service you're using
  auth: {
    user: process.env.GMAIL_USER, // Gmail address (set in .env)
    pass: process.env.GMAIL_PASS, // App password (set in .env)
  },
});
console.log(process.env.GMAIL_USER);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { question, email } = req.body;

    if (!question || !email) {
      return res.status(400).json({ error: "Question and email are required" });
    }

    try {
      // Insert the question into Sanity
      await sanityClient.create({
        _type: "faqQuestion",
        question,
        email,
        status: "Pending",
      });

      // Send email to the seller
      await transporter.sendMail({
        from: process.env.GMAIL_USER, // sender address
        to: process.env.SELLER_EMAIL, // recipient address (seller)
        subject: "New Question Submitted",
        text: `A new question has been submitted by ${email}: ${question}`,
      });

      res.status(201).json({ message: "Question submitted successfully" });
    } catch (error) {
      console.error("Error submitting question:", error); // Log the error
      res.status(500).json({ error: "Failed to submit question" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
