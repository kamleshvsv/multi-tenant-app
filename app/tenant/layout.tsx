import { getCurrentTenant } from '@/lib/tenant';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const tenant = await getCurrentTenant();
  
  if (!tenant) {
    return {
      title: 'Tenant Not Found',
      description: 'The requested tenant could not be found.',
    };
  }

  return {
    title: tenant.settings.title,
    description: tenant.settings.description,
    openGraph: {
      title: tenant.settings.title,
      description: tenant.settings.description,
      siteName: tenant.name,
    },
  };
}

export default async function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tenant = await getCurrentTenant();
  
  if (!tenant) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        :root {
          --tenant-primary: ${tenant.theme.primary};
          --tenant-secondary: ${tenant.theme.secondary};
          --tenant-accent: ${tenant.theme.accent};
        }
      `}</style>
      {children}
    </div>
  );
}