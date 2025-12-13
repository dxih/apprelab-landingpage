export interface BlogSection {
  heading?: string;
  text?: string;
  image?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why apprelab™ Is the Future of Practical Tech Education",
    excerpt:
      "At apprelab™, we bridge the gap between theory and real-world experience. Students don’t just learn—they apply their knowledge on paid, supervised projects.",
    category: "Education",
    author: "Brendan Mebuge",
    date: "Dec 11, 2025",
    content: [
      {
        heading: "Bridging the Gap Between Learning and Doing",
        text: "Traditional learning often focuses on theory. apprelab™ takes it a step further by giving learners hands-on experience with real projects that pay."
      },
      {
        heading: "Hands-On Projects",
        text: "- Learners work on real client projects.\n- Mentors provide step-by-step guidance.\n- Students build a verified portfolio as they learn.",
        image: "https://images.unsplash.com/photo-1581093588401-99b03f79647d?auto=format&fit=crop&w=800&q=60"
      },
      {
        heading: "Why It Matters",
        text: "In a fast-paced tech world, employers want people who can produce results immediately. Learning without doing isn’t enough."
      },
      {
        heading: "Our Approach",
        text: "1. Micro-courses to teach skills quickly.\n2. Mentorship to guide learners.\n3. WorkLab projects to apply knowledge in real scenarios."
      },
      {
        text: "“Learning is not enough; application is key.” – apprelab™",
        image: "https://images.unsplash.com/photo-1601597115645-3a0d87e63c63?auto=format&fit=crop&w=800&q=60"
      },
    ],
  },

  {
    id: 2,
    title: "Introducing WorkLab Projects",
    excerpt:
      "WorkLab connects learners with real clients. Participants gain hands-on experience, mentorship, and verified portfolio pieces.",
    category: "Projects",
    author: "Chisom U.",
    date: "Dec 10, 2025",
    content: [
      {
        heading: "WorkLab: Real Clients, Real Experience",
        text: "WorkLab is apprelab’s practical learning platform where learners interact with paying clients."
      },
      {
        heading: "How It Works",
        text: "1. Learners apply for projects.\n2. Mentors guide and review deliverables.\n3. Students complete projects and earn credentials.",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60"
      },
      {
        heading: "Benefits for Learners",
        text: "- Build real portfolio pieces.\n- Gain confidence working with clients.\n- Receive mentorship on demand."
      },
      {
        heading: "Benefits for SMEs",
        text: "- Affordable, skilled workforce for projects.\n- Mentored outputs ensure high quality.\n- Access to emerging tech talent."
      },
      {
        text: "“Experience beats theory any day.” – apprelab™",
        image: "https://images.unsplash.com/photo-1581091215365-06de57f446b0?auto=format&fit=crop&w=800&q=60"
      },
    ],
  },

  {
    id: 3,
    title: "The Problem With Bootcamps Nobody Talks About",
    excerpt:
      "Most bootcamps stop at 'learning.' They don’t prepare students for the real pressures of professional work.",
    category: "Insights",
    author: "Debbie O.",
    date: "Dec 8, 2025",
    content: [
      {
        heading: "Why Bootcamps Fail",
        text: "Bootcamps teach skills quickly but often fail to teach how to apply them in real-world settings."
      },
      {
        heading: "Common Issues",
        text: "- No real client experience.\n- Lack of mentorship for real-world problems.\n- Portfolios often don’t reflect professional standards.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60"
      },
      {
        heading: "How apprelab™ Fixes This",
        text: "1. Mentorship-driven learning.\n2. Paid projects for real client experience.\n3. Building a portfolio that impresses recruiters."
      },
      {
        heading: "Key Takeaway",
        text: "Learning fast is good, but applying what you learn is better."
      },
      {
        text: "“Bootcamps give knowledge, we give experience.” – apprelab™",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
      },
    ],
  },
  {
  id: 4,
  title: "How Mentorship Accelerates Learning",
  excerpt:
    "Mentorship isn’t just guidance—it multiplies the impact of learning. Discover how apprelab™ mentors help learners fast-track skill acquisition and career readiness.",
  category: "Mentorship",
  author: "Brendan Mebuge",
  date: "Dec 6, 2025",
  content: [
    {
      heading: "The Role of Mentorship",
      text: "Mentors provide guidance, feedback, and real-world insights that textbooks alone can’t offer."
    },
    {
      heading: "Benefits for Learners",
      text: "- Personalized guidance based on skill level.\n- Avoid common mistakes.\n- Faster career progression.",
      image: "https://images.unsplash.com/photo-1581091870629-2f05a1d9ecb3?auto=format&fit=crop&w=800&q=60"
    },
    {
      heading: "Mentorship at apprelab™",
      text: "Every learner is paired with a mentor who monitors their progress, reviews work, and provides actionable feedback."
    },
    {
      text: "“Mentorship turns potential into performance.” – apprelab™",
      image: "https://images.unsplash.com/photo-1581093800964-8e7e4ec0c4c0?auto=format&fit=crop&w=800&q=60"
    },
  ],
},

{
  id: 5,
  title: "Micro-Courses That Actually Work",
  excerpt:
    "Not all learning modules are created equal. Our micro-courses deliver practical skills in bite-sized, immediately applicable chunks.",
  category: "Courses",
  author: "Chisom U.",
  date: "Dec 4, 2025",
  content: [
    {
      heading: "What Are Micro-Courses?",
      text: "Micro-courses are short, focused lessons that teach specific skills efficiently."
    },
    {
      heading: "Why They Work",
      text: "- Reduce cognitive overload.\n- Focus on actionable skills.\n- Learners can apply knowledge immediately.",
      image: "https://images.unsplash.com/photo-1573164574391-1c76e4f4b8f1?auto=format&fit=crop&w=800&q=60"
    },
    {
      heading: "Our Implementation",
      text: "Each micro-course includes interactive content, small projects, and mentorship to ensure skills are retained and applied."
    },
    {
      text: "“Learn fast, apply faster.” – apprelab™",
      image: "https://images.unsplash.com/photo-1601758123927-1b03e6c64d6f?auto=format&fit=crop&w=800&q=60"
    },
  ],
},

{
  id: 6,
  title: "Turning Theory Into Real-World Projects",
  excerpt:
    "Learning without application is incomplete. apprelab™ ensures learners move from concepts to practical, paid client projects seamlessly.",
  category: "Practical Learning",
  author: "Debbie O.",
  date: "Dec 2, 2025",
  content: [
    {
      heading: "The Gap Between Theory and Practice",
      text: "Many learners master theory but fail to implement it in real projects. This gap limits career growth."
    },
    {
      heading: "Our Solution",
      text: "- Real client projects.\n- Mentored delivery.\n- Portfolio-worthy outcomes.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60"
    },
    {
      heading: "Impact on Learners",
      text: "Students gain confidence, experience, and verified achievements that stand out to employers."
    },
    {
      text: "“Knowledge is power; applied knowledge is impact.” – apprelab™",
      image: "https://images.unsplash.com/photo-1532619187608-37a0a6b07c8d?auto=format&fit=crop&w=800&q=60"
    },
  ],
},

];
