import React from "react";
import { Link } from "react-router-dom";


function SearchComponent({searchCourse, courseSearchUserFunction}){
    return(
        <header className="App-header">
            <h1>Shoppoing Cart</h1>
                <div className="search-bar">
                    <input 
                    type="text"
                    placeholder="Search for Products"
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                    />
                </div><br />
            <nav>
                <Link className="Home-link" to="/Home"> Home </Link> | <Link className="MyCart-link" to = "/MyCart"> My Cart</Link>
            </nav>
        </header> 
    )
}
export default SearchComponent;