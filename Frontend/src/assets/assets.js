import p_img1 from './p_img1.jpg'
import p_img2 from './p_img2.jpg'
import p_img3 from './p_img3.jpg'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.jpg'

import logo from './logo.png'
import hero_img from './hero_img.png'
import dropdown_icon from './dropdown_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import menu_icon from './menu_icon.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'
import prof_img_1 from './prof_img_1.jpg'
import albert_e from './download.jpg'
import albert_ee from './downloa.jpg'
import albert_eee from './downlo.jpg'

export const assets = {
    prof_img_1,
    logo,
    hero_img,
    dropdown_icon,
    profile_icon,
    search_icon,
    menu_icon,
    contact_img,
    cross_icon,
    albert_e,
    albert_ee,
    albert_eee
}

export const projects = [
  { _id: 1,image:p_img1, videoUrl: 'https://www.youtube.com/embed/example1', title: 'Project Alpha',description: 'A web application for task management with real-time synchronization.' , ldescription: 'Project Alpha is a comprehensive task management web application designed to enhance productivity and collaboration. It allows users to create, assign, and track tasks in real-time with a seamless and intuitive user interface. Features include task prioritization, deadline reminders, and team collaboration tools.', link: '/projects/alpha' },
  { _id: 2,image:p_img2, videoUrl: 'https://www.youtube.com/embed/example2', title: 'Project Beta', description: 'An e-commerce platform for selling and buying products online.' ,ldescription: 'Project Beta is an advanced e-commerce platform that facilitates the buying and selling of products online. It provides a secure payment gateway, user-friendly shopping cart experience, and robust order management. The platform includes features like personalized recommendations, inventory tracking, and multi-vendor support.', link: '/projects/beta' },
  { _id: 3,image:p_img3, videoUrl: 'https://www.youtube.com/embed/example3', title: 'Project Gamma',description: 'A personal finance tracker to manage income, expenses, and budgets.', ldescription: 'Project Gamma is a personal finance tracking application that helps users manage their income, expenses, and budgets efficiently. It offers automated expense categorization, insightful financial reports, and goal-setting features to improve financial planning.', link: '/projects/gamma' },
  { _id: 4,image:p_img4, videoUrl: 'https://www.youtube.com/embed/example4', title: 'Project Delta',description: 'An e-commerce platform for selling and buying products online.', ldescription: 'Project Delta is a modern portfolio website builder that enables users to showcase their work in a visually appealing way. It includes customizable templates, responsive design, and integration with social media platforms to maximize online presence.', link: '/projects/delta' },
  { _id: 5,image:p_img5, videoUrl: 'https://www.youtube.com/embed/example5', title: 'Project Epsilon',description: 'An e-commerce platform for selling and buying products online.' ,ldescription: 'Project Epsilon is a social media application that allows users to share photos, interact with friends, and explore trending content. The platform supports real-time messaging, AI-driven content recommendations, and customizable privacy settings.', link: '/projects/epsilon' },
  { _id: 6,image:p_img1, videoUrl: 'https://www.youtube.com/embed/example6', title: 'Project Zeta',description: 'An e-commerce platform for selling and buying products online.', ldescription: 'Project Zeta is a real-time weather forecasting application that provides users with up-to-date weather conditions globally. It offers detailed weather analytics, severe weather alerts, and AI-driven predictions based on historical data.', link: '/projects/zeta' },
  { _id: 7,image:p_img2, videoUrl: 'https://www.youtube.com/embed/example7', title: 'Project Eta', ldescription: 'Project Eta is a movie recommendation system that suggests films based on user preferences and ratings. It leverages machine learning algorithms to analyze viewing history and predict suitable movie choices.', link: '/projects/eta' },
  { _id: 8,image:p_img3, videoUrl: 'https://www.youtube.com/embed/example8', title: 'Project Theta', ldescription: 'Project Theta is a fitness tracking application that integrates with wearable devices to monitor health metrics such as heart rate, step count, and calorie consumption. It provides users with personalized workout plans and progress reports.', link: '/projects/theta' },
  { _id: 9,image:p_img4, videoUrl: 'https://www.youtube.com/embed/example9', title: 'Project Iota', ldescription: 'Project Iota is an online learning platform designed to teach coding and web development. It includes interactive tutorials, coding challenges, and a collaborative learning environment.', link: '/projects/iota' },
  { _id: 10, image:p_img5, videoUrl: 'https://www.youtube.com/embed/example10', title: 'Project Kappa', ldescription: 'Project Kappa is a blogging platform that allows users to publish and share articles. It supports rich text editing, multimedia embedding, and audience engagement features like comments and likes.', link: '/projects/kappa' },
  { _id: 11, image:p_img1, videoUrl: 'https://www.youtube.com/embed/example11', title: 'Project Lambda', ldescription: 'Project Lambda is a project management tool designed for tracking team tasks and progress. It includes Kanban boards, time tracking, and team collaboration features.', link: '/projects/lambda' },
  { _id: 12, image:p_img2, videoUrl: 'https://www.youtube.com/embed/example12', title: 'Project Mu', ldescription: 'Project Mu is a scheduling application that helps users manage appointments and calendar events efficiently. It integrates with Google Calendar and sends reminders for upcoming meetings.', link: '/projects/mu' },
  { _id: 13, image:p_img3, videoUrl: 'https://www.youtube.com/embed/example13', title: 'Project Nu', ldescription: 'Project Nu is an online marketplace connecting freelancers with clients. It offers secure payment methods, job tracking, and client review systems.', link: '/projects/nu' },
  { _id: 14, image:p_img4, videoUrl: 'https://www.youtube.com/embed/example14', title: 'Project Xi', ldescription: 'Project Xi is a chat application that supports text, voice, and video communication with end-to-end encryption and group chat functionality.', link: '/projects/xi' },
  { _id: 15, image:p_img5, videoUrl: 'https://www.youtube.com/embed/example15', title: 'Project Omicron', ldescription: 'Project Omicron is a podcast platform where users can listen to and share podcasts. It supports episode bookmarking, offline listening, and creator subscriptions.', link: '/projects/omicron' },
  { _id: 16, image:p_img1, videoUrl: 'https://www.youtube.com/embed/example16', title: 'Project Pi', ldescription: 'Project Pi is a recipe sharing application where users can upload and discover cooking recipes. It features community-driven ratings, dietary filters, and ingredient shopping lists.', link: '/projects/pi' },
  { _id: 17, image:p_img2, videoUrl: 'https://www.youtube.com/embed/example17', title: 'Project Rho', ldescription: 'Project Rho is an AI-based image recognition app that identifies objects and landmarks in real time using deep learning algorithms.', link: '/projects/rho' },
  { _id: 18, image:p_img3, videoUrl: 'https://www.youtube.com/embed/example18', title: 'Project Sigma', ldescription: 'Project Sigma is a note-taking application supporting text, images, and voice memos. It integrates with cloud storage for easy access.', link: '/projects/sigma' },
  { _id: 19, image:p_img4, videoUrl: 'https://www.youtube.com/embed/example19', title: 'Project Tau', ldescription: 'Project Tau is a collaborative document editing tool for team projects. It includes version control and real-time editing features.', link: '/projects/tau' },
  { _id: 20, image:p_img5, videoUrl: 'https://www.youtube.com/embed/example20', title: 'Project Upsilon', ldescription: 'Project Upsilon is a travel planning app that helps users plan itineraries, book accommodations, and discover local attractions.', link: '/projects/upsilon' }
];

  
  
  