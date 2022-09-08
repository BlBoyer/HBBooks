import React, { useState } from 'react';
import Author from '../components/Author';
import Illustrator from '../components/Illustrator';
import Story from '../components/Story';


export default function About({capsule})
{
    //click display author / illustrator info
    var [comp, setComp] = useState(Story);
    return (
        <div>
            <div className="row justify-content-center main">
            <div className="d-flex mx-2 justify-content-center subheading subnav border-bottom box-shadow mb-5 pb-3">
                    <div className="nav-item nav-link" onClick={()=>setComp(Story)}>About The Books</div> 
                    <div className="nav-item nav-link" onClick={()=>setComp(Author)}>About The Author</div>
                    <div className="nav-item nav-link" onClick={()=>setComp(Illustrator)}>About The Illustrator</div>
            </div>
            {comp}
            </div>
        </div>
    );
}