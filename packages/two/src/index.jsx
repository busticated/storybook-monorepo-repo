import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const BLACK = '#000';
const WHITE = '#fff';


export default createClass({
	displayName: 'ComponentTwo',
	propTypes: {
		monochrome: PropTypes.bool
	},
	getDefaultProps(){
		return {
			monochrome: false
		};
	},
	render(){
		const { className, monochrome } = this.props;
		const style = {
			color: monochrome ? WHITE : 'pink',
			'background-color': monochrome ? BLACK : 'lightblue'
		};

		return (
			<div className={className}>
				<span style={style}>TWO</span>
			</div>
		);
	}
});

