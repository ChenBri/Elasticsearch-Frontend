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
import Search from './Components/Search';

function App() {
  const navigate = useNavigate();
  const [currentQuery, setCurrentQuery] = useState({});
  const [currentResult, setCurrentResult] = useState({});

  async function changeQuery(query) {
    setCurrentQuery(query);

    await api.post("/search", query)
      .then(function (response) {
        setCurrentResult(response.data.data);

      })
      .catch(function (error) {

        setCurrentResult({});
      });
  }

  async function updateQuery(query) {
    setCurrentQuery(query);

    await api.post("/update", query)
      .then(function (response) {
        setCurrentResult(response.data.data);

      })
      .catch(function (error) {

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
        <Route
          exact
          path="/search"
          element={<Search />}
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

    </Layout>
  );
}

export default App;
