import { cv } from '@/components/Cv';
import { Entity } from '@/components/Entity';
import { Header } from '@/components/Header';
import { ThemeToggle } from '@/components/ThemeToggle';
import type { Metadata } from 'next';

import { Container } from '@/components/Container';
import { Wrapper } from '@/components/Wrapper';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: [cv.name, cv.headline].join(' - '),
  description:
    'A highly ambitious, humble and hard-working full-stack web developer living in Stockholm, Sweden specializing in building exceptional websites and applications.',
};

export default function Home() {
  return (
    <main className="max-w-[64rem] mx-auto p-4 sm:p-8 flex flex-col items-center">
      <ThemeToggle className="self-end" />

      <div className="py-12 w-full">
        <Header />

        {cv.experiences.map((experience, experienceIndex) => (
          <Fragment key={`${experience.title}_${experienceIndex}`}>
            <Entity
              {...experience}
              lineAbove
              lineBelow={experienceIndex < cv.experiences.length - 1}
            />
            {experience.projects?.map((project, projectIndex) => (
              <Entity
                key={`${project.title}_${experienceIndex}_${projectIndex}`}
                {...project}
                inside
                lineAbove={experienceIndex < cv.experiences.length - 1}
                lineBelow={experienceIndex < cv.experiences.length - 1}
              />
            ))}
          </Fragment>
        ))}

        <Container className="border-transparent">
          <Wrapper>
            <div className="w-full border-b" />
          </Wrapper>
        </Container>

        {cv.studies.map((experience, experienceIndex) => (
          <Fragment key={experience.title.replace(' ', '-')}>
            <Entity {...experience} />
            {experience.projects?.map((project, projectIndex) => (
              <Entity
                key={`${project.title}_${experienceIndex}_${projectIndex}`}
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
