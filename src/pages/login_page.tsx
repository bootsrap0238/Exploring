import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center bg-gray-100 min-h-screen">
            <div className="bg-green-800 shadow-md p-8 rounded-md w-full max-w-sm">
                <h2 className="mb-4 font-semi text-2xl text-center">
                    <span className="text-black">Nearby</span>
                    <span className="text-green-600">Assist</span>
                </h2>

                <div className="flex justify-center mb-4 w-full">
                    <button className="flex bg-green-500 hover:bg-green-700 focus:shadow-outline mr-2 px-4 py-2 rounded-md font-bold text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08"
                            />
                        </svg>
                        Admin
                    </button>
                    <button className="flex bg-green-500 hover:bg-green-700 focus:shadow-outline ml-2 px-4 py-2 rounded-md font-bold text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55c-.69-.98-1.1-2.17-1.1-3.45c0-3.31 2.69-6 6-6"
                            />
                            <path
                                fill="white"
                                d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12s-1.12-.51-1.12-1.12s.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17c.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"
                            />
                        </svg>
                        Assistant
                    </button>
                </div>
                {/* Login Form */}
                <form className="flex flex-col items-center">
                    {/* Email Input */}
                    <div className="mb-4 w-full">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="border-gray-300 mt-1 px-4 py-2 border focus:border-blue-500 rounded-md w-full focus:outline-none focus:ring-blue-500"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-6 w-full">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="border-gray-300 mt-1 px-4 py-2 border focus:border-blue-500 rounded-md w-full focus:outline-none focus:ring-blue-500"
                        />
                    </div>
                    {/* Login Button */}
                    <Link
                        to="/"
                        type="submit"
                        className="flex flex-col items-center bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md w-full font-semibold text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}
