'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Globe } from 'lucide-react';

interface Tenant {
  id: string;
  name: string;
  subdomain: string;
}

interface TenantSwitcherProps {
  currentTenant: Tenant;
  tenants: Tenant[];
}

export function TenantSwitcher({ currentTenant, tenants }: TenantSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const switchTenant = (subdomain: string) => {
    const currentDomain = window.location.hostname.split('.').slice(-2).join('.');
    const newUrl = `https://${subdomain}.${currentDomain}`;
    window.location.href = newUrl;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>{currentTenant.name}</span>
          <Badge variant="secondary" className="ml-2">
            {currentTenant.subdomain}
          </Badge>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {tenants.map((tenant) => (
          <DropdownMenuItem
            key={tenant.id}
            onClick={() => switchTenant(tenant.subdomain)}
            className="flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{tenant.name}</div>
              <div className="text-sm text-gray-500">
                {tenant.subdomain}.yourdomain.com
              </div>
            </div>
            {tenant.id === currentTenant.id && (
              <Badge variant="default" className="ml-2">
                Current
              </Badge>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}