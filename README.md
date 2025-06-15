# Wildcard Subdomain Multi-Tenancy with Next.js and Vercel

This project demonstrates how to implement wildcard subdomain routing for multi-tenant applications using Next.js and Vercel.

## Features

- 🌐 **Wildcard Subdomain Routing**: Automatic routing based on subdomains
- 🏢 **Multi-Tenant Architecture**: Complete tenant isolation with custom branding
- ⚡ **Edge-Optimized**: Built for Vercel Edge Functions for global performance
- 🎨 **Custom Theming**: Each tenant can have their own colors and branding
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔒 **SSL Support**: Automatic SSL certificates for all subdomains

## How It Works

The system uses Next.js middleware to detect subdomains and route requests to tenant-specific pages:

1. **Middleware Detection**: `middleware.ts` examines the `host` header to extract the subdomain
2. **Tenant Routing**: Requests are rewritten to `/tenant/*` routes with tenant context
3. **Dynamic Content**: Each tenant gets their own dashboard, settings, and branding
4. **Isolated Data**: Tenants are completely isolated from each other

## Setup Instructions

### 1. Domain Configuration

To enable wildcard subdomains, you need to configure your domain's DNS:

#### Option A: Use Vercel's Nameservers (Recommended)
1. Point your domain to Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

2. In your Vercel project settings:
   - Add your apex domain (e.g., `yourdomain.com`)
   - Add a wildcard domain: `*.yourdomain.com`

#### Option B: Manual DNS Configuration
1. Create a CNAME record: `*` → `cname.vercel-dns.com`
2. Add your domain in Vercel project settings

### 2. Vercel Deployment

1. **Deploy to Vercel**:
   ```bash
   npm run build
   vercel --prod
   ```

2. **Configure Domains**:
   - Go to your Vercel project settings
   - Add your apex domain (e.g., `acme.com`)
   - Add wildcard domain: `*.acme.com`

3. **SSL Certificates**:
   - Vercel automatically generates SSL certificates for all subdomains
   - No additional configuration needed

### 3. Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_DOMAIN=yourdomain.com
DATABASE_URL=your_database_url
```

### 4. Testing Locally

For local development with subdomains:

1. **Add entries to `/etc/hosts`**:
   ```
   127.0.0.1 localhost
   127.0.0.1 tenant1.localhost
   127.0.0.1 docs.localhost
   127.0.0.1 blog.localhost
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Access your tenants**:
   - Main site: `http://localhost:3000`
   - Tenant 1: `http://tenant1.localhost:3000`
   - Docs: `http://docs.localhost:3000`
   - Blog: `http://blog.localhost:3000`

## File Structure

```
├── middleware.ts              # Subdomain detection and routing
├── lib/tenant.ts             # Tenant management utilities
├── app/
│   ├── page.tsx              # Main landing page
│   ├── tenant/               # Tenant-specific routes
│   │   ├── layout.tsx        # Tenant layout with theming
│   │   ├── page.tsx          # Tenant home page
│   │   └── dashboard/        # Tenant dashboard
│   └── api/tenants/          # Tenant management API
└── components/
    └── tenant-switcher.tsx   # Tenant switching component
```

## Key Components

### Middleware (`middleware.ts`)
- Detects subdomains from the `host` header
- Rewrites requests to tenant-specific routes
- Adds tenant context via headers

### Tenant Management (`lib/tenant.ts`)
- Manages tenant data and configuration
- Provides utilities for tenant operations
- Handles tenant theming and branding

### Tenant Layout (`app/tenant/layout.tsx`)
- Applies tenant-specific theming
- Generates dynamic metadata
- Handles tenant-specific configurations

## Adding New Tenants

### Programmatically
```typescript
const newTenant = createTenant({
  name: 'New Company',
  subdomain: 'newcompany',
  theme: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
    accent: '#F59E0B'
  },
  settings: {
    title: 'New Company Dashboard',
    description: 'Welcome to New Company'
  }
});
```

### Via API
```bash
curl -X POST https://yourdomain.com/api/tenants \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Company",
    "subdomain": "newcompany",
    "theme": {
      "primary": "#3B82F6",
      "secondary": "#1E40AF",
      "accent": "#F59E0B"
    }
  }'
```

## Production Considerations

### Database Integration
Replace the mock tenant data with a real database:

```typescript
// lib/tenant.ts
export async function getCurrentTenant(): Promise<Tenant | null> {
  const headersList = headers();
  const subdomain = headersList.get('x-tenant');
  
  if (!subdomain) return null;
  
  // Replace with database query
  const tenant = await db.tenant.findUnique({
    where: { subdomain }
  });
  
  return tenant;
}
```

### Caching
Implement caching for tenant data:

```typescript
import { cache } from 'react';

export const getTenantBySubdomain = cache(async (subdomain: string) => {
  // Cache tenant data for performance
  return await db.tenant.findUnique({
    where: { subdomain }
  });
});
```

### Analytics
Track tenant-specific analytics:

```typescript
// Track page views per tenant
export function trackTenantPageView(tenantId: string, path: string) {
  // Your analytics implementation
}
```

## Example URLs

Once deployed, your tenants will be accessible at:

- **Main site**: `https://yourdomain.com`
- **Tenant 1**: `https://tenant1.yourdomain.com`
- **Documentation**: `https://docs.yourdomain.com`
- **Blog**: `https://blog.yourdomain.com`
- **Custom tenant**: `https://customname.yourdomain.com`

## Troubleshooting

### Common Issues

1. **Subdomain not working locally**:
   - Make sure you've added entries to `/etc/hosts`
   - Use `localhost` as the domain for local development

2. **SSL certificate issues**:
   - Ensure wildcard domain is properly configured in Vercel
   - Check that your DNS is pointing to Vercel's nameservers

3. **Middleware not detecting subdomains**:
   - Verify the `host` header is being set correctly
   - Check the middleware configuration in `next.config.js`

### Debug Mode

Enable debug logging in middleware:

```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  console.log('Hostname:', hostname);
  
  const subdomain = getSubdomain(hostname);
  console.log('Subdomain:', subdomain);
  
  // ... rest of middleware
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details