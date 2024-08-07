const API_KEY = process.env.CONVERTKIT_API_KEY;
const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const BASE_URL = "https://api.convertkit.com/v3";

const email_required_message = "Email is required";
const error_message = "Error";
const success_message = "Success";

import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: email_required_message });
  }

  try {
    const url = [BASE_URL, "forms", FORM_ID, "subscribe"].join("/");
    const data = {
      api_key: API_KEY,
      email: email,
    };

    const response = await axios.post(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (response.data.success) {
      return NextResponse.json({ message: success_message });
    } else {
      return NextResponse.json({ message: error_message });
    }
  } catch (e) {
    return NextResponse.json({ message: error_message });
  }
}
