import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Footer from "./components/Footer"
import Button from "./components/Button"
import List from "./components/List"
import Add from "./components/Add"
import CredentialsSignInPage from "./components/Login"
import ResponsiveAppBar from "./components/AppBar"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login2"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AutoFixHigh } from '@mui/icons-material';


const API_URL = "https://deploy-back-bceo.onrender.com/";
function App() {
    const [items, setItems] = useState([
        { id: 1, name: "item1", price: 10 },
        { id: 2, name: "item2", price: 20 },
        { id: 3, name: "item3", price: 30 }
    ]);

    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    const nombre = "andre";
    const elemento = <h2> hola, {nombre}</h2>;

    const sum = () => {
        setCount(count + 1);
        console.log(count);
    };

    const add = async (item) => {
        const token = localStorage.getItem("token");
        const result = await fetch(`${API_URL}/items`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(item),
        });
        const data = await result.json();
        setItems(data);
    };

    const getItems = async () => {
        const token = localStorage.getItem("token");
        const result = await fetch(`${API_URL}/items`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json"
            },
        });
        const data = await result.json();
        setItems(data);
    }


    const del = async (id) => {
        const token = localStorage.getItem("token");
        const result = await fetch(`${API_URL}/items/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        setItems(items.filter((item) => item.id !== id));
    };

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

    useEffect(() => {
        if (isLogin) {
            getItems();
        }
    }, [isLogin]);



    return (
        <div>
            <BrowserRouter>
                {isLogin && <ResponsiveAppBar logout={logout} />}
                <Routes>
                    <Route path="/" element={<Login login={login} />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/add" element={<Add add={add} />} />
                    <Route path="/items" element={<List items={items} ondelete={del} />} />
                </Routes>
                <Footer />
            </BrowserRouter>

            {count}
            <Button />
            {/*<Button name="suma" click={sum} />
            <Button name="mensaje" click={() => alert("hola")} />
            */}
            <Footer />
        </div>
    );
}

export default App;
