import {React, useState} from 'react';
import Layout from './pages/Layout.js';
export default function App(){
    //state variables
    const [currPage, setPage] = useState("Welcome");
    //route names
    const routes = ["About", "Books", "Welcome"];
    //global variables object
    const capsule = new Object({title: "HattyBartyBooks", page: currPage, setPage: setPage, routes: routes});
    return (
        <Layout capsule={capsule} />
    );
}