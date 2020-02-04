import Mock from "../mock";

const database = {
  information: {
    name: 'Riley Reid',
    aboutContent: "I am an Android Developer who loves to write code and stay up to date with the latest Android news. I enjoy experimenting with new technologies and I love to learn new skills.",
    age: 28,
    phone: '1-306-596-1010',
    nationality: 'Canadian',
    email: 'rreid112@gmail.com',
    address: 'Regina, SK, Canada',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/riley-reid-89784b66/',
      dribbble: '',
      github: 'https://github.com/reid112'
    },
    brandImage: '/images/headshot.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/resume.pdf'
  },
  skills: [
    {
      title: "Android SDK",
      value: 95
    },
    {
      title: "Kotlin",
      value: 95
    },
    {
      title: "Java",
      value: 90
    },
    {
      title: "Swift",
      value: 60
    },
    {
      title: "Javscript",
      value: 60
    },
    {
      title: "React",
      value: 60
    }
  ],
  projects: [
    {
      id: 1,
      title: "Fantasy Football Calculator",
      subtitle: "Android app to join mock fantasy drafts.",
      imageUrl: "/images/ffc-main.png",
      largeImageUrl: [
        "/images/ffc-1.webp",
        "/images/ffc-2.webp",
        "/images/ffc-3.webp",
        "/images/ffc-4.webp",
        "/images/ffc-5.webp",
        "/images/ffc-6.webp"
      ],
      url: 'https://play.google.com/store/apps/details?id=com.fantasyfootballcalculator.mobile&hl=en_CA'
    },
    {
      id: 2,
      title: "Twitter Client",
      subtitle: "A simple android twitter clone.",
      imageUrl: "/images/twitter-main.png",
      largeImageUrl: [
        "/images/twitter-1.png",
        "/images/twitter-2.png",
        "/images/twitter-3.png"
      ],
      url: 'https://github.com/reid112/TwitterClient'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Senior Android Developer",
        company: "Trov",
        details: "I am currently working at Trov as the sole Android developer on a new project that is currently not released.  My day to day consists of making architecture decisions, writing Kotlin code and attending meetings to help plan the future of the project.  I also have recently started to learn ios developement to help the ios team out."
      },
      {
        id: 2,
        year: "2016 - 2019",
        position: "Principal Android Developer",
        company: "GasBuddy",
        details: "Worked on a team of 6 Android developers on the GasBuddy app.  We implemented a lot of new features into the app in my 3 years on the team.  I lead the efforts in transitioning from Java to Kotlin."
      },
      {
        id: 3,
        year: "2013 - 2016",
        position: "Software Developer",
        company: "GasBuddy",
        details: "Worked on a small web team writing front-end web applications as well as creating backend software solutions.  This was part time work (30 hours/week) while completing my university degree."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2010-2015",
        graduation: "Bachelor of Science, Computer Science",
        university: "University of Regina",
        details: "Participated in the co-op program and completed four work terms that lasted four months each."
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['1-306-596-1010'],
    emailAddress: ['rreid112@gmail.com'],
    address: "Regina, SK, Canada"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/projects").reply(config => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});