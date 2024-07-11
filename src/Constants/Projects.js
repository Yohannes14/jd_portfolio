import Ashewa from '../assets/ashewa.png';
import Awakilo from '../assets/awakilo.png';
import Aaron from '../assets/aaron.png';
import Food from '../assets/food.png';
export const Projects = [
    {
        id: '1',
        title: 'Ashewa: Online shopping App',
        description: 'Developed a multi-vendor eCommerce platform for buyers to browse, search, and purchase products from various vendors.',
        techs: ['React Native', 'Expo', 'Firebase', 'Apollo client(Apollo GraphQL)'],
        image: Ashewa,
        github:false,
        link: 'https://play.google.com/store/apps/details?id=com.ashewa.mobile'
    },
    {
        id: 'Awakilo',
        title: 'Awakilo',
        description: 'Developed website for coffee farmer, allowing them to access high quality information on farming best practices.',
        techs: ['React', 'Node.js', 'Express', 'TailwindCss'],
        image: Awakilo,
        github:false,
        link: 'https://www.awakilo.com/'
    },
    {
        id: '3',
        title: 'Aaron Habesha',
        description: 'Developed eCommerce website to selling habesha clothes.',
        techs: ['React Js', 'Firebase', 'Tailwind CSS'],
        image: Aaron,
        github:true,
        source: 'https://github.com/HabeshaLibs/frontend',
        link: 'https://aaronhabesh.com/'
    },
    {
        id: '3',
        title: 'Food Delivery App',
        description: 'Developed a user-friendly food delivery app that connects users with a variety of local restaurants',
        techs: ['React Native', 'Tailwind CSS'],
        image: Food,
        github:false,
        link: 'https://github.com/Yohannes14/food-delivery'
    },
    {
        id: '4',
        title: 'Emaye food Delivery App',
        description: 'Developed a location-based food delivery app that connects customers with nearby restaurants and food outlets. The app features real-time GPS tracking, an intuitive ordering process',
        techs: ['React Native', 'CSS', 'Expo', 'Firebase'],
        image: Food,
        github:false,
        link: 'https://github.com/Yohannes14/food-delivery'
    }
];