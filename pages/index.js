import SnowflakeApp from '../components/SnowflakeApp'
import React from 'react';
import WeDeploy from 'wedeploy';
import LoginPage from '../components/LoginPage';

export default class App extends React.Component {
	componentDidMount() {
		this.setState({
			auth: WeDeploy.auth('auth-authweb.wedeploy.io'),
		})
	}

	render() {
		return this.state && this.state.auth && this.state.auth.currentUser ?
			<SnowflakeApp /> :
			<LoginPage />
	}
}
