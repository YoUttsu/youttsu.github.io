// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mytext from './components/Mytext';
// import Button from './components/Button';
function App() {
  return (
    <>
      
     <Navbar first="TexTor" second="contact us" third="about" fourth="blog" />
      {/* <Navbar/> */}
      {/* this is called props they are passed down to the component*/}
     <Mytext/>
     
    </>
  );
}

export default App;
