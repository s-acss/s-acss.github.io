import React from 'react';
import clsx from "clsx";
import Pre from "../Pre";

const code = `  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sacss/index.min.css" /> `;

function Demo({className}) {
  return (
    <div className={clsx(className)}>
      <div className={clsx('oh pr')} style={{borderRadius: '32px'}}>
        <Pre isNumber={false} code={code} lang="html"/>
      </div>
    </div>
  );
}

export default Demo;
