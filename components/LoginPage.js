import React from 'react';
import Link from 'next/link'

export default () => (
	<div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}}>
		<p>You must log in to access content.</p>
		<Link href='/login'>
			<a>Log in</a>
		</Link>
	</div>
);
