import React,{useEffect,useState,lazy,Suspense} from 'react' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing"
import Layout from './views/Layout';
import Submission from './views/Submission';
import ViewForm from './views/ViewForm';
import NoPage from './views/NoPage';
import './App.css';

function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route  path="/view" element={<ViewForm />} />
          <Route path="/Submission" element={<Submission />} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
