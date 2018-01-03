import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import client from './Client';

class TopBar extends Component {
	render() {
		return (
			<div className='right menu'>
				{
					client.isLoggedIn() ? (
						<Link className='ui item' to='/logout'>
							Logout
						</Link>
					) : (
						<Link className='ui item' to='/login'>
							Login
						</Link>
					)
				}
			</div>
		);
	}
}

export default TopBar;
