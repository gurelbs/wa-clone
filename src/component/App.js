import React from 'react';
import useLocalStorge from '../hooks/useLocalStorge';
import Login from './login'
function App() {

  const [id, setId] = useLocalStorge('id')
  return (
    <>
    {id}
    <Login onIdSubmit={setId}/>  
    </>
);
}

export default App;
