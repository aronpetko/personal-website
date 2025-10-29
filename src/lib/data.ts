import { Experience, Project } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Chess.com',
    position: 'Software Engineering Intern',
    startDate: 'May 2025',
    endDate: 'Aug. 2025',
    description: [
      'Developed 20+ analysis types within a distributed game analysis engine that classified players’ strengths and weaknesses using chess engine evaluations.',
      'Engineered Lua-based chess bots with fine-tuned weights for probabilistic decision-making, increasing player vs. bot satisfaction by 40%.',
      'Boosted daily game review usage by creating an extensible analysis system with customizable, coach-like feedback integrated with Google Sheets.',
      'Extended internal Python scripts to document analysis type changes and support multiple data formats.'
    ],
    technologies: ['Python', 'Lua', 'Google Sheets API', 'Distributed Systems', 'Data Pipelines']
  },
  {
    id: '2',
    company: 'State Farm',
    position: 'Software Engineering Intern',
    startDate: 'May 2024',
    endDate: 'Aug. 2024',
    description: [
      'Refactored a back-end insurance quoting API written in Gosu to follow SOLID principles, reducing technical debt and improving maintainability.',
      'Fixed 12 React front-end components and redesigned them for UX compliance, improving agent workflow efficiency.',
      'Implemented unit tests with Mockito to increase coverage by 20% and reduce production defect rates.'
    ],
    technologies: ['Gosu', 'React', 'Java', 'Mockito', 'API Design']
  },
  {
    id: '3',
    company: 'Entropy Client',
    position: 'Founder & Lead Developer',
    startDate: 'Jan. 2019',
    endDate: 'Present',
    description: [
      'Created advanced Minecraft modding software used by 70k+ users, generating enough gross profit to cover my college tuition.',
      'Developed and deployed a responsive website using Bootstrap, PHP, and MySQL on AWS EC2.',
      'Implemented C++ DLL injection with JNI for in-game features and designed an OpenGL GUI for customization.',
      'Led a 6-person team, building a custom ticketing system for customer support and issue resolution.'
    ],
    technologies: ['C++', 'Java', 'PHP', 'MySQL', 'Bootstrap', 'AWS EC2', 'OpenGL']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Integral Chess Engine',
    description: 'A top-10 chess engine using alpha/beta + minimax search and a multi-layer neural network. Several search algorithm innovations in Integral have been implemented in other strong engines, such as Stockfish.',
    technologies: ['c++', 'machine learning', 'python', 'rust', 'alpha/beta', 'minimax'],
    githubUrl: 'https://github.com/aronpetko/integral',
    liveUrl: 'https://lichess.org/@/IntegralBot',
    color: '#a8e6cf'
  },
  {
    id: '2',
    title: 'Entropy Client',
    description: 'Advanced minecraft modding software designed to improve the vanilla experience for players. It supports various features, including Aim Assist, ESP, and more. It is one of the most popular clients in Minecraft, serving 70k+ users.',
    technologies: ['c++', 'jni', 'reverse engineering', 'sql', 'php', 'bootstrap', 'js'],
    liveUrl: 'https://entropy.club',
    color: '#fff3b0'
  },
  {
    id: '3',
    title: 'Delta CDN',
    description: 'A content delivery network and anti-DDoS service for websites and web applications. The anti-DDoS protection is implemented using rate limiting and challenge/captcha verification, blocking 95% of modern ddos attack vectors.',
    technologies: ['go', 'mongodb', 'redis', 'html', 'css', 'js', 'nginx'],
    githubUrl: 'https://github.com/DeltaCDN/proxy',
    color: '#ffadad'
  },
  {
    id: '4',
    title: 'Vine Chess Engine',
    description: 'A strong chess engine implemented using Monte-Carlo Tree Search and key algorithmic improvements detailed in the Google AlphaZero paper. Vine is developed to produce diverse, stronger data for my stronger chess engine, Integral.',
    technologies: ['c++', 'monte-carlo tree search', 'machine learning'],
    githubUrl: 'https://github.com/vine-chess/vine',
    color: '#cdb4db'
  },
];