import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({ region: "us-east-1" });
const TOPIC_ARN = process.env.SNS_TOPIC_ARN;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 200, headers: CORS_HEADERS, body: "" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { firstName, lastName, email, message } = body;

    // Basic validation
    if (!firstName || !email || !message) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "First name, email, and message are required." }),
      };
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Invalid email address." }),
      };
    }

    const subject = `ExBS Inquiry: ${firstName} ${lastName || ""}`.trim();
    const text = [
      "NEW CONTACT FORM SUBMISSION",
      "==========================",
      "",
      `Name: ${firstName} ${lastName || ""}`.trim(),
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      "---",
      `Submitted: ${new Date().toISOString()}`,
    ].join("\n");

    await sns.send(
      new PublishCommand({
        TopicArn: TOPIC_ARN,
        Subject: subject,
        Message: text,
      })
    );

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Failed to send message. Please try again." }),
    };
  }
};
