import React from 'react';
import clsx from "clsx";
import Translate from '@docusaurus/Translate';
import styles from "./index.module.css";

function Main({className}) {
  return (
    <div className={clsx(className, styles.box)}>
      <h2 className="lh1 mb16">
        <Translate id="slogan" description="slogan">
          Create Utility First CSS library for your project faster and easier.
        </Translate>
      </h2>
      <p className="fw500">
          <Translate
            id="slogan.sub"
            description="slogan subtitle"
          >
            {'适合的才是最好的！'}
          </Translate>
          <a className="ml16 vam" href="https://github.com/s-acss/sacss" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/stars/s-acss/sacss.svg?style=social" alt="github" />
          </a>
      </p>
    </div>
  )
}

export default Main;
