import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdownSetting = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    // eslint-disable-next-line no-nested-ternary
    return inline ? (
      <code
        style={{
          background:
            'linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )',
          padding: '2px',
          borderRadius: '3px',
        }}
        {...props}
      >
        {children}
      </code>
    ) : match ? (
      // 코드 (```)
      <SyntaxHighlighter
        style={nord}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children)
          .replace(/\n$/, '')
          .replace(/\n&nbsp;\n/g, '')
          .replace(/\n&nbsp\n/g, '')}
      </SyntaxHighlighter>
    ) : (
      <SyntaxHighlighter
        style={nord}
        language="textile"
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  },
  // 인용문 (>)
  blockquote({ node, children, ...props }) {
    return (
      <div
        style={{
          background: '#f0f0f0',
          padding: '1px 15px',
          borderRadius: '10px',
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
  img({ node, ...props }) {
    return (
      <img
        style={{ maxWidth: '60vw' }}
        src={props.src.replace('../../../../public/', '/')}
        alt="MarkdownRenderer__Image"
      />
    );
  },
  em({ node, children, ...props }) {
    return (
      <span style={{ 'font-style': 'italic' }} {...props}>
        {children}
      </span>
    );
  },
};

export default markdownSetting;
