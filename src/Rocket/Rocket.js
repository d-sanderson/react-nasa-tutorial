import React from 'react';
import styles from './Rocket.css';

export default class Rocket extends React.Component {
	render() {
		return (
			<div>
				<img src={require('./shuttle.png')} className={styles.img} alt="shuttle" />

			</div>
		);
	}
}
