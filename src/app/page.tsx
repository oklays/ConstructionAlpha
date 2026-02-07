import Link from "next/link"
import { ArrowRight, Hammer, HardHat, Truck } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold flex items-center gap-2 text-primary">
          <HardHat className="h-8 w-8" />
          <span>Octopush Contractors</span>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login" className="px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Login
          </Link>
          <Link href="/auth/register" className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction Site"
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Constructing Excellence,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Beyond Expectations.</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-200 mb-10">
          Streamline your construction supply chain with real-time inventory tracking, purchase order management, and comprehensive reporting.
        </p>
        <div className="flex gap-4">
          <Link href="/auth/register" className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-7xl px-4 py-20 grid md:grid-cols-3 gap-8">
        <Link href="/dashboard" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Truck className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">Supply Chain Tracking</h3>
          <p className="text-slate-600">Track POs and deliveries in real-time. Never lose sight of your materials again.</p>
        </Link>
        <Link href="/dashboard" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Hammer className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">Equipment Management</h3>
          <p className="text-slate-600">Monitor heavy equipment status, maintenance schedules, and location.</p>
        </Link>
        <Link href="/dashboard" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <HardHat className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">Site Reporting</h3>
          <p className="text-slate-600">Daily progress reports, weather updates, and workforce analytics from the field.</p>
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-slate-900 text-slate-400 text-center">
        <p>© 2024 Octopush Contractors. All rights reserved.</p>
      </footer>
    </main>
  )
}
