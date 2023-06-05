module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 14,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		semi: ['error', 'never'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-no-bind': 'off',
		'react/jsx-props-no-spreading': 'off',
	},
}
