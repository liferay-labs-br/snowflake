import WeDeploy from 'wedeploy';
import React from 'react';

export default class Login extends React.Component {
	constructor() {
		super();
		this.auth = WeDeploy.auth('auth-authweb.wedeploy.io');
		this.auth.onSignIn(() => {
			document.location.href = '/';
		});
	}

	componentDidMount() {
		this.auth.currentUser ?
			(document.location.href = '/')
			: this.signInWithGoogle();
	}

	signInWithGoogle() {
		const googleProvider = new this.auth.provider.Google();
		googleProvider.setProviderScope('email');
		this.auth.signInWithRedirect(googleProvider);
	}


	render() {
		return <p>Redirecting...</p>;
	}
}