
export interface AcademicLevel {
  title: string;
  description: string[];
}

export const academicLevels: AcademicLevel[] = [
  {
    title: "Primary School",
    description: [
      "Holistic foundation in literacy and numeracy.",
      "English Language and Mathematics in line with Ghana Education Service standards.",
      "Integrated Science and Social Studies to build inquiry skills.",
      "Creative Arts including Music and Art for balanced development.",
      "Religious & Moral Education rooted in Christian values.",
      "Physical Education to support health and wellbeing.",
      "Introduction to basic ICT skills.",
    ],
  },
  {
    title: "Junior High School (JHS)",
    description: [
      "BECE‑oriented curriculum focused on academic excellence.",
      "Core subjects including English, Mathematics, Integrated Science.",
      "Social Studies and Religious & Moral Education for character formation.",
      "ICT / Computer Studies exposure to digital literacy.",
      "Creative Arts and Physical Education for well‑rounded learners.",
      "Club activities and extracurriculars to build confidence.",
      "Continuous assessment aligned with national standards.",
    ],
  },
  {
    title: "Moral & Discipline Development",
    description: [
      "Faith‑based character building guided by the school motto, “Our Sufficiency is of God.”",
      "Daily devotionals and prayer sessions integrated into school routines.",
      "Values such as Respect, Integrity, Responsibility, and Teamwork emphasized.",
      "Community service and leadership activities that support student growth.",
      "Counseling and mentoring to nurture responsible citizens.",
    ],
  },
];

export interface AcademicProgramDetail {
  title: string;
  description: string[];
}

export interface AcademicSubject {
  name: string;
  overview: string;
}

export const academicsOverview = [
  "At El-Shaddai Prep. School & JHS in Suhum, Ghana, our academic program is rooted in strong Christian values and aligned with the Ghana Education Service Basic Education Curriculum.",
  "We prepare students from Primary through Junior High School (JHS), nurturing academic excellence, moral character, and lifelong learning.",
  "Our focus on character development, discipline, and spiritual formation complements a rigorous academic program to produce confident, responsible, and God-fearing leaders.",
];

export const academicPrograms: AcademicProgramDetail[] = [
  {
    title: "Primary School (Basic 1–6)",
    description: [
      
      "Creative Arts, Physical Education, and Religious & Moral Education to support whole-child development.",
      "Interactive teaching methods that engage curiosity and foster early literacy and numeracy.",
      "Supportive learning environment that builds confidence and prepares learners for JHS transition.",
    ],
  },
  {
    title: "Junior High School (JHS 1–3)",
    description: [
      "BECE-oriented academic curriculum designed for higher-order thinking and national exams.",
      "Core and complementary subjects including ICT, Modern Languages, and Creative Arts.",
      "Clubs and extracurricular activities to enhance leadership, teamwork, and problem-solving skills.",
      "Guided study and mentoring to reinforce academic growth and personal discipline.",
    ],
  },
  {
    title: "Character & Faith Integration",
    description: [
      "Daily devotionals and weekly chapel services deepen spiritual life and moral responsibility.",
      "Christian values such as honesty, respect, compassion, and service are integrated across subjects.",
      "Community service projects and mentoring opportunities support character formation.",
      "Counseling and pastoral guidance help students navigate academic challenges.",
    ],
  },
];

export const academicSubjects: AcademicSubject[] = [
  {
    name: "English Language",
    overview: "Developing effective listening, speaking, reading, and writing skills to support communication and comprehension."
  },
  {
    name: "Mathematics",
    overview: "Building logical thinking, problem solving, numeracy, and mathematical reasoning across grade levels."
  },
  {
    name: "Integrated Science",
    overview: "Exploring science concepts and practical thinking to understand the natural world."
  },
  {
    name: "Social Studies",
    overview: "Encouraging civic awareness, cultural understanding, and community participation."
  },
  {
    name: "Religious & Moral Education",
    overview: "Teaching biblical principles and moral reasoning to shape character and values."
  },
  {
    name: "Creative Arts & Physical Education",
    overview: "Supporting expression, creativity, and physical wellness through art, music, drama, and sports."
  },
];
