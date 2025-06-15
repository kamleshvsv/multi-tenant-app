import { NextRequest, NextResponse } from 'next/server';
import { getAllTenants, createTenant } from '@/lib/tenant';

export async function GET() {
  try {
    const tenants = getAllTenants();
    return NextResponse.json({ tenants });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tenants' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, subdomain, theme, settings } = body;

    if (!name || !subdomain) {
      return NextResponse.json(
        { error: 'Name and subdomain are required' },
        { status: 400 }
      );
    }

    const tenant = createTenant({
      name,
      subdomain,
      theme: theme || {
        primary: '#3B82F6',
        secondary: '#1E40AF',
        accent: '#F59E0B'
      },
      settings: settings || {
        title: `${name} Dashboard`,
        description: `Welcome to ${name}'s portal`
      }
    });

    return NextResponse.json({ tenant }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create tenant' },
      { status: 500 }
    );
  }
}