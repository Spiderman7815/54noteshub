export type Note = {
  id: string;
  title: string;
  description: string;
  driveId: string;
  isFolder: boolean;
};

function getDriveId(url: string): string {
  const fileIdRegex = /file\/d\/([a-zA-Z0-9_-]+)/;
  const folderIdRegex = /folders\/([a-zA-Z0-9_-]+)/;
  
  let match = url.match(fileIdRegex);
  if (match) return match[1];

  match = url.match(folderIdRegex);
  if (match) return match[1];
  
  const idRegex = /id=([a-zA-Z0-9_-]+)/;
  match = url.match(idRegex);
  if (match) return match[1];
  
  return '';
}

const rawNotes: { subject: string; url: string; description: string }[] = [
    { 
        subject: 'Digital Electronics',
        url: 'https://drive.google.com/file/d/1Cj8aHKzPuAn0D957A5QOudSSGGqlf9i2/view?usp=sharing',
        description: 'Fundamental concepts of digital circuits, logic gates, and systems.'
    },
    { 
        subject: 'Data Structures',
        url: 'https://drive.google.com/file/d/1V1-TtR2Ey3Wb9rrMfulHLcQRThK2GDNx/view?usp=sharing',
        description: 'Core concepts including arrays, linked lists, stacks, queues, trees, and graphs.'
    },
    { 
        subject: 'Computer Oriented Statistical Methods',
        url: 'https://drive.google.com/file/d/1_h2B1h-zsfvgLZRi7TlO69s0xu87HRdV/view?usp=sharing',
        description: 'Statistical methods and numerical techniques for computer science applications.'
    },
    { 
        subject: 'Computer Organization and Architecture',
        url: 'https://drive.google.com/drive/folders/1t3M47Bz799uBPR4Wn1_5QCP5NqadxNGS?usp=sharing',
        description: 'In-depth look at computer architecture, including CPU, memory, and I/O.'
    },
    { 
        subject: 'Object Oriented Programming through Java',
        url: 'https://drive.google.com/drive/folders/1vwQIcB_QfXAbU9hrsHceYiVNOc6zEt8z?usp=sharing',
        description: 'Learn object-oriented principles using the Java programming language.'
    },
    { 
        subject: 'Discrete Mathematics',
        url: 'https://drive.google.com/file/d/1-VrK3CzC6YyB4xPCILNOs74qZD5PV3B-/view?usp=sharing',
        description: 'Mathematical structures that are fundamentally discrete rather than continuous.'
    },
    { 
        subject: 'Business Economics & Financial Analysis',
        url: 'https://drive.google.com/file/d/1r5ghDmloxqm7ZjnctbswBdF4_mPEIO2N/view?usp=sharing',
        description: 'Principles of economics and financial analysis in a business context.'
    },
    { 
        subject: 'Operating Systems',
        url: 'https://drive.google.com/drive/folders/1c46G7kvpxK18mBLQaBmvG-6fSAFT5Dxd?usp=sharing',
        description: 'Process management, scheduling, memory handling, and file systems.'
    },
    { 
        subject: 'Database Management System',
        url: 'https://drive.google.com/file/d/1URIRNawk7HyuvKH3P5of8xNPejBm_dpl/view?usp=sharing',
        description: 'ER diagrams, normalization, SQL queries, and transaction management.'
    },
    { 
        subject: 'Software Engineering',
        url: 'https://drive.google.com/file/d/1_o24VDZEoBhI7RuYlfLB_ZZ6XO2318VS/view?usp=sharing',
        description: 'Systematic approach to the design, development, testing, and maintenance of software.'
    },
    { 
        subject: 'Design and Analysis of Algorithms',
        url: 'https://drive.google.com/file/d/1vc3B5-X9bHUVBqBZzt9GyIQ8a8fK_Y6Q/view?usp=sharing',
        description: 'Learn to design and analyze the efficiency of computer algorithms.'
    },
    { 
        subject: 'Computer Networks',
        url: 'https://drive.google.com/file/d/19dnyOB--f9BQ1mhQ7u4yaGgWDUcYlb9H/view?usp=sharing',
        description: 'Study of network protocols, architectures, and applications.'
    },
    { 
        subject: 'DevOps',
        url: 'https://drive.google.com/file/d/14Gi_N7oDqQgEm6A2siFkoMTkKFI25Jzx/view?usp=sharing',
        description: 'Practices that combine software development and IT operations.'
    },
    { 
        subject: 'Advanced Computer Architecture',
        url: 'https://drive.google.com/drive/folders/1t3M47Bz799uBPR4Wn1_5QCP5NqadxNGS?usp=sharing',
        description: 'Advanced topics in computer architecture, including parallel processing.'
    },
    { 
        subject: 'Data Analytics',
        url: 'https://drive.google.com/file/d/1dn53a4WYO6iYi01yZl9BD1TyBcZF5FEb/view?usp=sharing',
        description: 'Techniques and processes of data analysis to enhance productivity and business gain.'
    },
    { 
        subject: 'Image Processing',
        url: 'https://drive.google.com/file/d/1ib-d-JOPSFWzu10fRNtsLpS5V2qhPS0m/view?usp=sharing',
        description: 'Methods to perform operations on an image to get an enhanced image or extract useful information.'
    },
    { 
        subject: 'Computer Graphics',
        url: 'https://drive.google.com/file/d/1_V7qGNQdm8zUqaUdmHwCcero-Tn4HIql/view?usp=sharing',
        description: 'Creating images and models with the help of computer programming.'
    },
    { 
        subject: 'Python Programming',
        url: 'https://drive.google.com/file/d/1tO6zbS3wgm_eXSe0wtO4kq8KTZgAlTBk/view?usp=sharing',
        description: 'Learn one of the most popular and versatile programming languages.'
    },
    { 
        subject: 'Information Retrieval Systems',
        url: 'https://drive.google.com/file/d/1Cr0M5cKb35DcXgmMbhR0UucFuSveZnU7/view?usp=sharing',
        description: 'The science of searching for information in documents or databases.'
    },
    { 
        subject: 'Machine Learning',
        url: 'https://drive.google.com/drive/folders/1f6ULi2pEJfbjTzkKlcuZHc8m6BSPhsYL?usp=sharing',
        description: 'Algorithms and statistical models that computer systems use to perform tasks without explicit instructions.'
    },
    { 
        subject: 'Artificial Intelligence',
        url: 'https://drive.google.com/file/d/1wAtDZKs71OLC-Kto4gg2QT1YpF1_0Tkk/view?usp=sharing',
        description: 'The theory and development of computer systems able to perform tasks normally requiring human intelligence.'
    },
    { 
        subject: 'Cryptography and Network Security',
        url: 'https://drive.google.com/file/d/1vQRQENf4C0xKbx4QEAtpyezOgq2gxB8M/view?usp=sharing',
        description: 'Techniques for secure communication in the presence of third parties.'
    },
    { 
        subject: 'Compiler Design',
        url: 'https://drive.google.com/file/d/1-LgH7qL8IOcoH78vFIISBm-nWYqI0agl/view?usp=sharing',
        description: 'The design and implementation of compilers that translate high-level programming languages.'
    },
    { 
        subject: 'Cloud Computing',
        url: 'https://drive.google.com/file/d/1PVGByA1ZyqSGWfsA_5Qdm3x2gehfN8qq/view?usp=sharing',
        description: 'The delivery of computing services over the Internet.'
    },
    { 
        subject: 'Blockchain Technology',
        url: 'https://drive.google.com/file/d/1LC8lInDlQSZ3wHJQoEZCOT1DmyoLYRTx/view?usp=sharing',
        description: 'A distributed database that is shared among the nodes of a computer network.'
    },
    { 
        subject: 'Distributed Systems',
        url: 'https://drive.google.com/file/d/1ZuMVAKrqyNlUBsCeSG-z4MFO7uiIlihh/view?usp=sharing',
        description: 'A system whose components are located on different networked computers.'
    },
    { 
        subject: 'Human Computer Interaction',
        url: 'https://drive.google.com/file/d/1wORhlAEM6VU4UquxNU-yEVB98OIPkhsP/view?usp=sharing',
        description: 'The design and use of computer technology, focused on the interfaces between people and computers.'
    },
];

