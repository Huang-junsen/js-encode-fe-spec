module.exports = {
    defaultSeverity: 'warning',  // 设置所有规则的默认严重性级别。
    plugins: ['stylelint-scss'], // 引入 stylelint-scss 插件，启用 SCSS 特定的规则。
    extends: ['stylelint-config-standard','stylelint-config-standard-scss'], // 继承 stylelint-config-standard 配置。
    rules: {
      /**
       * 可能的错误
       * @link https://stylelint.io/user-guide/rules/#possible-errors
       */
      'at-rule-no-unknown': null, // 禁用未知的 at 规则检查。
      'scss/at-rule-no-unknown': true, // 启用 SCSS 特定的未知 at 规则验证。
      'block-no-empty': null, // 禁用空块规则。
      'color-no-invalid-hex': true, // 确保十六进制颜色值有效。
      'comment-no-empty': true, // 禁止空注释。
      'declaration-block-no-duplicate-properties': [
        true,
        {
          ignore: ['consecutive-duplicates-with-different-values'],
        },
      ], // 允许连续重复属性，如果它们的值不同。
      'declaration-block-no-shorthand-property-overrides': true, // 防止简写属性覆盖详细属性。
      'font-family-no-duplicate-names': true, // 确保字体族名称不重复。
      'function-calc-no-unspaced-operator': true, // 确保 calc 函数中的操作符周围有空格。
      'function-linear-gradient-no-nonstandard-direction': true, // 防止线性渐变中使用非标准方向。
      'keyframe-declaration-no-important': true, // 禁止在关键帧声明中使用 !important。
      'media-feature-name-no-unknown': true, // 禁止未知的媒体特性名称。
      'no-descending-specificity': null, // 禁用；忽略选择器优先级降序的规则。
      'no-duplicate-at-import-rules': true, // 禁止重复的 @import 规则。
      'no-duplicate-selectors': true, // 禁止选择器重复。
      'no-empty-source': null, // 允许空的源文件。
      'no-extra-semicolons': true, // 禁止多余的分号。
      'no-invalid-double-slash-comments': true, // 禁止无效的双斜杠注释（CSS 中不支持）。
      'property-no-unknown': true, // 禁止未知的属性。
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global', 'local', 'export'],
        },
      ], // 允许特定的自定义伪类。
      'selector-pseudo-element-no-unknown': true, // 禁止未知的伪元素。
      'string-no-newline': true, // 禁止字符串中的换行符。
      'unit-no-unknown': [
        true,
        {
          ignoreUnits: ['rpx'],
        },
      ], // 允许特定的自定义单位，如 rpx。
  
      /**
       * 风格问题
       * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
       */
      indentation: 2, // 强制使用两个空格的缩进。
      'block-closing-brace-newline-before': 'always-multi-line', // 多行块的结束括号前必须有换行。
      'block-closing-brace-space-before': 'always-single-line', // 单行块的结束括号前必须有空格。
      'block-opening-brace-newline-after': 'always-multi-line', // 多行块的开始括号后必须有换行。
      'block-opening-brace-space-before': 'always', // 开始括号前必须有空格。
      'block-opening-brace-space-after': 'always-single-line', // 单行块的开始括号后必须有空格。
      // 'color-hex-case': 'lower', // 要求十六进制值使用小写。
      'color-hex-length': 'short', // 强制使用简短形式的十六进制值。
      'comment-whitespace-inside': 'always', // 注释内部必须有空白。
      // 'declaration-colon-space-before': 'never', // 声明中的冒号前不能有空格。
      // 'declaration-colon-space-after': 'always', // 声明中的冒号后必须有空格。
      'declaration-block-single-line-max-declarations': 1, // 单行声明块中的最大声明数为1。
      'declaration-block-trailing-semicolon': [
        'always',
        {
          severity: 'error',
        },
      ], // 声明块必须以分号结束，并将缺失分号视为错误。
      'length-zero-no-unit': [
        true,
        {
          ignore: ['custom-properties'],
        },
      ], // 零长度值不得带单位，自定义属性除外。
      'max-line-length': 100, // 限制最大行长度。
      'selector-max-id': 0, // 禁止在选择器中使用 ID。
      'value-list-comma-space-after': 'always-single-line', // 单行值列表中逗号后必须有空格。
  
      /**
       * stylelint-scss 规则
       * @link https://www.npmjs.com/package/stylelint-scss
       */
      'scss/double-slash-comment-whitespace-inside': 'always', // SCSS 中双斜杠注释内必须有空白。
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // 指定 stylelint 忽略的文件类型。
  };
  