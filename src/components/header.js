import React, { component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <Link to={'/countryselector'} className="country">
                    Country Selector
                </Link>
   
                <Link to={'/todolist'} className="todolist">
                    Todo List
                </Link>
            </div>
//             <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <Link to={'/countryselector'} className="country">
//         WebSiteName
//       </Link>
//     </div>
//     <div className="navbar-header">
//       <Link to={'/todo'} className="country">
//         WebSiteName
//       </Link>
//     </div>
//    </div>
// </nav>

            
        )
    }
}

export default Header