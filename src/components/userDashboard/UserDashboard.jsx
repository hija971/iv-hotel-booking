import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
import PasswordTab from "./PasswordTab";

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('profile')
    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileTab />;
            case 'changePassword':
                return <PasswordTab />;
            default:
                return null;
        }
    }
    return (
        <div>
            <div className="w-3/4 border rounded-lg shadow-lg">
                <div className="grid grid-cols-4">
                    <div className="col-span-1 flex flex-col">
                        <button
                            className={`px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setActiveTab('profile')}
                        >
                            My Profile
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${activeTab === 'changePassword' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setActiveTab('changePassword')}
                        >
                            Change Password
                        </button>
                        <button>Log Out</button>
                    </div>
                    <div className="col-span-3 h-96">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;