// import React, { useState, useEffect,createContext } from 'react';
// import Cardl from '../accueil_stick/card';
// import Accueil from '../pagers/Accueil';

// export const ApiContext=createContext();

// function News(props) {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//       fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ec32aeafdb5a4d2eb4087e4822970d5d')
//         .then(response => response.json())
//         .then(data => setArticles(data.articles))
//         .catch(error => console.log(error));
//     }, []);
//   return (
//     <>
//     <ApiContext.Provider value={{articles,setArticles}}>
//         <Accueil/>
//     </ApiContext.Provider>
     
    
//     </>
//   );
// }
// 
// export default News;
