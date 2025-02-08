import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const Context = createContext();
import {projects} from '../assets/assets'
import {Blogs} from '../assets/assets'

const ContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [token, setToken] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }
    }, [token])
    const value = {
        search, setSearch, showSearch, setShowSearch,
        navigate, backendUrl,
        setToken, token ,projects ,Blogs
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;