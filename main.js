const http = require("http")
const uniqueKeys = []

http
  .createServer((request, response) => {
    const ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress
    const userAgent = request.headers["user-agent"]
    const uniqueKey = Buffer.from(`${ip}-${userAgent}`).toString("base64")

    if (uniqueKeys.includes(uniqueKey)) {
      return response.write(`I know you\nYour name is: ${uniqueKey}`) && response.end()
    }

    uniqueKeys.push(uniqueKey)
    return response.write(`Hello, are you new?\nI gave you a new name: ${uniqueKey}`) && response.end()
  })
  .listen(process.env.PORT || 3030, () => console.log("Server was started"))
