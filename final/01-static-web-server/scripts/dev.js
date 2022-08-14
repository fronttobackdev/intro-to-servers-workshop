import nodemon from "nodemon";

let ignoreExit = false;

nodemon({
	script: `server/index.js`,
	ext: "js,mjs,cjs,html,css",
})
	.on("log", ({ colour }) => console.log(colour))
	.on("restart", () => void (ignoreExit = true))
	.on("exit", () => {
		if (ignoreExit) {
			ignoreExit = false;
			return;
		}
		process.exit();
	});
