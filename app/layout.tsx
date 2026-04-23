import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ToastProvider } from "@/components/Toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-black text-white min-h-screen overflow-x-hidden relative">

        {/* BACKGROUND LAYERS */}

        {/* Base gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Grid overlay */}
        <div
          className="
            fixed inset-0 -z-10 opacity-20
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* APP WRAPPER (ToastProvider must wrap EVERYTHING that uses useToast) */}
        <ToastProvider>

          {/* 🧭 SIDEBAR */}
          <Sidebar />

          {/* 📦 MAIN CONTENT */}
          <main className="min-h-screen flex justify-center">
            <div
              className="
                w-full max-w-3xl px-6 py-8
                animate-in fade-in slide-in-from-bottom-3 duration-700
              "
            >
              {children}
            </div>
          </main>

        </ToastProvider>

      </body>
    </html>
  );
}