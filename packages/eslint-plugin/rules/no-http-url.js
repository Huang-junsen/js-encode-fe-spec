const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    fixable: null,
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  create(context) {
    return {
      Literal: function handleRequires(node) {
        console.log(node.value);
        if (node.value && typeof node.value === 'string' && node.value.startsWith('http:')) {
          context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
