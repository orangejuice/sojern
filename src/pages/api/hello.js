import {NextResponse} from 'next/server';

export default function handle(req) {
  return NextResponse.json({
    edge: true,
  });
};

export const config = {
  runtime: 'experimental-edge',
};