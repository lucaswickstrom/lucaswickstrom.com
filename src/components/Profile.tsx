import React from 'react';

import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import profilePhoto from '../assets/profile.jpg';
import { borderColor, Container } from '.';

const size = 192;
const border = `1px solid ${borderColor}`;

export const Profile: React.FC = () => (
  <>
    <img
      src={profilePhoto}
      alt="Lucas Wickström"
      css={{
        position: 'relative',
        border,
        borderRadius: '50%',
        marginTop: 96,
        marginBottom: -size / 2,
        padding: 2,
      }}
      width={size}
      height={size}
    />
    <div
      css={{
        width: `calc(50% - ${size}px / 2)`,
        borderTop: border,
        borderLeft: border,
        borderTopLeftRadius: '1rem',
        height: size / 2 + 44,
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
      <a href="https://www.linkedin.com/in/lucaswickstrom/">
        <img src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
      </a>
      <a href="https://github.com/lucaswickstrom">
        <img src={githubIcon} alt="Github" width={32} height={32} />
      </a>
    </Container>
  </>
);
