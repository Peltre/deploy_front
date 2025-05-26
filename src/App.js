import './App.css';
import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Button from "./components/Button"
import List from "./components/List"
import Add from "./components/Add"
import CredentialsSignInPage from "./components/Login"
import ResponsiveAppBar from "./components/AppBar"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login2"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemInfo from './components/ItemInfo';
import Button from './components/Button';
import useCount from './hooks/useCount';
import useItems from './hooks/useItems';
import useAuth from './hooks/useAuth';
import LifeCycle from './components/LifeCycle';


function App() {
    const [show, setShow] = useState(false);
    const { count, sum, resta } = useCount();
    const { isLogin, token, login, logout, register } = useAuth();
    const { items, getItems, addItems, delItems } = useItems(token);
    const nombre = "Pedro";
    const elemento = <h2> hola, {nombre}</h2>;

    useEffect(() => {
        if (isLogin) {
            getItems();
        }
    }, [isLogin, getItems]);


    return (
        <div>
            <BrowserRouter>
                {isLogin && <ResponsiveAppBar logout={logout} />}
                <Routes>
                    <Route path="/" element={<Login login={login} />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/add" element={<Add add={addItems} />} />
                    <Route path="/items" element={<List items={items} ondelete={delItems} />} />
                    <Route 
                        path='/items/:id'
                        element={<ItemInfo items={items}/>}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
            <button onClick={() => setShow(!show)}>{show ? "hide"  : "show"}</button>
            {show && <LifeCycle />}
        
            <div> {count} </div>
            <Button name={"suma"} click={sum}/>
            <Button name={"resta"} click={resta}/>
            <Footer />
        </div>
    );
}

export default App;
