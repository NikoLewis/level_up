var React = require('react');
var ReactDOM = require('react-dom');
import {Link} from 'react-router'
//Landing page: login/signup

// Link to sign-up page is not working yet, waiting for backend
// usernae and password inputs grab un and pw wait for auth

var Login = React.createClass({
		getInitialState: function(){
			return({username: null,password: null})
		},
		getUsername: function(e){

			this.setState({username: e.target.value})



		},
		getPassword: function(e){
			console.log(e.target.value)

			this.setState({password: e.target.value})


		},
		render: function(){
		return(
			<div>
			<Link path="/signup"><button>Click here to sign up!</button></Link>

				<form>
					Username:<input onChange={this.getUsername}/>
					Password:<input onChange={this.getPassword}/>
					<input type='submit' />
				</form>

			</div>
			)
	}
})

export default Login;