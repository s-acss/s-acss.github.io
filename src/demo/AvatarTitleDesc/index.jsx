import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <figure className="pt24 pb24 pr24 pl24 bc_000">
      <div className="bc_fff tac pt24 pb24 pl24 pr24 br8 mw480 mla mra">
        <img className="w128 h128 br100% db mla mra mb16" src={useBaseUrl('/img/avatar.jpg')} alt="avatar" width="128" height="128"/>
        <div className="mb16 tac pt8 pb8">
          <div>
            <p className="fs18 fw700 lh28 c_m"> "Tailwind CSS is the only framework that I've seen scale on large teams.
              It’s easy to customize, adapts to any design, and the build size is tiny."
            </p>
          </div>
        </div>
        <figcaption className="fs16 lh24 fw500">
          <div className="c_info">Sarah Dayan</div>
          <div className="c_s">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
}
