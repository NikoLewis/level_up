var React = require('react');
var ReactDOM = require('react-dom');

//sign: this will be a sign-up form
//input in form grab data and reset state

var Signup = React.createClass({
		getInitialState: function(){
			return({fname: null, lname: null, uname: null, email: null, pw: null, confirmPw: null })
		},
		getFName: function(e){
			this.setState({fname: e.target.value})

		},
		getLName: function(e){
			this.setState({lname: e.target.value})
		},
		getUName: function(e){
			this.setState({uname: e.target.value})
		},
		getEmail: function(e){
			this.setState({email: e.target.value})
		},
		getDPassword: function(e){
			this.setState({pw: e.target.value})
		},
		confirmDPassword: function(e){
			this.setState({confirmPw: e.target.value})
		},
		formSubmit: function(e){
			console.log('add AJAX POST here')
			console.log(this.state)
			e.preventDefault()
		},
		render: function(){
		return(
			<div>
				<h2> Sign Up</h2>
				<h5> It only takes 30 seconds to Level Up your job hunt.</h5>



				<form onSubmit={this.formSubmit}>
					<input placeholder='Your first name' onChange={this.getFName}/>
					<input placeholder='Your last name' onChange={this.getLName}/>
					<input placeholder='Desired username' onChange={this.getUName}/>
					<input placeholder='Your email' onChange={this.getEmail}/>
					<input placeholder='Password' onChange={this.getDPassword}/>
					<input placeholder='Confirm password' onChange={this.confirmDPassword}/>

					<input type='submit'/>
				</form>


			</div>
			)
	}
})

export default Signup;



