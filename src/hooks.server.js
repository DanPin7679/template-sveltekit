// @ts-nocheck
import { connectDB } from './lib/db/mongo';
//import { authorizeUser } from "./lib/db/users";

connectDB();

// export async function handle ({ event, resolve }) {
//   const userAuth = await authorizeUser('bid@hotmail.com', 'bid123')
//   event.locals.user = userAuth
//   return resolve(event)
// }
