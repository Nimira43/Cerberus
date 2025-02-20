import express from 'express'

export const startServer = () => {
  const httpServer = express()
  const port = process.env.PORT

  try {
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (err) {
    throw new Error(err)
  }
}