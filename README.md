<div style="max-width:480px;margin:0 auto;">
	<h1 align="center">Intro to Building Servers</h1>
	<div align="center">
		<strong>Part 1 in a series of workshops designed for frontend devs looking to dive into the other end of the stack</strong>
	</div>
</div>

---

In this workshop we will build a simple web server with routing and
authentication. To power this app, we'll start with raw, vanilla Node.js, then
refactor to use Express as we add complexity.

## Objectives

By the end of this workshop, you should have a solid understanding of:

- the HTTP(S) protocol
- routing
- handling and authenticating of requests
- caching with the `Cache-Control` header
- basics of HTTP security
- how server-side rendering works in popular frameworks like React and Vue

## Agenda

- **Exercise 01:** Serving HTML with Node.js
  - Discuss the HTTP protocol and the request/response model
  - Create a simple Node server with no dependencies as a basis for deploying
    our new website
  - Serve a simple website with static assets
  - Handle common errors (404! 500!)
- **Exercise 02:** Handling requests for dynamic content
  - Migrate to Express for a simpler interface
  - Implement Express middleware for common server tasks
  - Set up a user profile page with tailored content
  - Introduce cookies 🍪
- **Exercise 03:** Authentication
  - Authenticate requests for protected routes
  - Redirect successful auth requests
  - Learn about sessions, cookies and auth tokens
  - Introduce cache control headers
- **Exercise 04:** Server-rendering a React app
  - Using React to server render our app
  - Hydrate the app on the client for interactivity

## Prerequisites

- Experience with HTML, JavaScript and git
- Understand how to use the terminal to execute basic commands
- Some prior exposure to Node.js is helpful but not necessary
- Some experience with React (or a similar front-end framework) is helpful but
  not necessary

## System Requirements

- git
- NodeJS 16+
- npm v8+

## Setup

Run the following commands in your terminal:

```sh
git clone https://github.com/fronttobackdev/intro-to-servers-workshop.git
cd front-to-back-workshop-01
npm run setup
```

## Exercises

All the exercise projects are in the `exercises` directory, and the the finished
version of the exercise is in `final`.

Each directory in the `final` and `exercises` directories is its own isolated
app. Each step through the directory iterates on the app build in the previous
exercise.

You can run each app from the root of the project by running the `dev` script,
followed by the exercise or final version of the app you want to run.

```sh
# runs the app in the first exercise directory
npm run dev exercise/01

# runs the app in the second final directory
npm run dev final/02
```

---

If you run into any problems setting up or running any of the exercises, please
[open an issue on GitHub](https://github.com/fronttobackdev/intro-to-servers-workshop/issues/new).
