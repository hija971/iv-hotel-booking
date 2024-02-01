import React, { useState } from 'react';

const PasswordTab = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert('Mật khẩu mới và xác nhận không khớp.');
            return;
        }

        // Gửi yêu cầu thay đổi mật khẩu
        console.log('Yêu cầu thay đổi mật khẩu:', oldPassword, newPassword);
    };

    return (
        <form>
            <table>
                <tr>
                    <td>
                        <label>Old Password</label>
                    </td>
                    <td>
                        <input
                            className="border"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </td>
                </tr>
                <div className="mb-2">
                    <label className="mr-1">Old Password</label>
                    <input
                        className="border rounded-md p-1"
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>New Password</label>
                    <input
                        className="border rounded-md p-1"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm New Password</label>
                    <input
                        className="border rounded-md p-1"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleChangePassword}>
                    Change Password
                </button>
            </table>
        </form>
    );
}

export default PasswordTab;