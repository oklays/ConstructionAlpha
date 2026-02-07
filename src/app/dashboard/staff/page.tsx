export default function StaffDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded-lg">
                    <h2 className="text-xl font-bold mb-2">My Reports</h2>
                    <p>Submit daily site reports</p>
                </div>
                <div className="p-6 bg-white shadow rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Purchase Orders</h2>
                    <p>Request materials</p>
                </div>
            </div>
        </div>
    )
}
