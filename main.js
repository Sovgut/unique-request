const express = require("express")

const uniqueKeys = []

express()
  .get("/", (request, response) => {
    const ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress
    const userAgent = request.headers["user-agent"]
    const uniqueKey = Buffer.from(`${ip}-${userAgent}`).toString("base64")

    if (uniqueKeys.includes(uniqueKey)) {
      return response.send(`<h3>I know you</h3><p>Your name is: ${uniqueKey}</p>`)
    }

    uniqueKeys.push(uniqueKey)
    return response.send(`<h3>Hello, are you new?</h3><p>I gave you a new name: ${uniqueKey}</p>`)
  })
  .listen(process.env.PORT, console.log(`Server started on ${process.env.PORT}`))
