import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import useAuth from './hooks/useAuth';

const App = observer(() => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
        user.setRole(data.role)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [user])

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
