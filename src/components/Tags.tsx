import Link from 'next/link';
import React, { Fragment } from 'react';

const tagsObject = {
  'React Native': 'https://reactnative.dev/',
  'Node.js': 'https://nodejs.org/',
  MongoDB: 'https://www.mongodb.com/',
  Redis: 'https://redis.io/',
  Polymer: 'https://www.polymer-project.org/',
  TypeScript: 'https://www.typescriptlang.org/',
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
  GatsbyJS: 'https://www.gatsbyjs.org/',
  'Next.js': 'https://nextjs.org/',
  'Adaptive Streaming': 'https://en.wikipedia.org/wiki/HTTP_Live_Streaming',
  Java: 'https://www.java.com/',
  MySQL: 'https://www.mysql.com/',
  jQuery: 'https://jquery.com/',
  PHP: 'https://www.php.net/',
  Wordpress: 'https://wordpress.org/',
  GraphQL: 'https://graphql.org/',
  Redux: 'https://redux.js.org/',
  Storybook: 'https://storybook.js.org/',
  Jest: 'https://jestjs.io/',
  i18n: 'https://en.wikipedia.org/wiki/Internationalization_and_localization',
  A11y: 'https://en.wikipedia.org/wiki/Computer_accessibility',
  Docker: 'https://www.docker.com/',
  'C#': 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  Gulp: 'https://gulpjs.com/',
  Websocket: 'https://sv.wikipedia.org/wiki/Websocket',
  Mocha: 'https://mochajs.org/',
  Git: 'https://git-scm.com/',
  Stripe: 'https://stripe.com/',
  Sentry: 'https://sentry.io/',
  'OpenID Connect': 'https://openid.net/connect/',
  Microservices: 'https://microservices.io/',
  RabbitMQ: 'https://www.rabbitmq.com/',
  MUI: 'https://mui.com/',
  'Cloudflare Workers': 'https://workers.cloudflare.com/',
  PostgreSQL: 'https://www.postgresql.org/',
  Supabase: 'https://supabase.com/',
  Swish: 'https://www.swish.nu/',
  'Bluetooth Low Energy': 'https://en.wikipedia.org/wiki/Bluetooth_Low_Energy',
  BankID: 'https://www.bankid.com/',
};

export type Tag = keyof typeof tagsObject;

export const Tags = ({ tags }: { tags: (keyof typeof tagsObject)[] }) => (
  <>
    {tags.map((key, index) => (
      <Fragment key={key}>
        {index ? ', ' : ''}
        <Link href={tagsObject[key]}>{key}</Link>
      </Fragment>
    ))}
  </>
);
