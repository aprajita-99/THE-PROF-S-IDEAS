import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ListConferences = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/conference');
      if (response.data.success) {
        setList(response.data.conferences);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeConference = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `/api/conference/delete/${id}`, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Conferences</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Topic</b>
          <b>Date</b>
          <b>Video URL</b>
          <b className='text-center'>Action</b>
        </div>
        {list.map((item, index) => (
          <div
            className='grid grid-cols-[1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
            key={index}
          >
            <p><b>{item.topic}</b></p>
            <p>{item.date}</p>
            <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Watch</a>
            <p
              onClick={() => removeConference(item._id)}
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

export default ListConferences;
