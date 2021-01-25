const http = require("http")
const uniqueKeys = []

http
  .createServer((request, response) => {
    const ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress
    const userAgent = request.headers["user-agent"]
    const uniqueKey = Buffer.from(`${ip}-${userAgent}`).toString("base64")

    if (uniqueKeys.includes(uniqueKey)) {
      return response.write(`<h3>I know you</h3><p>Your name is: ${uniqueKey}</p>`) && response.end()
    }

    uniqueKeys.push(uniqueKey)
    return response.write(`<h3>Hello, are you new?</h3><p>I gave you a new name: ${uniqueKey}</p>`) && response.end()
  })
  .listen(process.env.PORT || 3030, () => console.log("Server was started"))
