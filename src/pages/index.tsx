import React from 'react';
import { Helmet } from 'react-helmet';

import emailIcon from '../assets/email.svg';
import imageIcon from '../assets/image.svg';
import laykeIcon from '../assets/layke.svg';
import liuIcon from '../assets/liu.svg';
import nickamedIcon from '../assets/nicknamed.svg';
import phoneIcon from '../assets/phone.svg';
import * as schackfyranOnlineImgs from '../assets/schackfyran-online';
import ssfIcon from '../assets/ssf.svg';
import sveaIcon from '../assets/svea.svg';
import * as wellrImgs from '../assets/wellr';
import wellrIcon from '../assets/wellr.svg';
import {
  Carousel,
  Company,
  Container,
  Job,
  Layout,
  Links,
  Profile,
  Tags,
  Time,
  Wrapper,
} from '../components';

const description = `
  I'm a highly ambitious, humble and hard-working full-stack web
  developer living in Stockholm, Sweden specializing in building
  (and occasionally designing) exceptional websites, applications,
  and everything in between.
`;

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Lucas Wickström - Freelance Web Developer @ Polytop</title>
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <Wrapper>
          <Profile />

          <Container line>
            <h1>Hi, I&apos;m Lucas</h1>
            <p>{description}</p>
            <div
              css={{
                a: {
                  display: 'inline-flex',
                  alignItems: 'center',
                  margin: '4px 0',
                },
                img: {
                  fontSize: '1.2rem',
                  width: '1em',
                  height: '1em',
                  marginRight: 4,
                },
              }}
            >
              <div>
                <a href="tel:0046730353177">
                  <img src={phoneIcon} alt="phone" />
                  +46 730 353 177
                </a>
              </div>
              <div>
                <a href="mailto:lucas@lucaswickstrom.com">
                  <img src={emailIcon} alt="email" />
                  lucas@lucaswickstrom.com
                </a>
              </div>
            </div>
          </Container>

          <Company line imgProps={{ icon: imageIcon, alt: 'Polytop' }}>
            <>
              <h2>Polytop</h2>
              <Time start={new Date('2019-12-20')} />
            </>
          </Company>

          <Job imgProps={{ icon: wellrIcon, alt: 'Wellr' }} line>
            <h3>
              <a href="https://wellr.se/">Wellr App</a>
            </h3>
            <Time start={new Date('2020-09-10')} />
          </Job>
          <Container line>
            <p>
              Wellr is a health solution that measures, evaluates and improves
              health and the working environment. I&apos;m maintaining their
              React Native app.
            </p>
          </Container>
          <Container line>
            <Carousel naturalSlideWidth={116 + 32} css={{ width: 116 + 32 }}>
              {Object.values(wellrImgs).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Wellr image ${index + 1}`}
                  height={252}
                  width={116}
                  css={{
                    height: '100%',
                    width: 'auto',
                    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.4)',
                  }}
                />
              ))}
            </Carousel>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['React Native', 'Redux']} />
            </Links>
          </Container>

          <Job imgProps={{ icon: ssfIcon, alt: 'Sveriges Schackförbund' }} line>
            <h3>
              <a href="https://play.schackfyran.se">Schackfyran online</a>
            </h3>
            <Time
              start={new Date('2020-03-10')}
              stop={new Date('2020-08-31')}
            />
          </Job>
          <Container line>
            <p>
              With the isolation due to covid-19 I further developed the Swedish
              Chess Federation&apos;s real time chess platform, Yes2Chess, to
              handle more types of tournaments and more players.
            </p>
          </Container>
          <Container line>
            <Carousel naturalSlideWidth={403 + 32} css={{ width: 403 + 32 }}>
              {Object.values(schackfyranOnlineImgs).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Schackfyran Online image ${index + 1}`}
                  height={252}
                  width={403}
                  css={{
                    height: '100%',
                    width: 'auto',
                    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.4)',
                  }}
                />
              ))}
            </Carousel>
          </Container>
          <Container line>
            <Links>
              <Links>
                <Tags
                  tags={[
                    'Node.js',
                    'Typescript',
                    'GraphQL',
                    'MongoDB',
                    'React.js',
                    'Redis',
                    'Next.js',
                  ]}
                />
              </Links>
            </Links>
          </Container>

          <Company line imgProps={{ icon: nickamedIcon, alt: 'Nicknamed' }}>
            <>
              <h2>
                <a href="https://nicknamed.se">Nicknamed</a>
              </h2>
              <Time start={new Date('2018-06-01')} />
            </>
          </Company>

          <Job imgProps={{ icon: sveaIcon, alt: 'Svea Ekonomi' }} line>
            <>
              <h3>
                <a href="https://www.svea.com/se/sv/foretag/betallosningar/betallosningar-for-e-handel/for-dig-som-handlat/">
                  Svea Ekonomi
                </a>
              </h3>
              <Time start={new Date('2019-10-25')} />
            </>
          </Job>
          <Container line>
            <p>
              At the online payment platform Svea WebPay, we worked agile, in
              cross-functional teams and I worked closely with UX, backenders
              and stakeholders. I was mainly active in two projects. A back
              office system for handling payment fraud, and a payment and order
              management web app for customers.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags
                tags={[
                  'Typescript',
                  'Vue.js',
                  'Vuex',
                  'Webpack',
                  'Storybook',
                  'Jest',
                  'i18n',
                  'a11y',
                  'Google Analytics',
                ]}
              />
            </Links>
          </Container>

          <Job imgProps={{ icon: sveaIcon, alt: 'Svea Ekonomi' }} line>
            <>
              <h3>
                <a href="https://www.svea.com">Svea Ekonomi</a>
              </h3>
              <Time
                start={new Date('2019-03-16')}
                stop={new Date('2019-08-31')}
              />
            </>
          </Job>
          <Container line>
            <p>
              Worked as a web developer in a cross-functional team at Svea
              marketing division. Added tracking for Svea’s services, optimized
              svea.com for SEO and launched sites for affiliates in other
              countries. Lead web development in a bigger design refreshment of
              svea.com due to a brand merge of Svea Ekonomi and Svea Bank. When
              the assignment ended we had collected 1237 pages under the same
              domain, conversion had grown by 20% and organic traffic was stable
              even despite fierce competition.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags
                tags={[
                  'Episerver',
                  'C#',
                  'AngularJS',
                  'Gulp',
                  'SEO',
                  'Google Tag Manager',
                  'Google Analytics',
                  'Google Search Console',
                ]}
              />
            </Links>
          </Container>

          <Job imgProps={{ icon: laykeIcon, alt: 'Layke' }} line>
            <>
              <h3>
                <a href="https://layke.io">Layke</a>
              </h3>
              <Time
                start={new Date('2018-11-05')}
                stop={new Date('2019-03-15')}
              />
            </>
          </Job>
          <Container line>
            <p>
              Developed a dashboard with components for searching and
              aggregating tabular data combined with dynamic graphs.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['Typescript', 'React.js', 'D3.js', 'Docker']} />
            </Links>
          </Container>

          <Job imgProps={{ icon: sveaIcon, alt: 'Svea Ekonomi' }} line>
            <>
              <h3>Svea Ekonomi</h3>
              <Time
                start={new Date('2018-06-01')}
                stop={new Date('2018-11-04')}
              />
            </>
          </Job>
          <Container line>
            <p>
              Built an animation and video heavy marketing website for an
              upcoming product.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags
                tags={[
                  'Typescript',
                  'React.js',
                  'GatsbyJS',
                  'SEO',
                  'Adaptive Streaming',
                ]}
              />
            </Links>
          </Container>

          <Company
            line
            imgProps={{ icon: ssfIcon, alt: 'Sveriges Schackförbund' }}
          >
            <>
              <h2>
                <a href="https://schack.se">Swedish Chess Federation</a>
              </h2>
              <Time
                start={new Date('2015-05-25')}
                stop={new Date('2018-05-31')}
              />
            </>
          </Company>
          <Container line>
            <p>
              At the Swedish Chess Federation I worked as a sole developer.
              Which meant that I had to work with the whole stack, from UX to
              devops. I was mainly working with three projects.
            </p>
          </Container>

          <Job line>
            <h3>
              <a href="https://yes2chess.se">Yes2Chess</a>
            </h3>
          </Job>
          <Container line>
            <p>
              A real time chess platform that I builded from the ground up. It
              is mainly used for the chess tournament with the same name, where
              schools from Sweden are competing online. During a year a total of
              4 000 kids representing 500 teams.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags
                tags={[
                  'Node.js',
                  'MongoDB',
                  'Polymer',
                  'Websocket',
                  'Mocha',
                  'Git',
                ]}
              />
            </Links>
          </Container>

          <Job line>
            <h3>
              <a href="https://member.schack.se">
                Member and tournament system
              </a>
            </h3>
          </Job>
          <Container line>
            <p>
              Administrating 40 000+ members, the backbone of the federation. I
              maintained and implemented e.g. a statistics module, a payment
              solution for tournaments via Stripe and a new RESTful API.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['Java', 'MySQL', 'jQuery', 'Stripe']} />
            </Links>
          </Container>

          <Job line>
            <h3>
              <a href="https://schack.se">Schack.se</a>
            </h3>
          </Job>
          <Container line>
            <p>
              I maintained the Swedish Chess Federation&apos;s website which had
              more than 10 000 daily pageviews.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['PHP', 'MySQL', 'Wordpress', 'jQuery']} />
            </Links>
          </Container>

          <Company line>
            <>
              <h2>Cloudlux</h2>
              <Time
                start={new Date('2010-05-25')}
                stop={new Date('2015-05-24')}
              />
            </>
          </Company>
          <Container>
            <p>
              During my universities studies I had a sole proprietorship where I
              took small web development jobs.
            </p>
          </Container>
          <Container>
            <Links>
              <Tags tags={['PHP', 'MySQL', 'Wordpress', 'jQuery', 'Polymer']} />
            </Links>
          </Container>

          <hr />

          <Company imgProps={{ icon: liuIcon, alt: 'Linköping University' }}>
            <>
              <h2>Institute of Technology: Linköping University</h2>
              <span>2011 - 2015</span>
            </>
          </Company>
          <Container>
            <p>Computer Science</p>
            <Links>Activities and Societies: D-Group, Flamman</Links>
          </Container>
        </Wrapper>
      </Layout>
    </>
  );
}
