// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Not there yet but we can get somewhere!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please find my detailed Academic and Industry resumes below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-hello-world",
        
          title: "Hello World!",
        
        description: "This is my first blog on the page and the site is now live!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hello-world/";
          
        },
      },{id: "news-submitted-master-39-s-thesis-on-robot-adaptive-neural-inverse-kinematics",
          title: 'Submitted Master&amp;#39;s Thesis on Robot-adaptive Neural Inverse Kinematics.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_00/";
            },},{id: "news-completed-m-sc-in-informatics-at-tum-grade-1-9",
          title: 'Completed M.Sc. in Informatics at TUM (Grade: 1.9)',
          description: "",
          section: "News",},{id: "news-started-full-time-position-as-software-developer-at-kiutra-gmbh",
          title: 'Started full-time position as Software Developer at Kiutra GmbH.',
          description: "",
          section: "News",},{id: "projects-first-rl-project-dqn",
          title: 'First RL Project(DQN)',
          description: "Implementation of DQN, Double DQN, Duelling DQN and Double-Duelling DQN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_dqn_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/academic_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%6F%75%64%68%61%72%79%70%72%61%6D%6F%64%6B%75%6D%61%72%30%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pramodc08", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/pramodc08", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/pramodc08", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pramodc08", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
