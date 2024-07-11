import './Components/Content';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import { useState } from 'react';
import Layout from './Components/Layout';
import api from "./Utils/axiosUtils";
import { Navigate, Routes, useNavigate } from 'react-router';
import { Route } from 'react-router';
import HomePage from './Components/HomePage';
import AddEntry from "./Components/AddEntry";

function App() {
  const navigate = useNavigate();
  const [currentQuery, setCurrentQuery] = useState({});
  const [currentResult, setCurrentResult] = useState({});

  async function changeQuery(query) {
    setCurrentQuery(query);
    console.log("SEARCH");
    await api.post("/search", query)
      .then(function (response) {
        setCurrentResult(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setCurrentResult({});
      });
  }

  async function updateQuery(query) {
      setCurrentQuery(query);
console.log("UPDATE");
    await api.post("/update", query)
      .then(function (response) {
        setCurrentResult(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setCurrentResult({});
      });
  }

  function changeRoute(route) {
    navigate(route);
  }

  return (

    <Layout>
      <Navbar changeQuery={changeQuery} updateQuery={updateQuery} changeRoute={changeRoute} />
      <Routes>
      

        <Route
          exact
          path="/"
          element={<HomePage />}
        />
        <Route
          exact
          path="/queries"
          element={<Content currentQuery={currentQuery} currentResult={currentResult} />}
        />
        <Route
          exact
          path="/add"
          element={<AddEntry />}
        />
      </Routes>
      <Navigate to="/" replace={true} />
    </Layout>
  );
}

export default App;
