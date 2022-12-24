import { games } from "../../lib/db/games.js";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async function({setHeaders, locals}) {
  console.log('locals', locals)
  const data = await games.find({}).toArray();

  setHeaders({
    'Cache-Control': 'max-age=3600'
  });

  return {
    users: JSON.stringify(data)
  }
}