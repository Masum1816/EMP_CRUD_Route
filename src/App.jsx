import React from 'react';
import { Route, Routes } from 'react-router';
import FormData from './Components/Form/Form';
import TableData from './Components/Table/Table';
import UpdateData from './Components/Update/Update';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormData />} />
        <Route path='/Table' element={<TableData />} />
        <Route path='/Update/:id' element={<UpdateData />} />
      </Routes>
    </>
  );
}

export default App;
