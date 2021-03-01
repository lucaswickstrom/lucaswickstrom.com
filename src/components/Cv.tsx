import React from 'react';

import githubIcon from '../assets/github.svg';
import polytopIcon from '../assets/image.svg';
import laykeIcon from '../assets/layke.svg';
import linkedinIcon from '../assets/linkedin.svg';
import liuIcon from '../assets/liu.svg';
import nickamedIcon from '../assets/nicknamed.svg';
import profilePhoto from '../assets/profile.jpg';
import * as schackfyranOnlineImgs from '../assets/schackfyran-online';
import * as schackseImgs from '../assets/schackse';
import ssfIcon from '../assets/ssf.svg';
import sveaIcon from '../assets/svea.svg';
import * as sveacomImgs from '../assets/sveacom';
import * as wellrImgs from '../assets/wellr';
import wellrIcon from '../assets/wellr.svg';
import * as yes2chessImgs from '../assets/yes2chess';
import { EntityProps } from '.';

type Project = EntityProps;
export type Experience = EntityProps & { projects: Project[] };

const profile = {
  name: 'Lucas Wickström',
  headline: 'Freelance Web Developer @ Polytop AB',
  photo: profilePhoto,
  links: [
    {
      link: 'https://linkedin.com/in/lucaswickstrom/',
      icon: { src: linkedinIcon, alt: 'LinkedIn' },
    },
    {
      link: 'https://github.com/lucaswickstrom/',
      icon: { src: githubIcon, alt: 'Github' },
    },
  ],
  title: "Hi, I'm Lucas",
  summary: `
    I'm a highly ambitious, humble and hard-working full-stack web
    developer living in Stockholm, Sweden specializing in building
    (and occasionally designing) exceptional websites, applications,
    and everything in between.
  `,
  email: 'lucaswickstrom@gmail.com',
  phone: '+46 730 353 177',
  website: 'lucaswickstrom.com',
};

