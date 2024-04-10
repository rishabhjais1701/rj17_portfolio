import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  // Assume data processing or saving logic here
  
  try {
    // Placeholder for data processing or saving logic

    // Example response for demonstration purposes
    const responseData = {
      status: "success",
      message: "Message received successfully",
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error processing data:", error);
    
    const errorResponse = {
      status: "error",
      message: "Failed to process the message",
      error: error.message,
    };

    return NextResponse.json(errorResponse);
  }
}
