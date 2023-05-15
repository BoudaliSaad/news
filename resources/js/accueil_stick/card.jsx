import React, { useState, useEffect ,useContext} from "react";
import { Row,Col } from "reactstrap";
import { ApiContext } from "../pagers/Accueil";
function cardl() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ec32aeafdb5a4d2eb4087e4822970d5d')
  //     .then(response => response.json())
  //     .then(data => setArticles(data.articles))
  //     .catch(error => console.log(error));
  // }, []);
 
  const articles= useContext(ApiContext);
  return (
    <>
    
      {articles.map(news => (
        
         
            <div className="mt-3" style={{ background: '#F5F5F5' }} key={news.title}>
              <div className="max-w-[370px] mx-auto mb-10 ">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src={news.urlToImage}
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <span
                    className="bg-primary rounded text-center py-1 px-4 text-xs inline-block leading-loose font-semibold text-white mb-5">
                    {news.publishedAt}
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                          font-semibold
                          text-xl
                          sm:text-2xl
                          lg:text-xl
                          xl:text-2xl
                          mb-4
                          inline-block
                          text-dark
                          hover:text-primary
                          "
                    >
                      {news.title}
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    {news.description}
                  </p>


                </div>
              </div>
            </div>
       

       

      ))}
      
    </>
  )
}
export default cardl;