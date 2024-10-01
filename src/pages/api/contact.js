import { Resend } from "resend";
import { render } from "@react-email/render";
import MessageEmail from "../../../emails/message";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory store for rate limiting
const rateLimit = new Map();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export default async function handler(req, res) {
  // Implement rate limiting
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  const clientRequests = rateLimit.get(clientIp) || [];
  const recentRequests = clientRequests.filter(
    (timestamp) => timestamp > windowStart
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      message: "Too many requests, please try again later.",
    });
  }

  recentRequests.push(now);
  rateLimit.set(clientIp, recentRequests);

  // Existing code
  const { name, email, message } = req.body;
  const html = await render(
    MessageEmail({ userFirstname: name, email: email, message: message })
  );

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email], // Replace with your email
      subject: "Contact Email Submission",
      html: html,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
