var React = require('react');
var ReactDOM = require('react-dom');
import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard'


import {withRouter, Router, Route, Link, browserHistory} from 'react-router'


var App = React.createClass({

		render: function(){
		return(
			<div>
				<h1>Level Up</h1>


				<Login/>

				<Signup/>

				<Dashboard/>
			</div>
			)
	}
})

ReactDOM.render(
	<App />,
   document.getElementById('root'))
// <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <Route path='login' component={Login}></Route>
//     </Route>
//   </Router>