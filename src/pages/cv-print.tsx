import { Global } from '@emotion/react';
import React from 'react';
import { Helmet } from 'react-helmet';

import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import webIcon from '../assets/web.svg';
import { cv, EntityProps, Layout, Time } from '../components';

const printTitle = ({ title, company }: EntityProps) =>
  (company ? `${company} - ` : '') + title;

const CVPrint = () => (
  <>
    <Helmet>
      <title>{cv.name} - CV</title>
    </Helmet>
    <Layout>
      <div css={{ maxWidth: '180mm', margin: '2mm auto 0' }}>
        <h1>{cv.name}</h1>
        <ul
          css={{
            padding: 0,
            li: { listStyle: 'none' },
            a: {
              display: 'inline-flex',
              alignItems: 'center',
              margin: '1mm 0',
            },
            img: { width: '1em', height: '1em', marginRight: '1mm' },
          }}
        >
          <li>
            <a href={`tel:${cv.phone}`}>
              <img src={phoneIcon} /> {cv.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${cv.email}`}>
              <img src={emailIcon} /> {cv.email}
            </a>
          </li>
          <li>
            <a href={`https://${cv.website}`}>
              <img src={webIcon} /> {cv.website}
            </a>
          </li>
        </ul>

        <h2>Summary</h2>
        <p>{cv.summary}</p>

        <h2>Experience</h2>
        {cv.experiences.map((experience, experienceIndex) => (
          <React.Fragment key={experienceIndex}>
            {experience.content && (
              <div css={{ pageBreakInside: 'avoid' }}>
                <h3>{printTitle(experience)}</h3>
                {experience.time && (
                  <Time
                    {...experience.time}
                    hideLength={!experience.time.end}
                  />
                )}
                {experience.content}
                {experience.tags && (
                  <p>
                    {experience.tags.map((tag) => (
                      <React.Fragment key={tag}>
                        <span
                          css={{
                            fontSize: '0.8rem',
                            padding: '1mm 2.4mm',
                            background: '#DDD',
                            lineHeight: '1.6rem',
                            borderRadius: '9999pt',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tag}
                        </span>{' '}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            )}
            {experience.projects.map((project, projectIndex) => (
              <div key={projectIndex} css={{ pageBreakInside: 'avoid' }}>
                {experience.content ? (
                  <h5>{printTitle(project)}</h5>
                ) : (
                  <h3>{printTitle(project)}</h3>
                )}
                {project.time && (
                  <Time {...project.time} hideLength={!project.time.end} />
                )}
                {project.content}

                {project.tags && (
                  <p>
                    {project.tags.map((tag) => (
                      <React.Fragment key={tag}>
                        <span
                          css={{
                            fontSize: '0.8rem',
                            padding: '1mm 2.4mm',
                            background: '#DDD',
                            lineHeight: '1.6rem',
                            borderRadius: '9999pt',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tag}
                        </span>{' '}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}

        <h2>Education</h2>
        {cv.studies.map((experience, experienceIndex) => (
          <React.Fragment key={experienceIndex}>
            <h3>{printTitle(experience)}</h3>
            {experience.time && (
              <Time {...experience.time} hideLength={!experience.time.end} />
            )}
            {experience.content}
            {experience.keywords && <p>{experience.keywords}</p>}
          </React.Fragment>
        ))}
      </div>
    </Layout>
    <Global
      styles={{
        html: {
          backgroundColor: 'transparent',
          fontWeight: 400,
          fontSize: 16,
        },
        body: {
          color: '#000',
        },
        h2: {
          marginTop: '16mm',
          paddingBottom: '2mm',
          borderBottom: '1px solid #000',
        },
        h3: {
          marginTop: '8mm',
        },
        'h3 + span': {
          fontWeight: 400,
          fontSize: '0.9rem',
        },
        h5: {
          fontSize: 'inherit',
          marginBottom: '1mm',
        },
        'h5 + p': {
          marginTop: '0',
        },
        p: {
          fontSize: '1rem',
        },
      }}
    />
  </>
);

export default CVPrint;
