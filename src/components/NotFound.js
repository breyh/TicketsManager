import { Link } from 'react-router-dom';
import React from 'react';


const NotFoundPage = () => (
    <div className="col col-md-11">
        404! - <Link to="/">Go Home!</Link>
    </div>
)

export default NotFoundPage;