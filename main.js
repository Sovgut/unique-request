const express = require("express")

express()
  .get("/", (request, response) => {
    console.log(request.ips)

    response.send(response.ips)
  })
  .listen(3030, console.log("Server started on 3030"))
