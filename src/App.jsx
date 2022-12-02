import { useSelector } from 'react-redux'
import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import ProtectedRoutes from './components/ProtectedRoutes'
import SideBarCar from './components/SideBarCar'
import CreateUser from './pages/CreateUser'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductsDetail from './pages/ProductsDetail'
import Purchases from './pages/Purchases'
import User from './pages/User'

function App() {

  const isLoading=useSelector(state=>state.isLoading);
 

  return (
   <HashRouter>

    <NavBar/>
    {isLoading &&<LoadingScreen/>}

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products/:id' element={<ProductsDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<CreateUser/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/purchases' element={<Purchases/>}/>
        <Route path='/user' element={<User/>}/>
      </Route>
    </Routes>
   </HashRouter>
  )

}

export default App
