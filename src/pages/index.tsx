import React from 'react';
import { Helmet } from 'react-helmet';

import laykeIcon from '../assets/layke.svg';
import nickamedIcon from '../assets/nicknamed.svg';
import ssfIcon from '../assets/ssf.svg';
import sveaIcon from '../assets/svea.svg';
import wellrIcon from '../assets/wellr.svg';
import {
  // Ad,
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

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Lucas Wickström - Web developer</title>
      </Helmet>
      <Layout>
        <Wrapper>
          <Profile />

          <Container line>
            <h1>Hi, I&apos;m Lucas</h1>
            <p>
              I&apos;m a fullstack web developer living in Stockholm, Sweden
              specializing in building (and occasionally designing) exceptional
              websites, applications, and everything in between.
            </p>
          </Container>

          {/* <Container line>
          <Ad>
            <h3>Your project here?</h3>
            <p>
              Do you want to include me in your project? Get in touch at{' '}
              <a href="mailto:lucas@lucaswickstrom.com">
                lucas@lucaswickstrom.com
              </a>
            </p>
          </Ad>
        </Container> */}

          <Company>
            <>
              <h2>Polytop</h2>
              <Time start={new Date('2019-12-20')} />
            </>
          </Company>

          <Job line>
            <h3>
              <a href="https://prod.spela.schack.se">Schackfyran online</a>
            </h3>
            <Time start={new Date('2020-03-10')} />
          </Job>
          <Container line>
            <p>
              With the isolation due to covid-19 the Swedish Chess Federation
              ask me to futher develop the Yes2Chess platform to handle more
              types of tournaments with more players.
            </p>
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

          <Job icon={wellrIcon} line>
            <h3>
              <a href="https://wellr.se/">Wellr App</a>
            </h3>
            <Time start={new Date('2020-09-10')} />
          </Job>
          <Container line>
            <p>Maintaing this awesome health app</p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['React Native']} />
            </Links>
          </Container>

          <Company icon={nickamedIcon}>
            <>
              <h2>
                <a href="https://nicknamed.se">Nicknamed</a>
              </h2>
              <Time start={new Date('2018-06-01')} />
            </>
          </Company>

          <Job icon={sveaIcon} line>
            <>
              <h3>
                <a href="https://www.svea.com">Svea Ekonomi</a>
              </h3>
              <Time start={new Date('2019-10-25')} />
            </>
          </Job>
          <Container line>
            <p>
              Working with 2 projects on Svea WebPay. A back office system for
              handling payment fraud. And a payment and order management web app
              for customers.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['Typescript', 'Vue.js', 'Vuex', 'Webpack']} />
            </Links>
          </Container>

          <Job icon={sveaIcon} line>
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
              Helped Svea with a major design refresh of their marketing site
              svea.com.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags
                tags={[
                  'Episerver',
                  'AngularJS',
                  'SEO',
                  'Google Tag Manager',
                  'Google Analytics',
                  'Google Search Console',
                ]}
              />
            </Links>
          </Container>

          <Job icon={laykeIcon} line>
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
              Dashboard with components for searching and aggregating tabular
              data combined with dynamic graphs.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['Typescript', 'React.js', 'D3.js']} />
            </Links>
          </Container>

          <Job icon={sveaIcon} line>
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
              Built an animation and video heavy marketing website for a
              upcoming product.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags
                tags={[
                  'Typescript',
                  'React.js',
                  'Gatsby.js',
                  'SEO',
                  'Adaptive Streaming',
                ]}
              />
            </Links>
          </Container>

          <Company icon={ssfIcon}>
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

          <Job line>
            <h3>
              <a href="https://yes2chess.se">Yes2Chess</a>
            </h3>
          </Job>
          <Container line>
            <p>Realtime chess platform for Swedish students.</p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['Node.js', 'MongoDB', 'Polymer']} />
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
              Further development of existing systems, such as payment solution
              for tournaments and a new rest api.
            </p>
          </Container>
          <Container line>
            <Links>
              <Tags tags={['Java', 'MySQL', 'jQuery']} />
            </Links>
          </Container>

          <Job>
            <h3>
              <a href="https://schack.se">Schack.se</a>
            </h3>
          </Job>
          <Container>
            <p>
              Maintained the Swedish Chess Federation&apos;s website which has
              over 10,000 daily pageviews
            </p>
          </Container>
          <Container>
            <Links>
              <Tags tags={['PHP', 'MySQL', 'Wordpress', 'jQuery']} />
            </Links>
          </Container>
        </Wrapper>
      </Layout>
    </>
  );
}
