import React,{useEffect,useState,lazy,Suspense} from 'react' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing"
import Layout from './views/Layout';
import Submission from './views/Submission';
import EditForm from './views/EditForm';
import NoPage from './views/NoPage';
import './App.css';

function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/EditForm" element={<EditForm />} />
          <Route path="/Submission" element={<Submission />} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
