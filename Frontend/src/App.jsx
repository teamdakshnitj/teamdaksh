import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'

// layouts and pages
import Home from './pages/Home/Home';
import RootLayout from './layouts/RootLayout';
import About from './pages/About/About';
import Achievements from './pages/Achievements/Achievements';
import Gallery from './pages/Gallery/Gallery';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>}/>
      <Route path="achievements" element={<Achievements/>}/>
      <Route path="gallery" element={<Gallery/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;