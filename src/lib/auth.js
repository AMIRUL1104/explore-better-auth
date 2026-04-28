import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});

// steps to intrigate better-auth with next.js
// 1. install better-auth : npm install better-auth
// 2. set up environment variable in .env file . (.env) file must be in the root directory of the project
//3. get environment variable from better-auth documentation and add it to .env file
// 4. create a file name auth.js in the lib directory and add the above code snippet to it
// 5. then go to mongodb page in better-auth documentation
// 6 . install mongodb in the project : npm install mongodb
// 7 . install mongodb adapter for better-auth : npm install @better-auth/mongo-adapter
// 8. then import the mongodb adapter and mongodb client in the auth.js file and create a client and database instance and pass it to the betterAuth function as shown in the above code snippet
//
