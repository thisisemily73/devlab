import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <div className="fixed inset-0 -z-10 opacity-20
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          [background-size:48px_48px]" />

        {/* Glow orbs (ALIVE)
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"> */}

          {/* purple glow */}
          {/* <div className="absolute top-[-200px] left-1/2 w-[500px] h-[500px]
            bg-purple-500/10 blur-3xl rounded-full animate-pulse" /> */}

          {/* blue glow */}
          {/* <div className="absolute bottom-[-200px] right-1/2 w-[400px] h-[400px]
            bg-blue-500/10 blur-3xl rounded-full animate-pulse [animation-delay:2s]" /> */}

        {/* </div> */}

        {/* 🧭 SIDEBAR */}
        <Sidebar />

        {/* 📦 MAIN CONTENT */}
        <main className="min-h-screen flex justify-center">
          <div className="w-full max-w-3xl px-6 py-8
            animate-in fade-in slide-in-from-bottom-3 duration-700">

            {children}

          </div>
        </main>

      </body>
    </html>
  );
}