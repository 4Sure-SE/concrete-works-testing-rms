import {
    FaSearch,
    FaCogs,
    FaChartLine,
    FaBuilding,
    FaCube,
    FaVial,
    FaUser,
} from "react-icons/fa";

export default async function ProjectListPage() {
    return (
        <div className="font-inter min-h-screen bg-gray-50">
            {/* Header */}
            <header className="mb-6 flex items-center justify-between bg-gray-100 px-6 py-4 shadow-md">
                {/* Header Title */}
                <div>
                    <h1 className="text-xl font-bold">Project Overview</h1>
                </div>
                {/* Navigation */}
                <nav className="flex space-x-12">
                    <a
                        href="#"
                        className="flex items-center space-x-2 text-gray-700 hover:underline"
                    >
                        <FaChartLine />
                        <span>Dashboard</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-2 text-gray-700 hover:underline"
                    >
                        <FaBuilding />
                        <span>Projects</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-2 text-gray-700 hover:underline"
                    >
                        <FaCube />
                        <span>Materials</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-2 text-gray-700 hover:underline"
                    >
                        <FaVial />
                        <span>Tests</span>
                    </a>
                </nav>
                {/* Admin Info */}
                <div className="flex items-center space-x-4">
                    <FaUser className="text-gray-700" />
                    <span className="text-gray-700">Admin</span>
                    <FaCogs className="text-lg text-gray-700" />
                </div>
            </header>

            {/* Search Section */}
            <div className="mb-8 flex items-center justify-between px-6">
                {/* Search Input */}
                <div className="relative max-w-md flex-1">
                    <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-8 text-sm font-light"
                    />
                </div>
                {/* New Project Button */}
                <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
                    New Project
                </button>
            </div>

            <div className="flex items-start space-x-6 px-6">
                {/* Sidebar */}
                <aside className="w-1/4 space-y-6 border-r border-gray-200 bg-white p-4">
                    {/* Projects Section */}
                    <div className="rounded bg-gray-100 p-4 shadow">
                        <h2 className="mb-4 font-bold text-gray-700">
                            Projects
                        </h2>
                        <ul className="space-y-2">
                            <li>Highway Bridge A1</li>
                            <li>Commercial Building B2</li>
                            <li>Residential Complex C3</li>
                        </ul>
                    </div>

                    {/* Filters Section */}
                    <div className="rounded bg-gray-100 p-4 shadow">
                        <h2 className="mb-4 font-bold text-gray-700">
                            Filters
                        </h2>
                        <div className="mb-4">
                            <label className="mb-1 block text-sm text-gray-600">
                                From
                            </label>
                            <input
                                type="date"
                                className="w-full rounded border border-gray-300 px-3 py-2 text-sm font-light"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block text-sm text-gray-600">
                                To
                            </label>
                            <input
                                type="date"
                                className="w-full rounded border border-gray-300 px-3 py-2 text-sm font-light"
                            />
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    <section className="rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-6 text-xl font-bold text-gray-700">
                            Project Lists
                        </h2>
                        {/* Project 1 */}
                        <div className="mb-6 rounded-lg bg-gray-50 p-4 shadow">
                            <span className="text-lg font-bold text-gray-800">
                                Highway Bridge A1
                            </span>
                            <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <p>Progress</p>
                                <p>75%</p>
                            </div>
                            <div className="mt-2 h-2 w-full rounded bg-gray-200">
                                <div
                                    className="h-2 rounded bg-blue-300"
                                    style={{ width: "75%" }}
                                ></div>
                            </div>
                            <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <span>Total Tests: 20</span>
                                <span>Pending: 6</span>
                                <span>Completed: 14</span>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="mb-6 rounded-lg bg-gray-50 p-4 shadow">
                            <span className="text-lg font-bold text-gray-800">
                                Commercial Building B2
                            </span>
                            <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <p>Progress</p>
                                <p>30%</p>
                            </div>
                            <div className="mt-2 h-2 w-full rounded bg-gray-200">
                                <div
                                    className="h-2 rounded bg-blue-300"
                                    style={{ width: "30%" }}
                                ></div>
                            </div>
                            <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <span>Total Tests: 36</span>
                                <span>Pending: 24</span>
                                <span>Completed: 12</span>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="rounded-lg bg-gray-50 p-4 shadow">
                            <span className="text-lg font-bold text-gray-800">
                                Residential Complex C3
                            </span>
                            <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <p>Progress</p>
                                <p>90%</p>
                            </div>
                            <div className="mt-2 h-2 w-full rounded bg-gray-200">
                                <div
                                    className="h-2 rounded bg-blue-300"
                                    style={{ width: "90%" }}
                                ></div>
                            </div>
                            <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <span>Total Tests: 60</span>
                                <span>Pending: 6</span>
                                <span>Completed: 54</span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
