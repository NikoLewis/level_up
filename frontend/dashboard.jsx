var React = require('react');
var ReactDOM = require('react-dom');

//dashboard option buttons that should route to new views
//requires a user image in right corner

var Dashboard = React.createClass({

		render: function(){
		return(
			<div>

				<h4> Welcome User(pass props to display username from login component)</h4>






					<button>Wishlist</button>
					<button>Job Application</button>
					<button>Job Interview</button>
					<button>Schedule</button>






			</div>
			)
	}
})

export default Dashboard;



