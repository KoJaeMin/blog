module.exports = {
  types: [
    { value: '✨ Add', name: '✨  새로운 페이지 추가' },
    {
      value: '🚚 Chore',
      name: '🚚 오탈자 또는 자잘한 수정',
    },
    {
      value: '💊 Fix',
      name: '💊 기존 내용 수정',
    },
    {
      value: '🌞 Setting',
      name: '🌞 프로젝트 셋팅 및 package.json 수정',
    },
    {
      value: '💄 Style',
      name: '💄 스타일 수정',
    },
    {
      value: '📞 Remove',
      name: '📞  파일 삭제하는 작업만 수행한 경우',
    },
  ],
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  allowCustomScopes: false,
  skipQuestions: ["scope", "customScope", "footer"],
  subjectLimit: 100,
};