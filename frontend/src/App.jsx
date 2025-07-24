import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  let [data, setdata] = useState([])
  let [about, setabout] = useState()
  let [page, setpage] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4000/company").then(res => {
      let arr = Object.keys(res.data.name)
      setdata(arr)
    })
  }, [])

  let click = (company) => {
    setpage(true)
    axios.get(`http://localhost:4000/api/${company}`).then(res => {
      let arr = Object.entries(res.data.data)
      setabout(arr)
    })
  }

  return (
    <div className='w-full h-max py-2 bg-black'>

      {page && (
        <div className='w-full h-screen bg-white flex justify-center items-center fixed top-0 left-0 z-10'>
          <div className='w-1/2 p-5 border rounded-xl bg-black relative select-none'>
            <div
              className='text-white absolute top-2 right-[15px] text-xl cursor-pointer hover:text-red-600 font-bold'
              onClick={() => {
                setpage(false);
                setabout(null);
              }}
            >X</div>

            {about && about.map(([key, value], idx) => (
              <p key={idx} className='text-white font-bold'> {key} : <span className='font-normal ml-5 text-green-400'> {value} </span> </p>
            ))}


            {/* example  */}

            {/* ["name", "Apple"] => key = "name", value = "Apple" */}
            {/* let arr = [
  ["arham", "shafi", "butt", 22],
  ["ali", "khan", "malik", 30],
  ["hassan", "ahmed", "naqvi", 28]
]

arr.map(([firstname, lastname, cast, age], idx) => {
  console.log(`(${idx}) ${firstname} ${lastname} ${cast} is ${age} years old.`);
}) */}

          </div>
        </div>
      )}

      <h1 className='font-bold text-3xl text-center mt-10'>Cards</h1>
      <div className='flex justify-evenly items-center w-[90%] mx-auto py-1 mt-10 gap-10 flex-wrap'>

        {
          data.map((ele, i) => {
            return (
              <div key={i} className='w-[200px] h-[250px] flex shadow-xl justify-center flex-col gap-10 items-center bg-gray-100 rounded-2xl'>
                <h1 className='text-3xl font-bold text-black '> {ele} </h1>
                <button className='py-1 px-4 hover:scale-105 active:scale-95 transition-all cursor-pointer bg-black rounded-xl text-white' onClick={() => click(ele)} >about</button>
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default App