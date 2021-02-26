import React from 'react';

import { Entity, Experience, ExperienceWrapper, ProjectWrapper } from '.';

export const Experiences = ({
  experiences,
  noLine,
}: {
  experiences: Experience[];
  noLine?: boolean;
}) => (
  <>
    {experiences.map((experience, experienceIndex) => (
      <React.Fragment key={experienceIndex}>
        <Entity
          EntityComponent={ExperienceWrapper}
          {...experience}
          noLine={noLine}
          lastItem={
            experienceIndex === experiences.length - 1 &&
            !experience.projects.length
          }
        />
        {experience.projects.map((project, projectIndex) => (
          <Entity
            key={projectIndex}
            EntityComponent={ProjectWrapper}
            {...project}
            lastItem={
              experienceIndex === experiences.length - 1 &&
              projectIndex === experience.projects.length - 1
            }
          />
        ))}
      </React.Fragment>
    ))}
  </>
);
