'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'GitHub',
		url: 'https://github.com/yyh-gl'
	},    
	{
		label: 'Qiita',
		url: 'https://qiita.com/yyh-gl'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/yyh_gl'
	},
	{
		label: 'Facebook',
		url: 'https://www.facebook.com/yusuke.honda.1650'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
		<Text>I’m a student developer in Kyoto, Japan.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
