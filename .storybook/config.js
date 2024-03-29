import { configure } from '@storybook/react';

const req = require.context('../packages', true, /.stories.jsx$/);

function loadStories(){
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
