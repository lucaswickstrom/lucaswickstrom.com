import { ComponentProps } from 'react';
import polytopIcon from '@/assets/polytop.svg';
import napperIcon from '@/assets/napper.svg';
import laykeIcon from '@/assets/layke.svg';
import laykeAnalyticsIcon from '@/assets/layke-analytics.svg';
import liuIcon from '@/assets/liu.svg';
import nickamedIcon from '@/assets/nicknamed.svg';
import profilePhoto from '@/assets/profile.png';
import ssfIcon from '@/assets/ssf.svg';
import sveaIcon from '@/assets/svea.svg';
import tobeyIcon from '@/assets/tobey.svg';
import travsportIcon from '@/assets/travsport.svg';
import wellrIcon from '@/assets/wellr.svg';
import { Entity } from './Entity';
import { Github, Linkedin } from 'lucide-react';
import * as laykeAnalytics from '@/assets/layke-analytics';
import * as klubbschackse from '@/assets/klubbschackse';
import * as schackfyranOnline from '@/assets/schackfyran-online';
import * as schackse from '@/assets/schackse';
import * as sveacom from '@/assets/sveacom';
import * as wellr from '@/assets/wellr';
import * as yes2chess from '@/assets/yes2chess';
import * as tobey from '@/assets/tobey';
import * as napper from '@/assets/napper';

type Project = ComponentProps<typeof Entity>;
export type Experience = Project & { projects: Project[] };

const profile = {
  name: 'Lucas Wickström',
  headline: 'Freelance Web Developer @ Polytop AB',
  photo: profilePhoto,
  links: [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/lucaswickstrom/',
      Icon: Linkedin,
    },
    {
      name: 'Github',
      link: 'https://github.com/lucaswickstrom/',
      Icon: Github,
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
    company: 'Napper',
    title: 'React Native Developer',
    link: 'https://napper.app/',
    icon: napperIcon,
    time: { start: '2024-04-01' },
    content: (
      <p>
        Napper is a rapidly growing Swedish startup that helps parents improve
        their babies' sleep through AI-powered solutions. Their app has reached
        over a million parents worldwide and is an Apple Editors' Choice app. I
        work in the engineering team developing and improving the mobile
        application experience.
      </p>
    ),
    images: Object.values(napper),
    tags: ['React Native', 'TypeScript'],
    projects: [],
  },
  {
    title: 'Polytop',
    icon: polytopIcon,
    time: { start: '2018-12-20' },
    projects: [
      {
        company: 'Tobey Rentech',
        title: 'Co-founder and developer',
        link: 'https://tobey.io',
        icon: tobeyIcon,
        time: { start: '2022-07-01' },
        content: (
          <p>
            Tobey is a Swedish start-up company that operates within the tool
            and equipment rental industry. By using smart parcel boxes, smaller
            machines becomes more accessible for the craftsman. I am one of the
            founders.
          </p>
        ),
        images: Object.values(tobey),
        tags: [
          'TypeScript',
          'React Native',
          'Cloudflare Workers',
          'PostgreSQL',
          'Supabase',
          'Swish',
          'Bluetooth Low Energy',
        ],
      },

      {
        company: 'Sveriges Schackförbund',
        title: 'Full-Stack Web Developer',
        link: 'https://klubb.schack.se',
        icon: ssfIcon,
        time: { start: '2022-01-01', end: '2022-06-30' },
        content: (
          <p>
            The Swedish Chess Federation have for years collected chessclubs
            protocol and signatures by mail and scanned email. I helped them
            with a fully digital signing solution with onscreen drawing box and
            onetime links.
          </p>
        ),
        images: Object.values(klubbschackse),
        tags: [
          'TypeScript',
          'React.js',
          'Cloudflare Workers',
          'PostgreSQL',
          'Supabase',
        ],
      },

      {
        company: 'Layke Analytics',
        title: 'Web Developer',
        link: 'https://laykeanalytics.com/',
        icon: laykeAnalyticsIcon,
        time: { start: '2021-11-01', end: '2021-12-30' },
        content: (
          <p>
            Layke Analytics provides a tool for smart candidate search across
            different platforms. It uses artificial intelligence to make a
            search or sourcing process more efficient. I made a simple dashboard
            for viewing analytics, creating and handling candidate and job ads
            matches.
          </p>
        ),
        images: Object.values(laykeAnalytics),
        tags: ['React.js', 'TypeScript', 'MUI'],
      },
      {
        company: 'Svensk Travsport',
        title: 'Node Developer',
        link: 'https://travsport.se/',
        icon: travsportIcon,
        time: { start: '2021-05-01', end: '2021-10-31' },
        content: (
          <p>
            When the Swedish gaming monopoly was removed in 2019, Svensk
            Travsport had to take over services from the betting company ATG and
            adapt them to their own tech stack. In my team we are modernizing
            the flow of updating screens on the horse tracks with results and
            odds data. Challenges have consisted of having many dependencies and
            adapting to them, as well as working with old file formats.
          </p>
        ),
        tags: ['Node.js', 'Microservices', 'TypeScript', 'Jest', 'RabbitMQ'],
      },

      {
        company: 'Wellr',
        title: 'React Native Developer',
        link: 'https://wellr.se/',
        icon: wellrIcon,
        time: { start: '2020-09-10', end: '2021-02-28' },
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
        images: Object.values(wellr),
        tags: ['React Native', 'Redux', 'Sentry'],
      },

      {
        company: 'Schackfyran Online',
        title: 'Full-Stack Web Developer',
        link: 'https://play.schackfyran.se',
        icon: ssfIcon,
        iconAlt: 'Sveriges Schackförbund',
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
        images: Object.values(schackfyranOnline),
        tags: [
          'TypeScript',
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
    link: 'https://nicknamed.se/',
    icon: nickamedIcon,
    time: { start: '2018-06-01', end: '2021-03-31' },
    projects: [
      {
        company: 'Svea Ekonomi',
        title: 'Web Developer',
        link: 'https://www.svea.com/se/sv/foretag/betallosningar/betallosningar-for-e-handel/for-dig-som-handlat/',
        icon: sveaIcon,
        time: { start: '2019-10-25', end: '2021-03-31' },
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
            TypeScript, integrated accessibility checks with Storybook to our
            process and implemented tracking.
          </p>
        ),
        tags: [
          'TypeScript',
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
        icon: sveaIcon,
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
        images: Object.values(sveacom),
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
        title: 'Web Developer',
        icon: laykeIcon,
        time: { start: '2018-11-05', end: '2019-03-15' },
        content: (
          <p>
            I developed a dashboard with components for searching and
            aggregating tabular data combined with dynamic graphs.
          </p>
        ),
        tags: ['TypeScript', 'React.js', 'D3.js', 'Docker'],
      },

      {
        company: 'Svea Ekonomi',
        title: 'Web Developer',
        icon: sveaIcon,
        time: { start: '2018-06-01', end: '2018-11-04' },
        content: (
          <p>
            I built an animation and video heavy marketing website for an
            upcoming product.
          </p>
        ),
        tags: [
          'TypeScript',
          'React.js',
          'GatsbyJS',
          'SEO',
          'Adaptive Streaming',
        ],
      },
    ],
  },

  {
    company: 'Sveriges Schackförbund',
    title: 'Web Developer',
    link: 'https://schack.se/',
    icon: ssfIcon,
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
        images: Object.values(yes2chess),
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
        images: Object.values(schackse),
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
    icon: liuIcon,
    iconAlt: 'Linköping University',
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
