import React from 'react';
import clsx from "clsx";
import styles from "./index.module.css";
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';

function Pre({code, isNumber=true, lang = 'jsx'}) {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={clsx(className, styles.box, isNumber?'':'_no_number')} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {isNumber?<span className={styles.number}>{i+1}</span>:null}
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
      )}
    </Highlight>
  )
}

export default Pre;
