import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ElasticScroll from './components/ElasticScroll';
import Landing from './pages/Landing';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ElasticScroll>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </ElasticScroll>
    </BrowserRouter>
  );
}

export default App;