export const notes: Note[] = rawNotes
  .map((note, index) => {
    const isFolder = note.url.includes('/folders/');
    const driveId = getDriveId(note.url);
    if (!driveId) return null;
    return {
      id: `note-${index + 1}`,
      title: note.subject,
      description: note.description,
      driveId: driveId,
      isFolder: isFolder,
    };
  })
  .filter((note): note is Note => note !== null);

const rawCsmNotes: { subject: string; url: string; description: string }[] = [
    { subject: 'Mathematical and Statistical Foundations', url: 'https://drive.google.com/drive/folders/1yNHwMIc2gbJ0ub6cFByaEQriHEFM747O?usp=sharing', description: 'Core mathematical and statistical concepts for AI and ML.' },
    { subject: 'Data Structures', url: 'https://drive.google.com/file/d/1V1-TtR2Ey3Wb9rrMfulHLcQRThK2GDNx/view', description: 'Fundamental data structures for efficient data management.' },
    { subject: 'Computer Organization and Architecture', url: 'https://drive.google.com/drive/u/2/folders/1t3M47Bz799uBPR4Wn1_5QCP5NqadxNGS', description: 'Understanding the hardware and software interface of computer systems.' },
    { subject: 'Software Engineering', url: 'https://drive.google.com/file/d/1_o24VDZEoBhI7RuYlfLB_ZZ6XO2318VS/view', description: 'Methodologies for designing, developing, and maintaining software.' },
    { subject: 'Operating System', url: 'https://drive.google.com/drive/u/2/folders/1c46G7kvpxK18mBLQaBmvG-6fSAFT5Dxd', description: 'Core concepts of operating systems including processes, memory, and storage.' },
    { subject: 'Discrete Mathematics', url: 'https://drive.google.com/file/d/1-VrK3CzC6YyB4xPCILNOs74qZD5PV3B-/view', description: 'Essential mathematical structures for computer science.' },
    { subject: 'Automata Theory and Compiler Design', url: 'https://drive.google.com/drive/folders/1R0_AhAedymKx43HRFgtMHKNOXpLAFoBZ?usp=sharing', description: 'Formal languages, automata, and the principles of compiler construction.' },
    { subject: 'Database Management and System', url: 'https://drive.google.com/file/d/1NR8OGItBaOq1MVD1TZCAeIOZz685yfeP/view?usp=sharing', description: 'Concepts of database design, implementation, and management.' },
    { subject: 'Introduction to Artificial Intelligence', url: 'https://drive.google.com/drive/folders/1f66MSkXydOinIQhkB7prNYLG8hF5jdML?usp=sharing', description: 'Fundamental principles and techniques of artificial intelligence.' },
    { subject: 'Object Oriented Programming through Java', url: 'https://drive.google.com/drive/folders/1vwQIcB_QfXAbU9hrsHceYiVNOc6zEt8z?usp=sharing', description: 'Learning object-oriented programming concepts using Java.' },
    { subject: 'Design and Analysis of Algorithms', url: 'https://drive.google.com/file/d/1vc3B5-X9bHUVBqBZzt9GyIQ8a8fK_Y6Q/view?usp=sharing', description: 'Designing algorithms and analyzing their performance.' },
    { subject: 'Machine Learning', url: 'https://drive.google.com/drive/folders/1f6ULi2pEJfbjTzkKlcuZHc8m6BSPhsYL?usp=sharing', description: 'Core machine learning algorithms and their applications.' },
    { subject: 'Computer Networks', url: 'https://drive.google.com/file/d/19dnyOB--f9BQ1mhQ7u4yaGgWDUcYlb9H/view?usp=sharing', description: 'Principles of computer networking and communication protocols.' },
    { subject: 'Business Economics & Financial Analysis', url: 'https://drive.google.com/file/d/1r5ghDmloxqm7ZjnctbswBdF4_mPEIO2N/view?usp=sharing', description: 'Economic principles and financial analysis for business decisions.' },
    { subject: 'Web Programming', url: 'https://drive.google.com/file/d/1NT20EmySL0TgaC4smfo9_lW3rL2R-1QH/view?usp=sharing', description: 'Technologies for building dynamic web applications.' },
    { subject: 'Image Processing', url: 'https://drive.google.com/file/d/1ib-d-JOPSFWzu10fRNtsLpS5V2qhPS0m/view?usp=sharing', description: 'Techniques for processing and analyzing digital images.' },
    { subject: 'Computer Graphics', url: 'https://drive.google.com/file/d/1_V7qGNQdm8zUqaUdmHwCcero-Tn4HIql/view?usp=sharing', description: 'Algorithms and techniques for generating computer graphics.' },
    { subject: 'Knowledge Representation and Reasoning', url: 'https://drive.google.com/file/d/1GgVvc4YkesGA-C0pqIdQwFHyWPW1_39D/view?usp=sharing', description: 'Methods for representing knowledge and reasoning in AI systems.' },
    { subject: 'Data Analytics', url: 'https://drive.google.com/file/d/1dn53a4WYO6iYi01yZl9BD1TyBcZF5FEb/view?usp=sharing', description: 'Techniques for analyzing data to extract meaningful insights.' },
    { subject: 'Natural Language Processing', url: 'https://drive.google.com/file/d/1RiPQzrQ1AMRhvf-W5cApSQxhKrWAwkwf/view?usp=sharing', description: 'Enabling computers to understand and process human language.' },
    { subject: 'Software Testing Methodologies', url: 'https://drive.google.com/file/d/1Y4wz_hH-extYXPp3owBmjfC8NrPInCGj/view?usp=sharing', description: 'Principles and practices of software testing.' },
    { subject: 'Information Retrieval Systems', url: 'https://drive.google.com/file/d/1Cr0M5cKb35DcXgmMbhR0UucFuSveZnU7/view?usp=sharing', description: 'Systems for storing, searching, and retrieving information.' },
    { subject: 'Data Warehousing and Business Intelligence', url: 'https://drive.google.com/file/d/1DT-zUagDZGORYdDqRr6TsidD6d-TERDT/view?usp=sharing', description: 'Concepts and tools for data warehousing and business intelligence.' },
    { subject: 'Deep Learning', url: 'https://drive.google.com/file/d/1mimKbZ20ioosU5A3b18YRlxpGXwI_IJx/view?usp=sharing', description: 'Advanced machine learning using deep neural networks.' },
    { subject: 'Internet of Things', url: 'https://drive.google.com/file/d/1NnhTnzDqisTzVnZpx_-jd71L6nRO2mRk/view?usp=sharing', description: 'Connecting physical devices to the internet for data exchange.' },
    { subject: 'Data Mining', url: 'https://drive.google.com/drive/folders/1B68Ar2Bry8KZmkPYs9bvUp3VDUV4QSrt?usp=sharing', description: 'Discovering patterns in large data sets.' },
    { subject: 'Scripting Languages', url: 'https://drive.google.com/file/d/14fnN_FjclpNs7qJvizZrkrVHN3B7zKjk/view?usp=sharing', description: 'Languages for automating tasks and scripting system behaviors.' },
    { subject: 'Mobile Application Development', url: 'https://drive.google.com/file/d/18QrguUTfvQcxrA0EDxr5Xt5BQ13WEehK/view?usp=sharing', description: 'Developing applications for mobile devices.' },
    { subject: 'Cloud Computing', url: 'https://drive.google.com/file/d/1PVGByA1ZyqSGWfsA_5Qdm3x2gehfN8qq/view?usp=sharing', description: 'Delivering computing services over the internet.' },
    { subject: 'Web Programming Notes Set-2', url: 'https://drive.google.com/file/d/1PVGByA1ZyqSGWfsA_5Qdm3x2gehfN8qq/view?usp=sharing', description: 'Additional notes and resources for web programming.' },
];


export const csmNotes: Note[] = rawCsmNotes
  .map((note, index) => {
    const isFolder = note.url.includes('/folders/');
    const driveId = getDriveId(note.url);
    if (!driveId) return null;
    return {
      id: `csm-note-${index + 1}`,
      title: note.subject,
      description: note.description,
      driveId: driveId,
      isFolder: isFolder,
    };
  })
  .filter((note): note is Note => note !== null);
