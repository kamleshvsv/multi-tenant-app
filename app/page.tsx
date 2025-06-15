import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Zap, Shield, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MultiTenant</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="#demo" className="text-gray-600 hover:text-gray-900">
                Demo
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Button variant="outline" className="ml-4">
                Sign In
              </Button>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Powered by Next.js & Vercel
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Wildcard Subdomain
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Multi-Tenancy
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build scalable multi-tenant applications with automatic subdomain routing. 
            Each tenant gets their own branded subdomain with isolated data and customization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Documentation
            </Button>
          </div>
          
          {/* Demo Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              href="https://tenant1.yourdomain.com" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
            >
              tenant1.yourdomain.com
            </Link>
            <Link 
              href="https://docs.yourdomain.com" 
              className="text-green-600 hover:text-green-800 underline"
              target="_blank"
            >
              docs.yourdomain.com
            </Link>
            <Link 
              href="https://blog.yourdomain.com" 
              className="text-purple-600 hover:text-purple-800 underline"
              target="_blank"
            >
              blog.yourdomain.com
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Multi-Tenant Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and scale multi-tenant applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Automatic Subdomain Routing</CardTitle>
                <CardDescription>
                  Seamlessly route traffic based on subdomains with built-in middleware
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Edge-optimized with Vercel for sub-100ms response times globally
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Tenant Isolation</CardTitle>
                <CardDescription>
                  Complete data and configuration isolation between tenants
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Custom Branding</CardTitle>
                <CardDescription>
                  Each tenant can customize themes, logos, and branding
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>SSL Certificates</CardTitle>
                <CardDescription>
                  Automatic SSL certificate generation for all subdomains
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  Built to handle thousands of tenants without performance degradation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Implementation
            </h2>
            <p className="text-xl text-gray-600">
              Get started with just a few lines of code
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">middleware.ts</span>
              </div>
              <pre>{`export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = getSubdomain(hostname);
  
  if (subdomain && subdomain !== 'www') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-tenant', subdomain);
    
    url.pathname = \`/tenant\${url.pathname}\`;
    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders }
    });
  }
  
  return NextResponse.next();
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6" />
                <span className="text-xl font-bold">MultiTenant</span>
              </div>
              <p className="text-gray-400">
                Build scalable multi-tenant applications with ease.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Features</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
                <li><Link href="#" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MultiTenant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}