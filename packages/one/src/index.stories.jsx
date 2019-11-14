import React from 'react';
import { storiesOf } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs, select, object } from '@storybook/addon-knobs/react';
import One from './';


storiesOf('One', module)
	.addDecorator(withKnobs)
	.addDecorator(
		withBackgrounds([
			{ name: 'whitesmoke', value: '#f5f5f5' },
			{ name: 'cobal', value: '#041e41', default: true },
			{ name: 'emerald-dark', value: '#005822' },
			{ name: 'fuchsia-dark', value: '#6a0e4d' },
			{ name: 'macaroni-dark', value: '#D48700' },
			{ name: 'black', value: '#000' }
		])
	)
	.add('default', () => (
		<One />
	))
	.add('color mode', () => (
		<One colorMode='fuchsia' />
	))
	.add('PLAYGROUND', () => {
		const defaults = One.getDefaultProps();
		const options = {
			cyan: 'cyan',
			emerald: 'emerald',
			macaroni: 'macaroni',
			fuchsia: 'fuchsia'
		};
		const colorMode = select('colorMode', options, defaults.colorMode);
		const props = object('props', {
			colorMode
		});

		return (
			<One {...props} />
		);
	});
