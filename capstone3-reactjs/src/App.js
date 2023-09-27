// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './menu';
import FruiteSearch from './1';
import Todo from './2';
import Quiz from './3';
import Advicer from './4';
import Avatar from './Componnents/Avatar';
import Tip from './6';

import Coin1 from './8';
function App(){
  return (
    <div className='App'>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<FruiteSearch/>}></Route>
      <Route path="/t" element={<Todo/>}></Route>
      <Route path="/q" element={<Quiz/>}></Route>
      <Route path="/a" element={<Advicer/>}></Route>
      <Route path="/i" element={<Avatar/>}></Route>
      <Route path="/tip" element={<Tip/>}></Route>
      
      <Route path="/c" element={<Coin1/>}></Route>
     
    </Routes>

    </BrowserRouter>
    </div>

  )
}
export default App