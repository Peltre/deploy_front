import React, { useState } from 'react'

const useAuth = () => {
    const [token, setToken] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const login = async (user) => {
        const result = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        });

        if (!result.ok) {
            console.log("Login failed");
            return false;
        }

        const data = await result.json();

        localStorage.setItem("token", data.token);
        setIsLogin(data.isLogin);
        return data.isLogin;
    }

    const register = async (user) => {
        const result = await fetch(`${API_URL}/create/`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        });

        if (!result.ok) {
            console.log("error registering user");
            return false;
        };

        const data = await result.json();
        console.log(data);
        return true;
    }

    
    const logout = () => {
        setIsLogin(false);
    }

    return { isLogin, login, register, logout }
}

export default useAuth
