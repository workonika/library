import React, {useState} from "react";
import {Link} from "react-router-dom";
import SearchField from "../SearchField/SearchField";
import {titles as T} from "../Catalog/Catalog"; 

export default function Header() {

    return (
        <header>
            <SearchField/>
            <nav>
                <ul>
                    {
                        T.map((o,i)=><li key={i}><Link to={o.path}>{o.title}</Link></li>)
                    }
                </ul>
            </nav>
        </header>
    );
}