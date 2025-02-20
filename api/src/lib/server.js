import express from 'express'

export const startServer = () => {
  const httpServer = express()

  console.log(`Port from ${process.env.PORT}`)

  try {
    httpServer.listen(3000, () => {
      console.log(`Server running on Port 3000`)
    })
  } catch (err) {
    throw new Error(err)
  }
}