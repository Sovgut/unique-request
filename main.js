const express = require("express")

express()
  .get("/", (request, response) => {
    console.log(request.ip)

    response.send(response.ip)
  })
  .listen(process.env.PORT, console.log(`Server started on ${process.env.PORT}`))
