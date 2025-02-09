import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ListProjects = ({ token }) => {
    const [Projects , setProjects] = useState([]);

        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/projects`); // Check what data you are getting
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
        useEffect(()=>{
          fetchProjects();
        },[backendUrl])
        
  const removeProject = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `/api/projects/${id}`, { headers: { token } });
      if (response.data) {
        toast.success(response.data.message);
        await fetchProjects();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <p className='mb-2'>All Projects</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Name</b>
          <b className='text-center'>Action</b>
        </div>
        {Projects.map((project, index) => (
         <div
            className='grid grid-cols-[1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
            key={index}
          >
            <p><b>{project.title}</b></p>
            <p
              onClick={() => removeProject(project._id)}
              className='text-right md:text-center cursor-pointer text-lg text-red-600'
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProjects;
