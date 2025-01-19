
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Home/HomePage'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route >

        <Route path='/' element={<HomePage/>} />

      </Route>
    )
  )

  return (
    <>

      <RouterProvider router={myRoute}/>
    

    </>
  )
}

export default App
