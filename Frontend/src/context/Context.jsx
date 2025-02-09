import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Context = createContext();
import { projects } from '../assets/assets';

const ContextProvider = (props) => {
    const [Blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [token, setToken] = useState('');
    const [Papers , setPapers] = useState([]);
    const [Conferences , setConferences] = useState([]);
    const [achievements , setachievements] = useState([]);
    const navigate = useNavigate();

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/blog/`); // Check what data you are getting
                if (response.data) {
                    setBlogs(response.data); // Assuming blogs are in response.data.blogs
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error("Failed to fetch blogs.");
            }
        };
        fetchBlogs();
    }, [backendUrl]);

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/researchPaper`); // Check what data you are getting
                if (response.data) {
                    setPapers(response.data.papers); 
                                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error("Failed to fetch Papers.");
            }
        };
        fetchPapers();
    }, [backendUrl]);

    useEffect(() => {
        const fetchConferences = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/conference`); // Check what data you are getting
                console.log(response.data.conferences);
                if (response.data) {
                    setConferences(response.data.conferences); 
                                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error("Failed to fetch Papers.");
            }
        };
        fetchConferences();
    }, [backendUrl]);

    useEffect(() => {
        const fetchachievements = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/Achievement`); // Check what data you are getting
                if (response.data) {
                    console.log(response.data);
                    setachievements(response.data.achievements); 
                                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error("Failed to fetch Papers.");
            }
        };
        fetchachievements();
    }, [backendUrl]);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, [token]);

    const value = {
        search, setSearch, showSearch, setShowSearch,
        navigate, backendUrl,
        setToken, token, projects,Blogs,Papers,Conferences ,achievements
    };

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
