import { Resend } from "resend";

// const API_KEY = process.env.MAILCHIMP_API_KEY;
// const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// const SERVER = "us13";
const error_message = `There was a problem, please try again later.`;
const success_message = `🎉 You have been added to the wait list!`;

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { email } = req.body;

  if (req.method != "POST") {
    res.status(404).json({ error: "Invalid request method" });
  }
  try {
    resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: "80cca2bb-c6a1-4fa4-bcfd-1bf6593ccb0b",
    });
    res.status(200).json({ message: success_message });
  } catch (error) {
    return res.status(500).json({ message: error_message });
  }

  // const customURL = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // const response = await fetch(customURL, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `apikey ${API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email_address: email,
  //     status: "subscribed",
  //   }),
  // });

  // if (response.status == 200) {
  //   return res.status(200).json({ message: success_message });
  // } else if (response.status == 400) {
  //   return res.status(200).json({ message: "Email already in Waitlist!" });
  // } else {
  //   return res.status(500).json({ message: error_message });
  // }
}
