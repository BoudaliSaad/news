import React, { useEffect, useState ,createContext} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Cardl from '../accueil_stick/card';
import ContainerS from '../accueil_stick/carousel'
import Head_accueil from '../accueil_stick/head_accueil'



 export const ApiContext=createContext();

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
// useEffect(() => {
    //     fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ec32aeafdb5a4d2eb4087e4822970d5d')
    //     .then(response => response.json())
    //     .then(data => setArticles(data.articles))
        
    // }, []);
function Accueil() {
  const [articles, setArticles] = useState([]);
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchnews = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ec32aeafdb5a4d2eb4087e4822970d5d');
        const data = await fetchnews.json();
        
        setArticles(data.articles)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const randomIndex = Math.floor(Math.random() * articles.length);
      setRandomItem(articles[randomIndex]);
    }
  }, [articles]);

  // const articles = useContext(ApiContext);
  // console.log(articles)
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
        {randomItem && <Head_accueil randomItem={randomItem} />}

      <Container fluid='md'>
        <section >
          <div className='title'>
            <span className='title-text'>Derniers articles</span>
          </div>
          <Row md='3'>
       <ApiContext.Provider value={articles}>
            <Cardl />
        </ApiContext.Provider>
          </Row>
          <div className="btn-read text-center">
            <button type="button" className="btn btn-danger" outline rounded>read more</button>
          </div>
        </section>
        
        <section>

          <div className='carousel-news'>
       <ApiContext.Provider value={articles}>

            <ContainerS />
        </ApiContext.Provider>
          </div>
        </section>

      </Container>
    </div>
  )
}


export default Accueil