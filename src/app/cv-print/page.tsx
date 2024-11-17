import { cv } from '@/components/Cv';
import { Time } from '@/components/Time';
import { Globe, Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

export const metadata: Metadata = {
  title: `${cv.name} - CV`,
};

export default function CvPrint() {
  return (
    <main>
      <div
        className={twMerge(
          'max-w-[180mm] mx-auto mt-[2mm] prose prose-h2:border-b prose-h2:border-foreground prose-h2:pb-1 prose-h2:mb-4 prose-p:text-sm prose-p:text-black',
        )}
      >
        <h1>{cv.name}</h1>
        <ul className="list-none p-0">
          {(
            [
              [`tel:${cv.phone}`, Phone, cv.phone],
              [`mailto:${cv.email}`, Mail, cv.email],
              [`https://${cv.website}`, Globe, cv.website],
            ] as const
          ).map(([href, Icon, title]) => (
            <li key={href} className="m-0">
              <Link href={href} className="flex items-center my-1">
                <Icon className="h-4 w-4 mr-1" />
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <h2>Summary</h2>
        <p>{cv.summary}</p>

        <h2>Experience</h2>
        {cv.experiences.map((experience) => (
          <Fragment key={experience.title.replace(' ', '-')}>
            {experience.content && (
              <div className="break-inside-avoid">
                <h3>
                  {[experience.company, experience.title]
                    .filter(Boolean)
                    .join(' - ')}
                </h3>
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
                      <Fragment key={tag}>
                        <span className="text-[0.8rem] px-[2.4mm] py-[1mm] bg-[#DDD] leading-[1.6rem] rounded-full whitespace-nowrap">
                          {tag}
                        </span>{' '}
                      </Fragment>
                    ))}
                  </p>
                )}
              </div>
            )}
            {experience.projects.map((project) => (
              <div
                key={project.title.replace(' ', '-')}
                className="break-inside-avoid"
              >
                {experience.content ? (
                  <h4>
                    {[project.company, project.title]
                      .filter(Boolean)
                      .join(' - ')}
                  </h4>
                ) : (
                  <h3>
                    {[project.company, project.title]
                      .filter(Boolean)
                      .join(' - ')}
                  </h3>
                )}
                {project.time && (
                  <Time
                    {...project.time}
                    hideLength={!project.time.end}
                    className="text-sm"
                  />
                )}
                {project.content}

                {project.tags && (
                  <p>
                    {project.tags.map((tag) => (
                      <Fragment key={tag}>
                        <span className="text-[0.8rem] px-[2.4mm] py-[1mm] bg-[#DDD] leading-[1.6rem] rounded-full whitespace-nowrap">
                          {tag}
                        </span>{' '}
                      </Fragment>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </Fragment>
        ))}

        <h2>Education</h2>
        {cv.studies.map((experience, experienceIndex) => (
          <Fragment key={experience.title.replace(' ', '-')}>
            <h3>
              {[experience.company, experience.title]
                .filter(Boolean)
                .join(' - ')}
            </h3>
            {experience.time && (
              <Time {...experience.time} hideLength={!experience.time.end} />
            )}
            {experience.content}
            {experience.keywords && <p>{experience.keywords}</p>}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
