export default function AdminDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white shadow rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Staff Management</h2>
                    <p>Manage staff accounts and assignments</p>
                </div>
                <div className="p-6 bg-white shadow rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Inventory Stats</h2>
                    <p>Real-time overview of materials</p>
                </div>
            </div>
        </div>
    )
}
