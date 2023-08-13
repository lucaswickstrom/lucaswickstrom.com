import { twMerge } from 'tailwind-merge';
import { Circle } from './Circle';
import { Container } from './Container';
import { Wrapper } from './Wrapper';
import { ComponentProps, ReactNode } from 'react';
import { Time } from './Time';
import { Tags } from './Tags';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { EntityCarousel } from './EntityCarousel';

export const Entity = ({
  company,
  title,
  link,
  icon,
  iconAlt,
  time,
  content,
  images,
  tags,
  keywords,
  inside,
  lineAbove,
  lineBelow,
}: {
  company?: string;
  title: string;
  link?: string;
  icon?: ComponentProps<typeof Circle>['src'];
  iconAlt?: string;
  time?: ComponentProps<typeof Time>;
  content?: ReactNode;
  images?: StaticImageData[];
  tags?: ComponentProps<typeof Tags>['tags'];
  keywords?: string;
  inside?: boolean;
  lineAbove?: boolean;
  lineBelow?: boolean;
}) => {
  const Header = inside ? 'h3' : 'h2';
  const headerTitle = [company, title].filter(Boolean).join(' - ');

  return (
    <>
      <Container
        className={twMerge('relative', !lineAbove && 'border-transparent')}
      >
        {inside && (
          <div className='absolute border-l border-b border-foreground w-12 -mb-[calc(2rem] -left-[1px] top-0 h-20' />
        )}
        <Circle
          src={icon}
          alt={iconAlt || company || title}
          size={inside ? 'sm' : 'md'}
          className={twMerge('absolute -translate-x-1/2', inside && 'ml-12')}
        />
        <div
          className={twMerge(
            'w-full flex items-center',
            inside
              ? 'min-h-[4rem] pl-[4.5rem] md:pr-[4.5rem]'
              : 'min-h-[6rem] pl-10 md:pr-10',
          )}
        >
          <Wrapper>
            <Header>
              {link ? <Link href={link}>{headerTitle}</Link> : headerTitle}
            </Header>
            {time && <Time {...time} />}
          </Wrapper>
        </div>
      </Container>
      <Container
        className={twMerge('py-0', !lineBelow && 'border-l-transparent')}
      >
        {content && <Wrapper className='py-3'>{content}</Wrapper>}
        {images && (
          <Wrapper className='py-3'>
            <EntityCarousel data={images}>
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  src={image}
                  alt={`${company} ${(index + 1).toString().padStart(2, '0')}`}
                  height={256}
                  className='m-0 shadow cursor-pointer'
                />
              ))}
            </EntityCarousel>
          </Wrapper>
        )}
        {tags && (
          <Wrapper className='py-3'>
            <Tags tags={tags} />
          </Wrapper>
        )}
        {keywords && <Wrapper className='py-3'>{keywords}</Wrapper>}
      </Container>
    </>
  );
};
