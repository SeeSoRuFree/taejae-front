import { NextResponse } from 'next/server'

const deployedAt = new Date().toISOString()

export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      service: 'frontend',
      deployedAt: deployedAt,
      uptime: Date.now() - new Date(deployedAt).getTime(),
    },
    { status: 200 }
  )
}
