import Image from 'next/image';

import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Circle } from './Circle';
import { Container } from './Container';
import { cv } from './Cv';
import { Wrapper } from './Wrapper';

export const Header = () => (
  <>
    <Container className="border-0 p-0 relative">
      <div className="absolute top-24 left-0 w-1/2 h-24 border-t border-l border-foreground rounded-tl-2xl" />
      <div className="absolute top-24 left-1/2 w-screen h-24 border-t border-foreground border-dashed" />
      <Circle
        src={cv.photo}
        alt={cv.name}
        size="lg"
        className="mx-auto relative border-transparent"
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 border border-foreground pointer-events-none rounded-full border-halfdashed -rotate-45" />
    </Container>
    <Container className="py-3 flex justify-center">
      {cv.links.map(({ name, link, Icon }) => (
        <Link href={link} key={link} className="mx-1">
          <Icon />
          <span className="sr-only">{name}</span>
        </Link>
      ))}
    </Container>
    <Container className="py-3">
      <Wrapper>
        <h1>
          <span className="wave-animation">👋</span> {cv.title}
        </h1>
        <p>{cv.summary}</p>
      </Wrapper>
    </Container>
    <Container className="pt-3">
      <Wrapper className="flex flex-col space-y-1">
        <div>
          <Link href={`tel:${cv.phone}`} className="">
            <Phone className="mr-2 inline" />
            {cv.phone}
          </Link>
        </div>
        <div>
          <Link href={`mailto:${cv.email}`} className="">
            <Mail className="mr-2 inline" />
            {cv.email}
          </Link>
        </div>
      </Wrapper>
    </Container>
  </>
);
