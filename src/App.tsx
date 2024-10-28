import Footer from './component/Footer.tsx' // 1°fonction déclaré ici qui et donc apres tranformé en balise
import {useState} from 'react' // importer la fonctionnalité usestate dans le projet DEPUIS  react. 

function App() {
  const [countLait, setCountLait] = useState(0); //2° usestate informations qui doivent circuler en app et la fonction footer en forme de balise
  const [countPot, setCountPot] = useState(0);
return (
  <section className="app">
    
     <Footer
     countLait = {countLait} // 3°chffres compte 
     setCountLait = {setCountLait} //fonction qui change le compte, incrémente
     countPot = {countPot}
     setCountPot = {setCountPot}
     /> 
     {/* 4°remettre ce qu'on a declaré dans app au footer*/} 

  </section>
 
)

}


export default App
