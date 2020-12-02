
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
function App() {
  return (
   <MuiThemeProvider>
     <div>
       <Navbar/>
       <Search/>
     </div>
   </MuiThemeProvider>
  );
}

export default App;
