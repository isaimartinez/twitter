import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Feed, Profile} from './pages/'
import {Sidebar, WhatsHappening} from './components/'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='flex flex-row min-h-screen w-full'>
          <div className='flex flex-1'>
            <Sidebar />
          </div>
          <div className='flex flex-1 border-x-2 border-slate-100	'>
            <Routes>
              <Route path='/' element={<Feed/>}/>
              <Route path='/Feed' element={<Feed/>}/>
              <Route path='/Profile' element={<Profile/>}/>

            </Routes>
          </div>
          <div className='flex flex-1'>
            <WhatsHappening />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
