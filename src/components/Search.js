import React from "react";

class Search extends React.Component {

    render() {
        return (
            <div className="d-flex col-md-12 justify-content-md-center">
                <div className="search-menu col-md-5.5" >
                    <div> ID <input type="text" name="id" maxLength="5" /> </div>
                    <label>
                        Tipo de eventos
                    </label>
                    <select>
                        <option defaultValue></option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                    <div> Pais: <input type="text" name="id" /></div>
                    <button className="btn-search ms-2">Buscar</button>
                </div>
            </div>
        )
    }
}

export default Search;