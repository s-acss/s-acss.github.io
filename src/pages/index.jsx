import React from 'react';
import 'sacss/index.css';
import Layout from '@theme/Layout';
import DLink from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageUse from '../components/HomepageUse';
import Main from "../components/Main";
import Demo from "../components/Demo";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout
      description={
        translate({
          message: 'Create Utility First CSS library for your project faster and easier.',
          description: '在 meta 标签中的描述'
        })
      }
    >
      <header className="pt32 container">
        <div className="row">
          <div className="col col--7">
            <Main />
          </div>
          <div className="col col--5">
            <Demo />
          </div>
        </div>
        <div className="tac mb16">
          <p className="mb8 fs40 fw700 mt16 mb8">
            React &nbsp;-&nbsp; VUE &nbsp;-&nbsp;  Svelte  &nbsp;-&nbsp;  Figma &nbsp;-&nbsp;  CSS &nbsp;-&nbsp; RN  &nbsp;
          </p>
          <div className="mt16 df jcc mb16">
            <HomepageUse  />
          </div>
          <Button Component={DLink} to="/docs/intro.about">
            <Translate id="start.button" description="开始">
              如此引入， 即刻开始
            </Translate>
          </Button>
        </div>
      </header>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
