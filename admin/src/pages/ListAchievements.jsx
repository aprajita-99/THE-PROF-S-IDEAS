import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ListAchievements = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/Achievement');
      if (response.data.success) {
        setList(response.data.achievements);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeAchievement = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `/api/Achievement/delete/${id}`, { headers: { token } });
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
      <p className='mb-2'>All Achievements</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Title</b>
          <b>Description</b>
          <b className='text-center'>Action</b>
        </div>
        {list.map((item, index) => (
          <div
            className='grid grid-cols-[1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
            key={index}
          >
            <p><b>{item.title}</b></p>
            <p>{item.description}</p>
            <p
              onClick={() => removeAchievement(item._id)}
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

export default ListAchievements;
