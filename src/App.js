import { React, useState } from 'react';
import Layout from './pages/Layout.js';
import './styles/styles.css';
export default function App() {
  //state variables
  const [currPage, setPage] = useState('Welcome');
  //route names
  const routes = ['About', 'Books', 'Welcome'];
  //global variables object
  const capsule = { title: 'HattyBartyBooks', page: currPage, setPage: setPage, routes: routes };
  return (
    <div>
      <div className='TooSmall text text-danger'>Oops! Your device is too small or zoomed in to view this app...</div>
      <div className='compass'>
        <Layout capsule={capsule} />
      </div>
    </div>
  );
}
