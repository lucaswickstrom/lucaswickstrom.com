import React from 'react';
import { Helmet } from 'react-helmet';

import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import {
  borderColor,
  Container,
  cv,
  Experiences,
  Layout,
  Wrapper,
} from '../components';

const photoSize = 192;
const border = `1px solid ${borderColor}`;

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          {cv.name} - {cv.headline}
        </title>
        <meta name="description" content={cv.summary} />
      </Helmet>
      <Layout>
        <Wrapper>
          <img
            src={cv.photo}
            alt="Lucas Wickström"
            css={{
              position: 'relative',
              border,
              borderRadius: '50%',
              marginTop: 96,
              marginBottom: -photoSize / 2,
              padding: 2,
            }}
            width={photoSize}
            height={photoSize}
          />
          <div
            css={{
              width: `calc(50% - ${photoSize}px / 2)`,
              borderTop: border,
              borderLeft: border,
              borderTopLeftRadius: '1rem',
              height: photoSize / 2 + 44,
              alignSelf: 'flex-start',
            }}
          />
          <Container
            line
            css={{
              textAlign: 'center',
              img: { margin: '-24px 8px 0' },
            }}
          >
            {cv.links.map(({ link, icon }) => (
              <a key={link} href={link}>
                <img {...icon} width={32} height={32} />
              </a>
            ))}
          </Container>

          <Container line>
            <h1>Hi, I&apos;m Lucas</h1>
            <p>{cv.summary}</p>
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
                <a href={`tel:${cv.phone}`}>
                  <img src={phoneIcon} alt="phone" />
                  {cv.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${cv.phone}`}>
                  <img src={emailIcon} alt="email" />
                  {cv.email}
                </a>
              </div>
            </div>
          </Container>

          <Experiences experiences={cv.experiences} />
          <hr />
          <Experiences experiences={cv.studies} noLine />
        </Wrapper>
      </Layout>
    </>
  );
}
