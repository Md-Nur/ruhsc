import mongoose from "mongoose";

type ConnectionObjcect = {
  isConnected?: number;
};

const connection: ConnectionObjcect = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "ruhsc",
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
}

export default dbConnect;
