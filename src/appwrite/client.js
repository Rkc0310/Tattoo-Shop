import { Client, Databases, Storage, Account } from 'appwrite'

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

export const databases = new Databases(client)
export const storage = new Storage(client)
export const account = new Account(client)

// IDs from .env
export const APPWRITE_IDS = {
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appointmentsCollectionId: import.meta.env.VITE_APPWRITE_APPOINTMENTS_COLLECTION_ID,
  portfolioCollectionId: import.meta.env.VITE_APPWRITE_PORTFOLIO_COLLECTION_ID,
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
}