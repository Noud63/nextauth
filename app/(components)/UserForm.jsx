"use client"
import React,{useState} from "react"

import { useRouter } from "next/navigation"

const UserForm = () => {

    const router = useRouter()

    const [ formData, setFormData] = useState({name:"", email:"", password:""})
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
         e.preventDefault()
         setErrorMessage("")
         const res = await fetch("/api/Users", {
            method: "POST",
            body: JSON.stringify({formData}),
            "content-type": "application/json"
         })

         if(!res.ok){
            const response = await res.json()
            setErrorMessage(response.message)
         }else{
            router.refresh()
            router.push("/")
         }
    };

  return (
    <div className="w-full m-auto max-w-[450px] min-h-screen flex justify-start items-center flex-col pt-20 px-4">
      <span className="flex justify-center border-b-2 w-[95%] border-white text-xl font-semibold pb-2 text-white">
        Create New User
      </span>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="w-full flex items-center flex-col"
      >
        <div className="flex flex-row w-[95%] my-6">
          <label htmlFor="name" className="w-1/5 text-[16px] text-white">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required={true}
            className="w-4/5 border border-slate-400 outline-none p-1 shadow-sm text-sm ml-2"
          />
        </div>

        <div className="flex flex-row w-[95%] mb-6">
          <label htmlFor="email" className="w-1/5 text-[16px] text-white">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required={true}
            className="w-4/5 border border-slate-400 outline-none p-1 shadow-sm text-sm ml-2"
          />
        </div>

        <div className="flex flex-row w-[95%] mb-6">
          <label
            htmlFor="password"
            className="w-1/5 text-[16px] text-white"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required={true}
            className="w-4/5 border border-slate-400 outline-none p-1 shadow-sm text-sm ml-2"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full
          bg-gray-950 text-white text-[14px] 
          leading-[17px] font-bold"
        >
          Submit
        </button>
      </form>
      <p className="text-red-500 w-full flex justify-center">{errorMessage}</p>
    </div>
  );
}

export default UserForm
