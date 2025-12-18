import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: ImagePlaceholder;
  content: string; // Markdown content
}

const blogPosts: Omit<BlogPost, 'image'>[] = [
    {
        slug: 'effective-study-techniques',
        title: '7 Effective Study Techniques for Engineering Students',
        description: 'Discover proven methods to improve your learning retention and ace your exams. From active recall to the Feynman technique, we cover it all.',
        date: '2024-07-28',
        tags: ['Study Tips', 'Productivity'],
        content: `
## Introduction
Studying engineering can be demanding. Here are some techniques to help you learn more effectively.

### 1. Active Recall
Instead of passively reading your notes, actively try to recall information from memory. This strengthens neural pathways.

### 2. Spaced Repetition
Review material at increasing intervals. This technique leverages the spacing effect to improve long-term retention.

### 3. The Feynman Technique
Try to explain a concept in simple terms, as if you were teaching it to someone else. This reveals gaps in your understanding.

### 4. Pomodoro Technique
Work in focused 25-minute intervals, separated by short breaks. This helps maintain concentration and prevent burnout.

### 5. SQ3R Method
Survey, Question, Read, Recite, and Review. It's a comprehensive reading strategy for textbooks.

### 6. Mind Mapping
Visually organize information. This can help you see connections between different concepts.

### 7. Practice Problems
Consistently work through practice problems to apply theoretical knowledge and prepare for exams.
        `,
    },
    {
        slug: 'internship-guide',
        title: 'The Ultimate Guide to Landing a CSE Internship',
        description: 'A step-by-step guide to help you secure a valuable internship in the competitive tech industry. Build your resume, network, and nail the interview.',
        date: '2024-07-25',
        tags: ['Career', 'Internships'],
        content: `
## Your Internship Journey Starts Here
Landing an internship is a marathon, not a sprint. Here's how to approach it.

### 1. Build a Strong Resume
- Highlight projects (personal and academic).
- List relevant skills and technologies.
- Keep it to one page.

### 2. Create a Portfolio
A personal website or GitHub profile showcasing your projects is a must. It's proof of your skills.

### 3. Network, Network, Network
- Attend career fairs and tech meetups.
- Connect with recruiters and engineers on LinkedIn.
- Don't be afraid to ask for referrals.

### 4. Prepare for Technical Interviews
- Master data structures and algorithms.
- Use platforms like LeetCode and HackerRank.
- Practice mock interviews with peers.

### 5. The Behavioral Interview
Be prepared to talk about your projects, teamwork experience, and how you handle challenges. Use the STAR (Situation, Task, Action, Result) method.
        `,
    },
     {
        slug: 'choosing-your-path',
        title: 'Web Dev, AI, or DevOps? Choosing Your Path in CSE',
        description: 'The world of computer science is vast. This guide breaks down some of the most popular career tracks to help you find your passion.',
        date: '2024-07-22',
        tags: ['Career', 'Specialization'],
        content: `
## Navigating the Tech Landscape
With so many options, choosing a specialization can be overwhelming. Let's explore a few popular fields.

### 1. Web Development
- **What it is:** Building websites and web applications.
- **Tracks:** Frontend (React, Angular, Vue), Backend (Node.js, Django, Ruby on Rails), Full-stack.
- **Why it's great:** High demand, tangible results, and a vibrant community.

### 2. Artificial Intelligence & Machine Learning
- **What it is:** Creating systems that can learn and make decisions.
- **Tracks:** Data Science, Natural Language Processing (NLP), Computer Vision.
- **Why it's great:** Cutting-edge field with the potential to solve major world problems.

### 3. DevOps
- **What it is:** Bridging the gap between development and operations. Focuses on automation, CI/CD, and infrastructure.
- **Tools:** Docker, Kubernetes, Jenkins, Terraform.
- **Why it's great:** Crucial for modern software development, highly valued, and great for problem-solvers.

### How to Choose?
- **Experiment:** Build small projects in different areas.
- **Follow your curiosity:** What topics genuinely excite you?
- **Talk to people:** Reach out to professionals in fields that interest you.
        `,
    }
];

// This function simulates fetching blog posts and attaching placeholder images.
export function getBlogPosts(): BlogPost[] {
    const availableImages = PlaceHolderImages.filter(img => img.id.startsWith('blog-'));

    return blogPosts.map((post, index) => {
        // Cycle through available images
        const image = availableImages[index % availableImages.length] || PlaceHolderImages.find(img => img.id === 'hero-image')!;
        return {
            ...post,
            image,
        };
    });
}

export function getBlogPost(slug: string): BlogPost | undefined {
    return getBlogPosts().find(post => post.slug === slug);
}
