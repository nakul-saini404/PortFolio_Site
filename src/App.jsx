import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, Link } from 'react-router-dom';
import Portfolio from './components/Page';

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
