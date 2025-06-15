import { headers } from 'next/headers';

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  logo?: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  settings: {
    title: string;
    description: string;
    customDomain?: string;
  };
}

// Mock tenant data - In production, this would come from your database
const TENANTS: Record<string, Tenant> = {
  'tenant1': {
    id: 'tenant1',
    name: 'Acme Corp',
    subdomain: 'tenant1',
    theme: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      accent: '#F59E0B'
    },
    settings: {
      title: 'Acme Corp Dashboard',
      description: 'Welcome to Acme Corp\'s business portal'
    }
  },
  'docs': {
    id: 'docs',
    name: 'Documentation',
    subdomain: 'docs',
    theme: {
      primary: '#10B981',
      secondary: '#047857',
      accent: '#F59E0B'
    },
    settings: {
      title: 'Documentation Portal',
      description: 'Comprehensive documentation and guides'
    }
  },
  'blog': {
    id: 'blog',
    name: 'Company Blog',
    subdomain: 'blog',
    theme: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#F59E0B'
    },
    settings: {
      title: 'Company Blog',
      description: 'Latest news and updates from our team'
    }
  }
};

export async function getCurrentTenant(): Promise<Tenant | null> {
  const headersList = headers();
  const tenant = headersList.get('x-tenant');
  
  if (!tenant) {
    return null;
  }
  
  return TENANTS[tenant] || null;
}

export function getTenantBySubdomain(subdomain: string): Tenant | null {
  return TENANTS[subdomain] || null;
}

export function getAllTenants(): Tenant[] {
  return Object.values(TENANTS);
}

export function createTenant(tenant: Omit<Tenant, 'id'>): Tenant {
  const newTenant: Tenant = {
    ...tenant,
    id: tenant.subdomain
  };
  
  TENANTS[tenant.subdomain] = newTenant;
  return newTenant;
}