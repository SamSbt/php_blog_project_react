import './App.css'
import HomeScreen from './screens/home/HomeScreen'
import ViteLogo from '/vite.svg';
import ReactLogo from '/src/assets/react.svg';

function App() {
  return (
    <>
      <HomeScreen h1Style="mainTitle" pText="Un paragraphe" imgSrc={ViteLogo} imgAlt="Logo Vite"/>
      <HomeScreen h1Style="blue" pText="Un autre paragraphe" imgSrc={ReactLogo} imgAlt="Logo React"/>
    </>
  );
}

export default App;
