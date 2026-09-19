export const Svg = ({ children, size = 20, className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...rest}
  >
    {children}
  </svg>
);

export const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Svg>
);

export const IconMail = (p) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Svg>
);

export const IconLinkedIn = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.2 8.4h3.5V21H3.2V8.4Zm5.7 0h3.35v1.72h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-6.44c0-1.54-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V21H8.9V8.4Z" />
  </svg>
);

export const IconPin = (p) => (
  <Svg {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const IconSparkle = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
    <path d="M18 16.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
  </Svg>
);

export const IconTooth = (p) => (
  <Svg {...p}>
    <path d="M12 2c2.2 0 3 1.2 4.8 1.2C18.6 3.2 20 4.6 20 7c0 2.6-1 4.2-1.4 6.6-.4 2.4-.5 7.4-2.3 7.4-1.6 0-1.3-5.6-4.3-5.6s-2.7 5.6-4.3 5.6c-1.8 0-1.9-5-2.3-7.4C5 11.2 4 9.6 4 7c0-2.4 1.4-3.8 3.2-3.8C9 3.2 9.8 2 12 2Z" />
  </Svg>
);

export const IconMenu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const IconChevronLeft = (p) => (
  <Svg {...p}>
    <path d="m15 18-6-6 6-6" />
  </Svg>
);

export const IconChevronRight = (p) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const IconStar = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
);

export const IconQuote = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M9 6c-3 1.4-4.6 3.8-4.8 7.2H7c1.7 0 2.8 1.1 2.8 2.7 0 1.6-1.2 2.8-2.9 2.8-2.2 0-3.9-1.9-3.9-5C3 9 5.1 5.6 8.5 4L9 6Zm11 0c-3 1.4-4.6 3.8-4.8 7.2H18c1.7 0 2.8 1.1 2.8 2.7 0 1.6-1.2 2.8-2.9 2.8-2.2 0-3.9-1.9-3.9-5C14 9 16.1 5.6 19.5 4L20 6Z" />
  </svg>
);

export const IconFacebook = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.5 1.6-1.5h1.6V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5V14h2.3v8h3.7Z" />
  </svg>
);

export const IconInstagram = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const ICONS = {
  phone: IconPhone,
  mail: IconMail,
  pin: IconPin,
  clock: IconClock,
  shield: IconShield,
  sparkle: IconSparkle,
  tooth: IconTooth,
};

export const IconChevronDown = (p) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);
