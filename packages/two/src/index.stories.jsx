import React from 'react';
import { storiesOf } from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-backgrounds';
import { withKnobs, text, boolean, color, object } from '@storybook/addon-knobs/react';
import Two from './';

storiesOf('Two', module)
	.addDecorator(withKnobs)
	.addDecorator(
		withBackgrounds([
			{ name: 'whitesmoke', value: '#f5f5f5' },
			{ name: 'cobal', value: '#041e41' },
			{ name: 'emerald-dark', value: '#005822' },
			{ name: 'fuchsia-dark', value: '#6a0e4d' },
			{ name: 'macaroni-dark', value: '#D48700' },
			{ name: 'black', value: '#000' }
		])
	)
	.add('default', () => (
		<Two />
	))
	.add('monochrome', () => (
		<Two monochrome={true} />
	))
	.add('PLAYGROUND', () => {
		const defaults = Two.getDefaultProps();
		const className = text('className', defaults.className);
		const monochrome = boolean('monochrome', defaults.monochrome);
		const props = object('props', {
			className,
			monochrome
		});

		return (
			<Two {...props} />
		);
	});
