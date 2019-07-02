import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Ugo from './components/ugo'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'
import Clock from './components/clock'
// import Signin from './components/signin'
// import Signup from './components/auth/signup'
// import CustomRouter from './components/auth/router';





// function App() {
//   return (
//     <div className='App-header'>
//         {/* <Signup></Signup> */}
//         <CustomRouter></CustomRouter>
//     </div>
//   );
// }
// /*...........................................................................*/

class App extends React.Component{
    constructor(props){
      super(props)
        this.state = {date: new Date()}
    }

    render(){
      return(
  <div className= 'App-header'>
  <Clock></Clock>
</div>
      )
    }
}



export default App;
