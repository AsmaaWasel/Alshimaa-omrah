import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Building2, Bus, LogOut } from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) {
    redirect('/sign-in')
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-muted/50">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2">
            <Link
              href="/admin/hotels"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Building2 className="w-5 h-5" />
              <span>Hotels</span>
            </Link>
            <Link
              href="/admin/buses"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Bus className="w-5 h-5" />
              <span>Buses</span>
            </Link>
          </nav>

          {/* User Info */}
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-accent/50">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {session.user.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {session.user.email}
                </p>
              </div>
            </div>
            <form
              action={async () => {
                'use server'
                await auth.api.signOut({ headers: await headers() })
                redirect('/sign-in')
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
