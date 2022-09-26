import {NextResponse, userAgent} from 'next/server'
import {PrismaClient} from "@prisma/client/edge";
// import {prisma} from "../../lib/db";

// import dbClient from "../../lib/db"

// export const config = {
//   runtime: 'experimental-edge',
// }
//
// export default async function handler(req) {
//   return new Response(
//     JSON.stringify({
//       name: 'Jim Halpert',
//     }),
//     {
//       status: 200,
//       headers: {
//         'content-type': 'application/json',
//       },
//     }
//   )
// }

export default async function handler(req) {
  const url = req.nextUrl.clone()
  const {device} = userAgent(req)

  const record = {
    ip: req.ip ? req.ip : '',
    url: url.href,
    device: device.type ? device.type : '',
    time: new Date().toISOString()
  }
  // console.log(req)
  // console.log(record)

  try {
    const prisma = new PrismaClient()

    // (async () => {
    await prisma.$connect()
    await prisma.records.create({data: {...record}})
    // }).then(async () => {
    await prisma.$disconnect()
    // }).catch(async (e) => {
    //   console.error(e)
    //   await prisma.$disconnect()
    // })
  } catch (e) {
    console.error(e)
  }

  // const client = await dbClient
  // const db = client.db("pixel-tracking")
  // let myPost = await db.collection("record").insertOne(record)

  url.pathname = '/pixel.png'
  return NextResponse.redirect(url)

  // switch (req.method) {
  //   case "POST":
  //     let bodyObject = JSON.parse(req.)
  //     let myPost = await db.collection("logs").insertOne(bodyObject)
  //     res.json(myPost.ops[0])
  //     break
  //   case "GET":
  //     const allPosts = await db.collection("allPosts").find({}).toArray()
  //     res.json({ status: 200, data: allPosts })
  //     break
  // }
  // res.redirect('/pixel.png')
}

export const config = {
  runtime: 'experimental-edge',
}
