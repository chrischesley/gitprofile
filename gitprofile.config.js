// gitprofile.config.js

const config = {
  github: {
    username: 'chrischesley', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'christopher-chesley',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'chris@chesley.net',
  },
  resume: {
    fileUrl:
      'https://1drv.ms/w/s!AvhqjLtc5soPp2oW8bgYFAwcx1lC?e=JBujxx', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    ' ',
  ],
  experiences: [
    {
      company: 'Rise29',
      position: 'Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'Harris Teeter',
      position: 'Cashier',
      from: 'August 2019',
      to: 'January 2023',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Management Information Systems',
      from: '2020',
      to: '2024',
    },
    {

    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Home Network Diagram',
      description:
        'Presentation of my home network diagram. Consisting of all of the devices connected to my network and how they are connected.',
      link: 'https://drive.google.com/file/d/1pTMC1PoHixomF-NrPFJmmKxn9YEEmuh-/view?usp=sharing',
    },
    {
      title: 'Splunk Activity and Summary',
      description:
        'Looking at Splunk and an activity I completed',
      link: 'https://docs.google.com/document/d/1sqAAadokGVDGGHkMNRV7WB8CZYhPHV4E/edit?usp=sharing&ouid=114102016806308775570&rtpof=true&sd=true',
    },
    {
      title: 'Pitch Statement',
      description:
        'My pitch statement to companies',
      link: 'https://drive.google.com/file/d/1Qg9ty5y-qDhNCrNj5_J0MpTuawZFzYy6/view?usp=sharing',
    },
    {
      title: 'Final Project Report',
      description: 
        'A group project looking at an AT&T retail store in Morrisville, NC',
      link: 'https://docs.google.com/document/d/14poXFYA1QblZRDsyV6-pE8zY5cvtA4Og/edit?usp=sharing&ouid=114102016806308775570&rtpof=true&sd=true',
    },
      {
      title: 'Final Project Presentation',
      description: 
        'Our group project presentation',
      link: 'https://drive.google.com/file/d/1Hh_9v9Mp_-3VTES1pDaRmu7hY-wFFDq_/view?usp=sharing'
      },
    {
      title: 'TryHackMe Activity',
        description: 'Two activities I completed through TryHackMe',
      link: 'https://docs.google.com/document/d/1Umox7nLyijS3NvM4auM5gKNOOZ9eoDzt/edit?usp=sharing&ouid=114102016806308775570&rtpof=true&sd=true',
    },
    {
      title: 'TryHackMe SDLC Activity',
        description: 'SDLC Activity in TryHackMe',
      link: 'https://drive.google.com/file/d/16M_lCEv2V6CuG-sFtw7JiYpAMg6AOLvg/view?usp=sharing',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
