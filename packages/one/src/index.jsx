import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import styled, { css } from 'styled-components';
import Two from '@my-monorepo/two';


export default createClass({
	displayName: 'ComponentOne',
	propTypes: {
		colorMode: PropTypes.oneOf(['cyan', 'emerald', 'macaroni', 'fuchsia'])
	},
	getDefaultProps(){
		return {
			colorMode: 'cyan',
		};
	},
	render(){
		const defaultColorMode = this.constructor.defaultProps.colorMode;
		const { colorMode } = this.props;

		return (
			<_container>
				<_btn colorMode={colorMode} />
				<_two monochrome={colorMode !== defaultColorMode} />
			</_container>
		);
	}
});


// STYLES /////////////////////////////////////////////////////////////////////
const _container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	margin-top: 4em;
`;

const _btn = styled.button`
	background-color: red;

	${(props) => {
		if (props.colorMode === 'cyan'){
			return css`
				background-color: ${props.colorMode};
			`;
		}
		return css`
			background-color: beige;
		`;
	}}
`;

const _two = styled(Two)`
	width: 40px;
`;

