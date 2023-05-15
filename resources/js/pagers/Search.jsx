import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';


export default function Search() {

  const [NewsData, setNewsData] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  const fetchNewsData = async () => {
    try {
      const apiKey = "ec32aeafdb5a4d2eb4087e4822970d5d";
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=${searchInput}`;

      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setNewsData(data.articles);
        
      } else {
        console.log("An error occurred while fetching the data.");
      }
    } catch (error) {
      console.log("An error occurred while fetching the data.", error);
    }
  };
  console.log(NewsData)

  return (
    <>



      <section className="flex flex-col  py-5 m-h-screen">

        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" >

          <div>

            <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">

              <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>

            </div>

          </div>


          <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} className='font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs' type="text" />
          <button className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full" onClick={fetchNewsData}>

            search
          </button>

        </div>


        <div className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">

          <div className="lg:text-2xl md:text-xl text-lg lg:p-3 p-1 font-black text-gray-700">result the news</div>


          {NewsData ? (<div>
            {NewsData.map((thisitem) => (

              <div key={thisitem.title} className="flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg">
                <div className="lg:flex md:flex items-center">
                  <div className="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"><img className='h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3' src={thisitem.urlToImage} alt={thisitem.title} /></div>

                  <div className="flex flex-col">

                    <div className="text-sm leading-3 text-gray-700 font-bold w-full">{thisitem.title}</div>

                    <div className="text-xs text-gray-600 w-full">{thisitem.description}</div>

                  </div>

                </div>

                <svg className="h-6 w-6 mr-1 invisible md:visible lg:visible xl:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>

              </div>
            ))}
          </div>
          ) : (
            <div>not result</div>
          )}


        </div>

      </section>



    </>
  )
}

