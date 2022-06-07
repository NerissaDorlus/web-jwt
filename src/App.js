import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import 'antd/dist/antd.css';
// import './App.css';

function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
      const _token = localStorage.getItem('token');
      if(_token){
          setToken(_token);
      }
  }, [])
  return (
    <div className="App">
      {!token
        ? <Login setToken={setToken} />
        : <Home token={token} />
      }
    </div>
  );
}

export default App;
