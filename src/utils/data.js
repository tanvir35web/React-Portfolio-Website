import frontendIcon from '../assets/frontend.png'
import designIcon from '../assets/design.png'
import toolsIcon from '../assets/tools.png'
import softSkillIcon from '../assets/soft-skills.png'


export const SKILLS = [
    {
        title: "Front-End",
        icon: frontendIcon,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3", percentage: "70%" },
            { skill: "Bootstrap", percentage: "70%" },
            { skill: "Tailwind CSS", percentage: "50%" },
            { skill: "JavaSCript", percentage: "65%" },
            { skill: "React.js", percentage: "60%" },
        ],
    },

    {
        title: "Design",
        icon: designIcon,
        skills: [
            { skill: "Adobe Illustrator", percentage: "90%" },
            { skill: "Adobe Photoshop", percentage: "80%" },
            { skill: "Adobe XD", percentage: "70%" },
            { skill: "Figma", percentage: "80%" },
            { skill: "CLO 3D", percentage: "85%" },
            { skill: "Browzwear VStitcher", percentage: "70%" },
            { skill: "Marvelous Designer", percentage: "80%" },
        ],
    },

    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            { skill: "Git & GitHub", percentage: "75%" },
            { skill: "VS Code", percentage: "80%" },
            { skill: "Webpack", percentage: "65%" },
            { skill: "Responsive Design", percentage: "80%" },
        ],
    },

    {
        title: "Soft Skills",
        icon: softSkillIcon,
        skills: [
            { skill: "Problem Solving", percentage: "65%" },
            { skill: "Collaboration", percentage: "80%" },
            { skill: "Office Program", percentage: "65%" },
            { skill: "Attention to Detail", percentage: "60%" },
        ],
    },
]