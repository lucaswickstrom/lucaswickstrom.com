import React from 'react';

const tagsObject = {
  'React Native': 'https://reactnative.dev/',
  'Node.js': 'https://nodejs.org/',
  MongoDB: 'https://www.mongodb.com/',
  Redis: 'https://redis.io/',
  Polymer: 'https://www.polymer-project.org/',
  Typescript: 'https://www.typescriptlang.org/',
  'Vue.js': 'https://vuejs.org/',
  Vuex: 'https://vuex.vuejs.org/',
  Webpack: 'https://webpack.js.org/',
  Episerver: 'https://www.episerver.se/',
  AngularJS: 'https://angularjs.org/',
  SEO: 'https://en.wikipedia.org/wiki/Search_engine_optimization',
  'Google Tag Manager': 'https://tagmanager.google.com/',
  'Google Analytics': 'https://analytics.google.com/',
  'Google Search Console': 'https://search.google.com/search-console/about',
  'React.js': 'https://reactjs.org/',
  'D3.js': 'https://d3js.org/',
  'Gatsby.js': 'https://www.gatsbyjs.org/',
  'Next.js': 'https://nextjs.org/',
  'Adaptive Streaming': 'https://en.wikipedia.org/wiki/HTTP_Live_Streaming',
  Java: 'https://www.java.com/',
  MySQL: 'https://www.mysql.com/',
  jQuery: 'https://jquery.com/',
  PHP: 'https://www.php.net/',
  Wordpress: 'https://wordpress.org/',
  GraphQL: 'https://graphql.org/',
};

export const Tags: React.FC<{ tags: (keyof typeof tagsObject)[] }> = ({
  tags,
}) => (
  <>
    {tags.map((key, index) => (
      <>
        {index ? ', ' : ''}
        <a key={key} href={tagsObject[key]}>
          {key}
        </a>
      </>
    ))}
  </>
);
