import "./App.css";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function App({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="secondary">Click me</Button>
      </div>
    </>
  );
}

export default App;
