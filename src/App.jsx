import './App.css'
import MainPage from './components/MainPage'
import Header from './components/Header'
import About from './components/About'

function App() {


  return (
   <div className='min-w-screen min-h-fit h-fit bg-[#121120] px-5 flex flex-col items-center'>
    <Header/>
    <MainPage/>
    <About/>
   </div>
  )
}

export default App
