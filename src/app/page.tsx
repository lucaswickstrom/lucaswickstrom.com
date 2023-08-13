import { Header } from '@/components/Header';
import { Entity } from '@/components/Entity';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Metadata } from 'next';
import { cv } from '@/components/Cv';

import { Fragment } from 'react';
import { Container } from '@/components/Container';
import { Wrapper } from '@/components/Wrapper';

export const metadata: Metadata = {
  title: [cv.name, cv.headline].join(' - '),
  description:
    'A highly ambitious, humble and hard-working full-stack web developer living in Stockholm, Sweden specializing in building exceptional websites and applications.',
};

export default function Home() {
  return (
    <main className='max-w-[64rem] mx-auto p-4 sm:p-8 flex flex-col items-center'>
      <ThemeToggle className='self-end' />

      <div className='py-12 w-full'>
        <Header />

        {cv.experiences.map((experience, index) => (
          <Fragment key={experience.title.replace(' ', '-')}>
            <Entity
              {...experience}
              lineAbove
              lineBelow={index < cv.experiences.length - 1}
            />
            {experience.projects?.map((project) => (
              <Entity
                key={project.title.replace(' ', '-')}
                {...project}
                inside
                lineAbove={index < cv.experiences.length - 1}
                lineBelow={index < cv.experiences.length - 1}
              />
            ))}
          </Fragment>
        ))}

        <Container className='border-transparent'>
          <Wrapper>
            <div className='w-full border-b' />
          </Wrapper>
        </Container>

        {cv.studies.map((experience) => (
          <Fragment key={experience.title.replace(' ', '-')}>
            <Entity {...experience} />
            {experience.projects?.map((project) => (
              <Entity
                key={project.title.replace(' ', '-')}
                {...project}
                inside
              />
            ))}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
