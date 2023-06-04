module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Fix bug
        'improve', // Code improvement
        'refactor', // Code refactoring
        'docs', // Code documentation
        'chore', // Minor changes
        'style', // Change style
        'test', // Test case
        'revert', // Revert commit
        'ci', // Configure CI CD
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};
