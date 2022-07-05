
import ProjectOne from '../../images/project1.jpg'
import ProjectTwo from '../../images/project2.jpg'
import ProjectThree from '../../images/project3.jpg'
import ProjectFour from '../../images/project4.jpg'

export const portfolioData = [
    {
        sectionId : 2,
        projectName : 'Today',
        projectLink : 'https://github.com/Elale1984/Today',
        image : ProjectOne,
    },
    {
        sectionId : 3,
        projectName : 'Better Weather',
        projectLink : 'https://github.com/Elale1984/BetterWeatherApp',
        image : ProjectTwo,
    },
    {
        sectionId : 4,
        projectName : 'MineSweep',
        projectLink : 'https://github.com/Elale1984/MineSweepGUI',
        image : ProjectThree,
    },
    {
        sectionId : 5,
        projectName : 'Portfolio Website',
        projectLink : 'https://github.com/Elale1984/react-portfolio-2022',
        image : ProjectFour,
    },
];

export const filterOptions = [
    {
        label : 'All',
        id : 1
    },
    {
        label : 'Android',
        id : 2
    },
    {
        label : 'Java',
        id : 3
    },
    {
        label : 'C#',
        id : 4
    },
    {
        label : 'React',
        id : 5
    }
]