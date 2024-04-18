module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits', // 使用 conventional-changelog-conventionalcommits 解析器预设
  rules: {
    'body-leading-blank': [1, 'always'], // 正文之前必须始终有空行
    'body-max-line-length': [2, 'always', 100], // 正文每行长度必须始终不超过 100 个字符
    'footer-leading-blank': [1, 'always'], // 页脚之前必须始终有空行
    'footer-max-line-length': [2, 'always', 100], // 页脚每行长度必须始终不超过 100 个字符
    'header-max-length': [2, 'always', 100], // 标题长度必须始终不超过 100 个字符
    'scope-case': [2, 'always', 'lower-case'], // 作用域必须始终为小写
    'subject-case': [0], // 主题不做大小写校验
    'subject-empty': [2, 'never'], // 主题不能为空
    'subject-full-stop': [2, 'never', '.'], // 主题末尾不应包含句号
    'type-case': [2, 'always', 'lower-case'], // 类型必须始终为小写
    'type-empty': [2, 'never'], // 类型不能为空
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']], // 类型必须是预定义的枚举值之一
  },
};
