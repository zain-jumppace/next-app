// app/test-db/page.tsx
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export default async function TestDBPage() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Check connection state
    const state = mongoose.connection.readyState;
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting

    return (
      <div style={{ padding: "2rem" }}>
        <h1>MongoDB Test</h1>
        {state === 1 ? (
          <p style={{ color: "green" }}>✅ Connected to MongoDB successfully!</p>
        ) : (
          <p style={{ color: "red" }}>❌ Not connected to MongoDB</p>
        )}
        <p>Connection state: {state}</p>
      </div>
    );
  } catch (error: any) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>MongoDB Test</h1>
        <p style={{ color: "red" }}>❌ Failed to connect to MongoDB</p>
        <pre>{error.message}</pre>
      </div>
    );
  }
}