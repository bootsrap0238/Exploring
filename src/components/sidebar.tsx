import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="border-gray-200 bg-green-500">
            <div className="p-4 text-center">
                <img
                    src="your-logo.png"
                    alt="Logo"
                    className="mx-auto mb-4 w-20"
                />
            </div>
            <div className="mt-4 p-4">
                <ul className="space-y-4">
                    <Link
                        to={"/content/dashboard"}
                        className="flex hover:bg-green-600 4 gap"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                            />
                        </svg>

                        <p className="px-4 py-2 text-white">Dashboard</p>
                    </Link>
                    <Link
                        className="flex gap-4 hover:bg-green-600"
                        to={"/content/complaints"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="white"
                                d="M9.5 1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1V7l1.8-1.5h2.2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM5 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2.5 5h-5A1.5 1.5 0 0 0 1 10.5c0 1.116.459 2.01 1.212 2.615C2.953 13.71 3.947 14 5 14c1.053 0 2.047-.29 2.788-.885C8.54 12.51 9 11.616 9 10.5A1.5 1.5 0 0 0 7.5 9"
                            />
                        </svg>

                        <p className="py-2 text-white">Complaints</p>
                    </Link>
                    <Link
                        className="flex hover:bg-green-600 4 gap"
                        to={"/content/application"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m7 8a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.193 4.193 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5c0-.17-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 12zm-7 2c-4.42 0-8 1.79-8 4v2h9.68a7 7 0 0 1-.68-3a7 7 0 0 1 .64-2.91c-.53-.06-1.08-.09-1.64-.09m8 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"
                            />
                        </svg>

                        <p className="px-4 py-2 text-white">
                            Vendor Application
                        </p>
                    </Link>

                    <Link
                        className="flex gap-4 hover:bg-green-600"
                        to={"/content/restriction"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M15.18 10.94c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6c-.52 0-1 .12-1.44.32z"
                            />
                            <path
                                fill="white"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 13c-2.32 0-4.45.8-6.14 2.12A7.957 7.957 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 0 0 2.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15m6.31 1.9L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.54-1.69 4.9"
                            />
                        </svg>

                        <p className="py-2 text-white">Account Restriction</p>
                    </Link>
                    <Link
                        className="flex gap-4 hover:bg-green-600"
                        to={"/content/management"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 2048 2048"
                        >
                            <path
                                fill="white"
                                d="M1148 1152q-83-62-179-95t-201-33q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-56-35-100-82t-76-104t-47-119t-17-129q0-106 40-199t110-162T569 41T768 0q106 0 199 40t162 110t110 163t41 199q0 66-16 129t-48 119t-76 103t-101 83q60 23 113 54v152zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1664 768v768H1024v-768h256v-256h512v256zm-640 0h256v-128h-256zm512 384h-128v128h-128v-128h-256v128h-128v-128h-128v256h768zm0-256h-768v128h768z"
                            />
                        </svg>

                        <p className="py-2 text-white">Account Management</p>
                    </Link>
                    <Link
                        className="flex gap-4 hover:bg-green-600"
                        to={"/content/assistant"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"
                            />
                        </svg>

                        <p className="py-2 text-white">
                            Create Assistant Account
                        </p>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
