/* TODO
    Fix XML highlighting
 */

Prism.languages.actionscript = Prism.languages.extend('javascript',  {
    'keyword': [
        // Lexical keywords
        // Intentionally ignore true and false that are already handled as booleans
        /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
        // Syntactic keywords
        /\b(?:each|dynamic|final|get|include|namespace|native|override|set|static)\b/
    ],
    'number': /\b-?(\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/g,
    'operator': /(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=)=?|[=~?@]/,
    'function': /(?!\d)[a-z0-9_$]+(?=\()/ig
});
Prism.languages.actionscript['class-name'].alias = 'function';

Prism.languages.insertBefore('actionscript', 'operator', {
    'xml': {
        pattern: /(^|[^.])<[\s\S]*>(?=\s*($|[\r\n,.;\]})<]))/,
        inside: {
            rest: Prism.languages.markup
        }
    }
});