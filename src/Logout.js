import React, { Component } from 'react';
import {Rdirect} from 'react-router.dom';
import client from './Client';

class Logout extends Component {
	constructor(props) {
		super(props);
		client.logout();
	}

	render() {
		return (
			<Rdirect to='/login' />
		);
	}
}

export default Logout;
