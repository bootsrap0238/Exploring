import React, { useState } from "react";

interface Account {
    id: number;
    username: string;
    email: string;
    role: string;
    status: string;
}

interface CreateAccountFormProps {
    onCreateAccount: (username: string, email: string, role: string) => void;
    onCancel: () => void;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
    onCreateAccount,
    onCancel,
}) => {
    const [newAccountName, setNewAccountName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const handleCreateAccount = () => {
        onCreateAccount(newAccountName, email, role);
        setNewAccountName("");
        setEmail("");
        setRole("");
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
            <div className="bg-white shadow-md p-8 rounded-md">
                <h2 className="mb-4 font-semibold text-lg">
                    Create New Account
                </h2>
                <div className="flex flex-col mb-4">
                    <label className="mb-1">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className="px-3 py-2 border rounded-md outline-none"
                        value={newAccountName}
                        onChange={(e) => setNewAccountName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="px-3 py-2 border rounded-md outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-1">Role</label>
                    <select
                        className="px-3 py-2 border rounded-md outline-none"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select role</option>
                        <option value="Validator">Validator</option>
                        <option value="Complaint Handler">
                            Complaint Handler
                        </option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-green-500 hover:bg-green-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none mr-2"
                        onClick={handleCreateAccount}
                    >
                        Create
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function AssistantPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [accounts, setAccounts] = useState<Account[]>([]);

    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const handleSearchChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSearchTerm(e.target.value);
    };

    const handleCreateAccount = (
        username: string,
        email: string,
        role: string
    ) => {
        const confirmed = window.confirm(
            "Are you sure you want to create this account?"
        );
        if (confirmed) {
            const newAccount: Account = {
                id: accounts.length + 1,
                username,
                email,
                role,
                status: "Active",
            };
            setAccounts([...accounts, newAccount]);
            setIsCreatingAccount(false);
        }
    };

    const handleEdit = (id: number) => {
        // Find the account to edit
        const accountToEdit = accounts.find((account) => account.id === id);
        if (accountToEdit) {
            // Now you can implement the logic to edit the account
            // For example, you can show a modal with a form to edit account details
            console.log("Editing account:", accountToEdit);
        } else {
            console.error("Account not found");
        }
    };

    const handleDelete = (id: number) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this account?"
        );
        if (confirmed) {
            console.log("Deleting account with ID:", id);
            const updatedAccounts = accounts.filter(
                (account) => account.id !== id
            );
            setAccounts(updatedAccounts);
        }
    };
    const handleToggleStatus = (id: number) => {
        // Find the account with the given id
        const updatedAccounts = accounts.map((account) => {
            if (account.id === id) {
                // Toggle the status
                return {
                    ...account,
                    status: account.status === "Enable" ? "Disable" : "Enable",
                };
            }
            return account;
        });
        // Update the accounts state with the modified account
        setAccounts(updatedAccounts);
    };

    return (
        <div className="flex-1 p-4">
            <header className="flex justify-between items-center bg-gray-500 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Assistant Page</h1>
                <button
                    className="bg-green-500 hover:bg-green-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                    onClick={() => setIsCreatingAccount(true)}
                >
                    Create Account
                </button>
            </header>
            {isCreatingAccount && (
                <CreateAccountForm
                    onCreateAccount={handleCreateAccount}
                    onCancel={() => setIsCreatingAccount(false)}
                />
            )}
            {/* Account Created Header */}
            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mb-2 p-4 border rounded-md">
                <h2 className="mb-2 font-semibold text-lg">Accounts Created</h2>
                <div className="flex justify-end mb-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-2 border rounded-md outline-none"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 ml-2 px-4 py-2 rounded-md text-white">
                        Search
                    </button>
                </div>
            </div>
            {/* Account List */}
            <div className="border-gray-200 bg-gray-100 shadow-md mb-4 p-6 border rounded-md overflow-x-auto">
                {/* Account table goes here */}
                <table className="rounded-lg w-full">
                    <thead>
                        <tr className="border-gray-800 bg-gray-600 border">
                            <th className="px-6 py-3 font-medium text-left text-white">
                                No.
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Username
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Email
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Role
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Action
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account, index) => (
                            <tr
                                key={account.id}
                                className="border-gray-800 border"
                            >
                                <td className="px-6">{index + 1}</td>
                                <td className="px-6">{account.username}</td>
                                <td className="px-6">{account.email}</td>
                                <td className="px-6">{account.role}</td>
                                <td className="py-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 focus:shadow-outline px-2 py-1 rounded font-bold text-white focus:outline-none"
                                        onClick={() => handleEdit(account.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 focus:shadow-outline ml-2 px-2 py-1 rounded font-bold text-white focus:outline-none"
                                        onClick={() => handleDelete(account.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                {/* Toggle Status Button */}
                                <td className="flex justify-between items-center py-2">
                                    <span>
                                        {account.status === "Enable"
                                            ? "Enabled"
                                            : "Disabled"}
                                        <button
                                            className={`w-10 h-5 relative rounded-full border-2 transition-colors focus:outline-none ${
                                                account.status === "Enable"
                                                    ? "bg-green-500"
                                                    : "bg-gray-500"
                                            }`}
                                            onClick={() =>
                                                handleToggleStatus(account.id)
                                            }
                                        >
                                            <span className="sr-only">
                                                Toggle
                                            </span>
                                            <span
                                                className={`block absolute inset-0 rounded-full transition-transform bg-white shadow-md ${
                                                    account.status === "Enable"
                                                        ? "translate-x-3"
                                                        : "translate-x-0"
                                                }`}
                                            ></span>
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
