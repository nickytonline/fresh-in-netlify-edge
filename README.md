# 🍋 Fresh web framework running in a Netlify Edge Function

This is a proof of concept (POC) for integrating Netlify's Edge offering as a deployment target for the [Fresh web framework](https://fresh.deno.dev/). See [Create an Edge Functions integration](https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/create-integration/) for more information on getting a web framework up and running on Netlify's Edge offering.

Currently the POC only works in an Edge function locally. I'm currently investigating an IO error when it's deployed.

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

Debug the project:

```
deno task debug
```

Run locally in a Netlify Edge Function

```
ntl build
ntl dev
```

Navigate to http://localhost:8000, not http://localhost:8888 which ntl dev defaults to.

Visit some routes:

- http://localhost:8000, the main page with a counter example
- http://localhost:8000/{your-name-without-spaces}, loads a greeting
- http://localhost:8000/api/joke, loads a random joke.
