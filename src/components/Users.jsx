import { FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { debounce } from 'lodash';

const Users = () => {

    const [usersList, setUsersList] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [finalList, setFinalList] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
      const loadUsers = async ()=>{
        setLoading(true)
       try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        if(response){
            setUsersList(response.data)
            setFinalList(response.data)
        setLoading(false)
        }else{
            console.log('No users found')
        setLoading(false)
        }
       } catch (error) {
        console.log("Something went wrong in fetching users, ",error)
        setLoading(false)
       }
      }
    loadUsers()
    }, [])


    
    const debouncedQuery = debounce((query)=>{
        if(query){
            const filteredUsers = usersList.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
            setFinalList(filteredUsers)
        setLoading(false)
        }else{
            setFinalList(usersList)
        setLoading(false)
        }

    }, 1000)

    const handleSearchChange = (e)=>{
        setLoading(true)
        setSearchQuery(e.target.value)
        debouncedQuery(e.target.value)
    }

    

  return (
    <div className="w-full min-h-screen h-max bg-gray-700 flex flex-col gap-6 items-center justify-start p-4">
      <h1 className="md:text-5xl text-3xl font-bold text-[#F3777E]">Users</h1>
      <div className="md:w-1/2 w-full h-max flex justify-center" role="search">
        <input
        value={searchQuery}
        onChange={handleSearchChange}
          type="search"
          placeholder="Search Users"
          aria-label="Search Users"
          className="md:w-[70%] w-full h-10 bg-gray-200 text-base font-normal outline-none p-1 px-3 rounded-md"
        />
      </div>
      {
        loading? ( <span aria-live="polite" className="text-2xl font-semibold text-white">Loading...</span>): null
      }
     
      <div className="md:w-[60%] w-full h-max bg-gray-700 grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
       {
        finalList.map((user, index)=>{
            return(
                <div key={user.id} className="md:w-[80%] w-full md:min-h-52 h-max bg-slate-300 rounded-lg flex flex-col gap-2 items-center p-2">
                <div className="w-full h-max flex flex-row items-center gap-4 justify-start">
                  <div className="w-max h-max rounded-full p-2 bg-gray-200">
                    <FaUser className="text-3xl text-gray-900" />
                  </div>
                  <div className="flex flex-col gap-0 items-start">
                    <span className="text-xl text-gray-800 font-semibold">
                      {user.name}
                    </span>
                    <span className="text-base text-gray-800 font-semibold">
                      {user.username}
                    </span>
                  </div>
                </div>
      
                <div className="w-full h-max flex flex-col">
                  <a
                    href={user.website || '#'}
                    target="_blank"
                    className="text-base text-blue-700 font-semibold transition-all duration-100 hover:underline"
                  >
                    {" "}
                    {user.website || 'Website'}
                  </a>
                  <span className="text-lg text-gray-800 font-semibold">
                   {user.company.name}
                  </span>
                  <span className="text-base underline text-gray-800 font-semibold">
                    {user.email}
                  </span>
                  <div className="w-full h-max grid grid-cols-2">
                    <span className="text-base text-gray-800 font-semibold">
                      Street: {user.address.street}
                    </span>
                    <span className="text-base text-gray-800 font-semibold">
                    Suite: {user.address.suite}
                    </span>
                    <span className="text-base text-gray-800 font-semibold">
                    City: {user.address.city}
                    </span>
                  </div>
                </div>
              </div>
            )
        })
       }
      </div>
    </div>
  );
};

export default Users;
