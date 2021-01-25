const express = require("express")

express()
  .get("/", (request, response) => {
    const ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress
    console.log(ip)

    response.send(ip)
  })
  .listen(process.env.PORT, console.log(`Server started on ${process.env.PORT}`))
