"use client";

import { createContext, useContext, useState } from "react";
import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { PortalHeader } from "@/components/portal/portal-header";

const PortalMenuContext = createContext<{ openMenu: () => void }>({
  openMenu: () => {},
});

export function usePortalMenu() {
  return useContext(PortalMenuContext);
}

type PortalShellProps = {
  title: string;
  children: React.ReactNode;
};

export function PortalShell({ title, children }: PortalShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <PortalMenuContext.Provider value={{ openMenu: () => setMobileOpen(true) }}>
      <div className="flex min-h-screen bg-light-bg">
        <PortalSidebar
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PortalHeader
            title={title}
            onMenuClick={() => setMobileOpen(true)}
          />
          <main className="flex-1 overflow-y-auto p-5 lg:p-8">{children}</main>
        </div>
      </div>
    </PortalMenuContext.Provider>
  );
}