const experiences: Experience[] = [
  {
    title: 'Polytop',
    icon: { src: polytopIcon, alt: 'Polytop' },
    time: { start: '2018-12-20' },
    projects: [
      {
        company: 'Wellr',
        title: 'React Native Developer',
        link: 'https://wellr.se/',
        icon: { src: wellrIcon, alt: 'Wellr' },
        time: { start: '2020-09-10' },
        content: (
          <p>
            Wellr is a health concept measuring, evaluating and improving health
            and working environment. Central is the React Native app where the
            employee can track their challenges and compete with coworkers. My
            contribution has been an implementation of background
            synchronization to keep fitness data fresh. I also added Sentry to
            record app crashes and log exceptions.
          </p>
        ),
        images: Object.values(wellrImgs).map((src, index) => ({
          alt: `Wellr image ${index + 1}`,
          src,
        })),
        imagesSize: { width: 116, height: 252 },
        tags: ['React Native', 'Redux', 'Sentry'],
      },

      {
        company: 'Schackfyran Online',
        title: 'Full-Stack Web Developer',
        link: 'https://play.schackfyran.se',
        icon: { src: ssfIcon, alt: 'Sveriges Schackförbund' },
        time: { start: '2020-03-10', end: '2020-08-31' },
        content: (
          <p>
            With the isolation due to covid-19 the Swedish Chess Federation had
            to go online with their chess tournaments. Their current real time
            chess platform, Yes2Chess, only handled one type of tournament and
            there were questions about how the platform would perform with more
            players. To make it less tournament specific I rewrote the frontend.
            The in app cache was replaced with Redis as a cache and a pub-sub
            system to make it scalable. I also replaced the websocket solution
            with GraphQL subscriptions. The project was mainly for their biggest
            tournament, Schackfyran, reaching over 25&nbsp;000 fourth graders
            every year.
          </p>
        ),
        images: Object.values(schackfyranOnlineImgs).map((src, index) => ({
          alt: `Schackfyran Online image ${index + 1}`,
          src,
        })),
        imagesSize: { width: 403, height: 252 },
        tags: [
          'Typescript',
          'Node.js',
          'GraphQL',
          'Docker',
          'Redis',
          'MongoDB',
          'React.js',
          'Next.js',
        ],
      },
    ],
  },

  {
    title: 'Nicknamed',
    icon: { src: nickamedIcon, alt: 'Nicknamed' },
    time: { start: '2018-06-01' },
    projects: [
      {
        company: 'Svea Ekonomi',
        title: 'Web Developer',
        link:
          'https://www.svea.com/se/sv/foretag/betallosningar/betallosningar-for-e-handel/for-dig-som-handlat/',
        icon: { src: sveaIcon, alt: 'Svea Ekonomi' },
        time: { start: '2019-10-25' },
        content: (
          <p>
            I worked with two projects at the online payment platform Svea
            WebPay. A back office system for handling payment fraud and a web
            app for payment and order management. We worked agile in a
            cross-functional team and I worked closely with UX, QA, backenders
            and stakeholders. I was responsible for everything frontend, from
            applying new translations to implementing design systems. Multiple
            business areas were coordinated to one authentication service. I was
            responsible for handling our connection. During the projects I added
            Typescript, integrated accessibility checks with Storybook to our
            process and implemented tracking.
          </p>
        ),
        tags: [
          'Typescript',
          'Vue.js',
          'Vuex',
          'Webpack',
          'OpenID Connect',
          'Storybook',
          'Jest',
          'i18n',
          'A11y',
          'Google Analytics',
        ],
      },

      {
        company: 'Svea Ekonomi',
        title: 'Full-Stack Web Developer',
        link: 'https://www.svea.com/',
        icon: { src: sveaIcon, alt: 'Svea Ekonomi' },
        time: { start: '2019-03-16', end: '2019-08-31' },
        content: (
          <p>
            I worked as a web developer in a cross-functional team at Svea
            marketing division. I also added tracking for Svea’s services,
            optimized svea.com for SEO and launched sites for affiliates in
            other countries. In addition I lead web development in a bigger
            design refreshment of svea.com due to a brand merge of Svea Ekonomi
            and Svea Bank. When the assignment ended we had collected 1&nbsp;237
            pages under the same domain, conversion had grown by 20% and organic
            traffic was stable even despite fierce competition.
          </p>
        ),
        images: Object.values(sveacomImgs).map((src, index) => ({
          alt: `Svea.com image image ${index + 1}`,
          src,
        })),
        imagesSize: { width: 504, height: 252 },
        tags: [
          'Episerver',
          'C#',
          'AngularJS',
          'Gulp',
          'SEO',
          'Google Tag Manager',
          'Google Analytics',
          'Google Search Console',
        ],
      },

      {
        company: 'Layke',
        title: 'Lead Web Developer',
        icon: { src: laykeIcon, alt: 'Layke' },
        time: { start: '2018-11-05', end: '2019-03-15' },
        content: (
          <p>
            I developed a dashboard with components for searching and
            aggregating tabular data combined with dynamic graphs.
          </p>
        ),
        tags: ['Typescript', 'React.js', 'D3.js', 'Docker'],
      },

      {
        company: 'Svea Ekonomi',
        title: 'Web Developer',
        icon: { src: sveaIcon, alt: 'Svea Ekonomi' },
        time: { start: '2018-06-01', end: '2018-11-04' },
        content: (
          <p>
            I built an animation and video heavy marketing website for an
            upcoming product.
          </p>
        ),
        tags: [
          'Typescript',
          'React.js',
          'GatsbyJS',
          'SEO',
          'Adaptive Streaming',
        ],
      },
    ],
  },

  {
    company: 'Swedish Chess Federation',
    title: 'Web Developer',
    icon: { src: ssfIcon, alt: 'Sveriges Schackförbund' },
    time: { start: '2015-05-25', end: '2018-05-31' },
    content: (
      <p>
        At the Swedish Chess Federation I worked as a sole developer. Which
        meant that I was responsible for the whole stack, from UX to devops. I
        was mainly working with three projects:
      </p>
    ),
    projects: [
      {
        title: 'Yes2Chess',
        link: 'https://yes2chess.se/',
        content: (
          <p>
            A real time chess platform that I builded from the ground up. It is
            mainly used for the chess tournament with the same name, where
            schools from Sweden are competing online. Difficulties consisted of
            having an easy-to-use design for unfamiliar chess players and
            getting around schools firewalls. During a single year a total of
            4&nbsp;000 kids played more than 20&nbsp;000 games of chess.
          </p>
        ),
        images: Object.values(yes2chessImgs).map((src, index) => ({
          alt: `Yes2Chess image ${index + 1}`,
          src,
        })),
        imagesSize: { width: 403, height: 252 },
        tags: ['Node.js', 'MongoDB', 'Polymer', 'Websocket', 'Mocha', 'Git'],
      },

      {
        title: 'Member and tournament system',
        link: 'https://member.schack.se',
        content: (
          <p>
            Administrating 40&nbsp;000+ members, the backbone of the federation.
            I maintained and implemented e.g. a statistics module, a payment
            solution for tournaments via Stripe and a new RESTful API.
          </p>
        ),
        tags: ['Java', 'MySQL', 'jQuery', 'Stripe'],
      },

      {
        title: 'Schack.se',
        link: 'https://schack.se',
        content: (
          <p>
            I maintained the Swedish Chess Federation&apos;s website which had
            more than 10&nbsp;000 daily pageviews.
          </p>
        ),
        images: Object.values(schackseImgs).map((src, index) => ({
          alt: `Scahck.se image ${index + 1}`,
          src,
        })),
        imagesSize: { width: 403, height: 252 },
        tags: ['PHP', 'MySQL', 'Wordpress', 'jQuery'],
      },
    ],
  },

  {
    company: 'Cloudlux',
    title: 'Web Developer',
    time: { start: '2010-05-25', end: '2015-05-24' },
    content: (
      <p>
        During my university studies I had a sole proprietorship where I took
        small web development jobs.
      </p>
    ),
    tags: ['PHP', 'MySQL', 'Wordpress', 'jQuery', 'Polymer'],
    projects: [],
  },
];

const studies: Experience[] = [
  {
    title: 'Institute of Technology: Linköping University',
    icon: { src: liuIcon, alt: 'Linköping University' },
    time: { start: '2011-08-20', end: '2015-06-14', format: 'year' },
    content: <p>Computer Science</p>,
    keywords: 'Activities and Societies: D-Group, Flamman',
    projects: [],
  },
];

export const cv = {
  ...profile,
  experiences,
  studies,
} as const;
