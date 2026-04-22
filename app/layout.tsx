import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex">

        {/* SIDEBAR */}
        <aside className="w-56 border-r border-zinc-800 p-4 space-y-4">

          <Link href="/" className="hover:text-white">
            <h1 className="text-xl font-bold mb-6">DevLab</h1>
          </Link>

          <nav className="flex flex-col gap-3 text-sm">


            <Link href="/tools" className="hover:text-white text-zinc-400">
              🧰 Tools
            </Link>

            <Link href="/scripts" className="hover:text-white text-zinc-400">
              📜 Scripts
            </Link>

            <Link href="/ideas" className="hover:text-white text-zinc-400">
              🧠 Ideas
            </Link>

          </nav>

        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </body>
    </html>
  );
}