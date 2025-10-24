import { Experience, Skill } from './types';

export const PERSONAL_INFO = {
    name: "Mahfuj Al Enam",
    tagline: "Experienced HR & Admin Specialist",
    email: "mahfuj.enam@example.com",
    linkedin: "https://www.linkedin.com/in/mahfujalenam",
    github: "https://github.com/mahfujalenam",
    cvPath: "./mahfuj_al_enam_cv.pdf",
    profilePhotoUrl: "https://drive.google.com/uc?export=view&id=14FTMoNuXgw7S_l1j0JfWRg8avfpCz7dA"
};

export const EXPERIENCE_DATA: Experience[] = [
    {
        company: "Renssoft Solutions Ltd",
        designation: "Senior HR Generalist",
        period: "Jan 2021 - Present",
        responsibilities: [
            "Managed full-cycle recruitment process, reducing time-to-hire by 25%.",
            "Developed and implemented HR policies and procedures in compliance with labor laws.",
            "Administered performance management systems and employee relations programs.",
            "Handled compensation and benefits administration and payroll processing.",
        ],
    },
    {
        company: "Fariha Group",
        designation: "Sr. Officer – HR & Admin",
        period: "Mar 2018 - Dec 2020",
        responsibilities: [
            "Coordinated recruitment and onboarding for new hires.",
            "Maintained HRIS and employee records with high accuracy.",
            "Assisted in developing training programs and employee engagement initiatives.",
            "Ensured compliance with health and safety regulations.",
        ],
    },
    {
        company: "Orr, Dignam & Co.",
        designation: "Executive – Admin & HR",
        period: "Jun 2016 - Feb 2018",
        responsibilities: [
            "Provided administrative support to the HR department.",
            "Handled office management, procurement, and vendor relations.",
            "Assisted with payroll and leave management.",
            "Organized company events and meetings.",
        ],
    },
];

export const SKILLS_DATA: Skill[] = [
    { name: "Recruitment & Talent Acquisition", proficiency: 95 },
    { name: "Performance Management", proficiency: 90 },
    { name: "HR Policies & Compliance", proficiency: 92 },
    { name: "Compensation & Benefits", proficiency: 88 },
    { name: "HRIS & People Analytics", proficiency: 85 },
    { name: "Labor Law & Employee Relations", proficiency: 93 },
    { name: "Training & Development", proficiency: 80 },
    { name: "Administrative Management", proficiency: 95 },
];

export const EDUCATION_DATA = [
    { degree: "Post Graduate Diploma in HRM", institution: "Bangladesh Institute of Management" },
    { degree: "Bachelor of Laws (LLB)", institution: "University of Dhaka" },
];