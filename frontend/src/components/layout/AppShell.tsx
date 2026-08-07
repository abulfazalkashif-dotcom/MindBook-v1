import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader />

      <div className="flex min-h-0 flex-1">
        <AppSidebar />

        <main className="min-w-0 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}