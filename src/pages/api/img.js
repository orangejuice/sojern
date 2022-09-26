import {NextResponse, userAgent} from 'next/server'
import prisma from "../../lib/db";

export default async function handler(req) {
  const url = req.nextUrl.clone()
  const {device} = userAgent(req)

  const record = {
    ip: req.ip ? req.ip : '',
    url: url.href,
    device: device.type ? device.type : '',
    time: new Date()
  }
  // console.log(req)
  // console.log(record)

  try {
    await prisma.$connect()
    await prisma.records.create({data: {...record}})
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }

  url.pathname = '/pixel.png'
  return NextResponse.redirect(url)
}

export const config = {
  runtime: 'experimental-edge',
}
