import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './route/Home';
import SignUp from './route/SignUp';
import ToDo from './route/ToDoList';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<ToDo />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
