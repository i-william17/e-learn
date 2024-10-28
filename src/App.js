import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'animate.css';
import HomePage from '../src/pages/HomePage/HomePage.jsx';
import OnlineCourse from './pages/OnlineCourse/OnlineCourse.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="online-courses" element={<OnlineCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
