import React from "react";
import {Link} from "react-router-dom";
import SearchField from "../SearchField/SearchField";

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <SearchField/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Каталог</Link>
                        </li>
                        <li>
                            <Link to="/have-to-buy/">Что нужно купить</Link>
                        </li>
                        <li>
                            <Link to="/sources/">Магазины</Link>
                        </li>
                        <li>
                            <Link to="/publishers/">Издательства</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}