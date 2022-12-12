// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      
     <Navbar first="home" second="contact us" third="about" fourth="blog" />
      {/* <Navbar/> */}
      {/* this is called props they are passed down to the component*/}
    </>
  );
}

export default App;
