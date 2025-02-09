import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl} from '../App'
import {toast} from 'react-toastify'
const ListBlogs = ({ token }) => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/blog')
      if (response.data){
        setList(response.data);
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `/api/blog/${id}`, { headers: {token }})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>All Blogs List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Title</b>
          <b>Author</b>
          <b className='text-center'>Action</b>
        </div>

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <p><b>{item.title}</b></p>
              <p>{item.author}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ListBlogs