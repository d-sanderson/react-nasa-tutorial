import React from 'react';
import styles from './GridItem.css';
import Badge from './Badge';
import Explorer from './Explorer';

const GridItem = (props) => {
	return (
		<div className={styles.card} onClick={() => props.updateClicked(props.fact.id) }>
			<div className={styles.img}>
			{props.fact.clicked ? <Explorer /> : <Badge />}
			</div>
			<h2 className={styles.title}>{props.fact.title}</h2>
			<article className={styles.fact}>{props.fact.fact}</article>
		</div>
	)
}

export default GridItem;
