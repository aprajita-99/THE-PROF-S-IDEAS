import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import {Context} from '../context/Context';

const ProjectDetailed = () => {
  const { id } = useParams();
  const { backendUrl} = useContext(Context);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/projects/${id}`);
        console.log(response.data);
        if (response.data) {
          setProject(response.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch project details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProject();
  }, [id]);

  if (loading) {
    return <div className='flex justify-center items-center h-screen text-lg font-semibold'>Loading...</div>;
  }

  if (!project) {
    return <div className='flex justify-center items-center h-screen text-lg font-semibold text-red-500'>Project not found</div>;
  }
  console.log(project.longDescription);

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center mb-4'>{project.title}</h1>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex-1'>
          <img src={project.imageUrl} alt={project.title} className='w-full rounded-lg shadow-md' />
          {project.videoUrl && (
            <div>
              <h2 className='text-xl font-semibold mb-2'>Project Video</h2>
              <video controls className='w-full rounded-lg shadow-md'>
                <source src={project.videoUrl} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <div className='flex-1 space-y-4'>
          <p className='text-lg text-gray-700'>{project.longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailed;