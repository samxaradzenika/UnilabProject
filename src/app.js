import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './route/Home';
import SignUp from './route/SignUp';
import ToDo from './route/ToDoList';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const App = () => {
   const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
   const ProtectLoginRoute = () => {
      if (isAuth) {
         return <Navigate to="/todo" />;
      } else {
         return <SignUp />;
      }
   };

   return (
      <BrowserRouter>
         <Routes>
            <Route index="/" element={<Home />} />
            <Route path="/signup" element={<ProtectLoginRoute />} />
            <Route path="/todo" element={<ToDo />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
