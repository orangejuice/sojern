import {PrismaClient} from '@prisma/client/edge'

// Avoid instantiating too many instances of Prisma in development
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#problem
let prisma

const opts = {
  log: ['error', 'info', 'query', 'warn']
}

if (process.env.NODE_ENV === 'production')
  prisma = new PrismaClient(opts)
else {
  if (!global.prisma) global.prisma = new PrismaClient(opts)
  prisma = global.prisma
}

export default prisma


// import {MongoClient} from 'mongodb'
//
// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid environment variable: "MONGODB_URI"')
// }
//
// const uri = process.env.MONGODB_URI
// const options = {}
//
// let dbClient = new MongoClient(uri, options).connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
// export default dbClient

// import { PrismaClient } from '@prisma/client'

// global {
// allow global `var` declarations
// eslint-disable-next-line no-var
// let prisma

// export let prisma = global.prisma ||
//   new PrismaClient({
//     log: ['query'],
//   })
//
// if (process.env.NODE_ENV !== 'production') global.prisma = prisma


// import {PrismaClient} from "@prisma/client";
//
// const prisma = new PrismaClient()

// (async () => {
// await prisma.$connect()
// await prisma.record.create({
//   data: {
//
//     '_id'
//     6330d183d164d78393edcea9
//     time
//     2022-09-25T00:00:00.000+00:00
// url:
// "https://sojern.orangejuice.vercel.app"
// viewport
// "mobile"
// ip
// "127.0.0.1"
//   }
// }).then(async () => {
//   await prisma.$disconnect()
// })
