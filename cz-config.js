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
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};