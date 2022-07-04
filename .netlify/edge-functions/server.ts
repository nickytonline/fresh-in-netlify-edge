/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import manifest from "../../fresh.gen.ts";

export default async function() {
  // try {
    console.log('yolo')
    await start(manifest);
  // } catch (error) {
  //   return new Response(JSON.stringify(error.message, null, 2), { status: 500 });
  // }
}

// export default () => {
//   return new Response(JSON.stringify(manifest, null, 2))
// }
