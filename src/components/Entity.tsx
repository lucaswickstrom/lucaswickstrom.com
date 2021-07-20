import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import {
  Carousel,
  Container,
  ExperienceWrapper,
  Links,
  Picture,
  ProjectWrapper,
  Tag,
  Tags,
  Time,
} from '.';

type Image = { src: string; alt: string };

export type EntityProps = {
  company?: string;
  title: string;
  link?: string;
  icon?: Image;
  time?: { start: string; end?: string; format?: 'year' | 'month' };
  content?: React.ReactNode;
  images?: Picture[];
  tags?: Tag[];
  keywords?: string;
};

const ConditionalWrap: React.FC<{
  condition: boolean;
  // eslint-disable-next-line no-unused-vars
  wrap: (children: React.ReactNode) => JSX.Element;
  // eslint-disable-next-line no-unused-vars
  or?: (children: React.ReactNode) => JSX.Element;
}> = ({ condition, wrap, or, children }) => (
  <>{condition ? wrap(children) : or ? or(children) : children}</>
);

export const Entity: React.FC<
  EntityProps & {
    EntityComponent: typeof ExperienceWrapper | typeof ProjectWrapper;
    lastItem?: boolean;
    noLine?: boolean;
  }
> = ({
  EntityComponent,
  lastItem,
  noLine,
  icon,
  link,
  company,
  title,
  time,
  content,
  images,
  tags,
  keywords,
  children,
}) => (
  <>
    <EntityComponent imgProps={icon} line={!noLine}>
      <ConditionalWrap
        condition={EntityComponent === ExperienceWrapper}
        wrap={(child) => <h2>{child}</h2>}
        or={(child) => <h3>{child}</h3>}
      >
        <ConditionalWrap
          condition={!!link}
          wrap={(child) => <OutboundLink href={link}>{child}</OutboundLink>}
        >
          {(company ? `${company} - ` : '') + title}
        </ConditionalWrap>
      </ConditionalWrap>

      {time && <Time {...time} />}
    </EntityComponent>
    {content && <Container line={!lastItem && !noLine}>{content}</Container>}
    {images && (
      <Container line={!lastItem && !noLine}>
        <Carousel
          naturalSlideWidth={images[0][0].width + 32}
          naturalSlideHeight={images[0][0].height}
          totalSlides={images.length}
        >
          {images.map((picture, index) => (
            <Picture
              key={picture[0].url}
              title={`${company} ${String(index + 1).padStart(2, '0')}`}
              picture={picture}
              height={images[0][0].height / 2}
              width={images[0][0].width / 2}
              css={{
                width: 'auto',
                height: 'auto',
                maxWidth: 'calc(100vw - 50px)',
                maxHeight: '100%',
                boxShadow: '0 2px 4px 0 rgba(0,0,0,0.4)',
                objectFit: 'contain',
              }}
            />
          ))}
        </Carousel>
      </Container>
    )}
    {tags && (
      <Container line={!lastItem && !noLine}>
        <Links>
          <Tags tags={tags} />
        </Links>
      </Container>
    )}
    {keywords && (
      <Container line={!lastItem && !noLine}>
        <Links>{keywords}</Links>
      </Container>
    )}
    {children}
  </>
);
