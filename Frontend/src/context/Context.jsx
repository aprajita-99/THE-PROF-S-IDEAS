import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Context = createContext();
const ContextProvider = (props) => {
    const [Blogs, setBlogs] = useState([]);
    const [Search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [token, setToken] = useState('');
    const [Papers , setPapers] = useState([]);
    const [Conferences , setConferences] = useState([]);
    const [achievements , setachievements] = useState([]);
    const [Projects , setProjects] = useState([]);
    const [showsearch , setshowsearch] = useState(false);
    const [searchblog ,setsearchblog ] = useState('');
    const [searchpapers ,setsearchpapers ] = useState('');
    const [searchachiev ,setsearchachiev ] = useState('');
    const [searchconfer ,setsearchconfer ] = useState('');
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/blog/`);
                if (response.data) {
                    setBlogs(response.data);
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
                const response = await axios.get(`${backendUrl}/api/researchPaper`);
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
                const response = await axios.get(`${backendUrl}/api/conference`);
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
                const response = await axios.get(`${backendUrl}/api/Achievement`);
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
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/projects`);
                if (response.data) {
                    console.log(response.data);
                    setProjects(response.data); 
                                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error("Failed to fetch.");
            }
        };
        fetchProjects();
    }, [backendUrl]);
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, [token]);
    const value = {
        Search, setSearch, showSearch, setShowSearch,
        navigate, backendUrl,
        setToken, token,Blogs,Papers,Conferences ,achievements ,Projects ,showsearch , setshowsearch 
        , searchblog ,setsearchblog , searchpapers ,setsearchpapers ,
        searchachiev ,setsearchachiev ,searchconfer ,setsearchconfer,
    };
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};
export default ContextProvider;
