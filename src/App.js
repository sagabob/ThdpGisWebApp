
import './App.css';
import Searchbar from './components/layouts/Searchbar';
import SideBar from './components/layouts/Sidebar';
import MyGLMap from './components/maps/MyGLMap';

function App() {
  return (
    <div> 
      <SideBar/>  
      <Searchbar />  
      <MyGLMap/>
    </div>
  );
}

export default App;
