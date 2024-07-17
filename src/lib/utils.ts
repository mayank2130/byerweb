import mongoose from "mongoose"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const connection = {};

export const connectToDb = async () => {
  try {
     // @ts-ignore
    if(connection.isConnected) {
      return;
    }
     // @ts-ignore
    const db = await mongoose.connect(process.env.MONGODB_URL);
     // @ts-ignore
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
     // @ts-ignore
    throw new Error(error);
  }
};
