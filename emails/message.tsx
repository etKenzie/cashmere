import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MessageEmailProps {
  userFirstname: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MessageEmail = ({
  userFirstname,
  email,
  message,
}: // link,
MessageEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Diagnosis Tool to keep you at ease</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://i.imgur.com/YIde30T.png`}
          width="50"
          height="50"
          alt="CASHMEREhealth"
          style={logo}
        />

        <Text style={paragraph}>
          Message from {userFirstname} at {email},
        </Text>
        <Text style={paragraph}>{message}</Text>

        <Hr style={hr} />
        <Text style={footer}>
          John Doe, 123 Main St, New York, NY, 10001, United States
        </Text>
      </Container>
    </Body>
  </Html>
);

MessageEmail.PreviewProps = {
  userFirstname: "Alan",
} as MessageEmailProps;

export default MessageEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#BFDBF7",
  borderRadius: "3px",
  color: "#000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
