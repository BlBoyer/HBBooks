import React, {useState, useEffect} from 'react';
import { AuthenticatedTemplate } from '@azure/msal-react';
import Loading from './Loading.js';
import Footer from '../components/Footer';
import '../styles/styles.css';
var Comploader = React.lazy(() => import('./Welcome'));
export default function Layout({capsule}){
    var [newHash, setHash] = useState("#Welcome");
    //listen for url hash changes and set the hash state to new ones
    window.addEventListener('hashchange', event => {
            setHash(new URL(event.newURL).hash);
    });
    useEffect(()=>{
        //load new component if the hash has changed to something other than the current page
        if (newHash && newHash.slice(1) !== capsule.page){
                loadPage(newHash.slice(1));
        }
    },[newHash]);

    function loadPage(eString){
        //set the currrent page
        capsule.setPage(eString);
        window.location.hash = eString;
        //disable current link
        for (let i in capsule.routes)
        {
            if (capsule.routes[i] === eString)
            {
                document.getElementById(eString).classList.add('disabled');
            } else 
            {
                document.getElementById(capsule.routes[i]).classList.remove('disabled');
            }
        }
        Comploader = React.lazy(() => import(`./${eString}`));
    }
    return (
    <div>
    <title>{capsule.page} - {capsule.title}</title>
    <header className="main">
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container-fluid">
                <a className="navbar-brand heading" href="/">HATTY AND BARTY</a>
                <button id="toggle" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-1 collapsable"><hr align="center" /></div>
                <div className="navbar-collapse fit collapse d-sm-inline-flex justify-content-between border border-1">
                    <ul className="navbar-nav fit flex-grow-1">
                        <li className="nav-item">
                            <a id="Welcome" className="nav-link" href={`${process.env.PUBLIC_URL}/#Welcome`}>HOME</a>
                        </li>
                        <li className="nav-item">
                        <a id="Books" className="nav-link" href={`${process.env.PUBLIC_URL}/#Books`}>BOOKS</a>
                        </li>
                        <li className="nav-item">
                        <a id="About" className="nav-link" href={`${process.env.PUBLIC_URL}/#About`}>ABOUT</a>
                        </li>
                    </ul>
                </div>
                <div className="col collapsable"><div><hr align="center" /></div></div>
            </div>
            <AuthenticatedTemplate>
                <div className="me-5 navbar-collapse collapse">
                <a className="nav-link">Hidden Login</a>
                </div>
            </AuthenticatedTemplate>
        </nav>
    </header>
    <div id="loader">
        <React.Suspense fallback={<Loading />}>
            <Comploader {...capsule} />
        </React.Suspense>
    </div>
    <Footer />
    </div>
    )
};