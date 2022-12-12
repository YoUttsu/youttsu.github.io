// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mytext from './components/Mytext';
import Button from './components/Button';
function App() {
  return (
    <>
      
     <Navbar first="home" second="contact us" third="about" fourth="blog" />
      {/* <Navbar/> */}
      {/* this is called props they are passed down to the component*/}
     <Mytext/>
     <div className="flex justify-center">
     <div className='w-[80%] flex justify-center align-middle'>
      <Button name="convert to uppercase" ml="10" />
      <Button name="convert to lowercase"/>
      <Button name="clear"/>
      <Button name="remove spaces"/>
      </div>
      </div>
    </>
  );
}

export default App;
