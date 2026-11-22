# Shreya Sharma – Personal Portfolio Website

A modern, dynamic, responsive, and recruiter-focused personal portfolio website for **Shreya Sharma**, a BTech Computer Science Engineering student at GLA University, Mathura.

![Portfolio Banner Preview](public/favicon.svg)

---

## ✨ Key Features & Design Highlights

- **Dark Glassmorphism Theme**: Obsidian/Navy background (`#050711`) with subtle purple, blue, and cyan glow accents.
- **Dynamic Typing Effect**: Animated rotating headlines featuring Full Stack Developer, AI Enthusiast, and BTech CSE Student.
- **IIT Delhi Research Internship Showcase**: Dedicated visual breakdown of the *AI-Based T-Shirt Recommendation System* using OpenAI CLIP, LLaVA, dense image embeddings, and real-time Cosine Similarity search.
- **Interactive Project Cards**:
  - AI T-Shirt Recommendation System (IIT Delhi Research)
  - FoodSaathi (Smart Food Donation & Redistribution – MERN Stack)
  - NextHire (AI-Powered Job Recruitment Platform)
  - e-Seva India (Digital Citizen Public Service Portal)
- **Deep-Dive Architecture Modals**: Click "Architecture" on any project to view technical challenges, solutions, and key metrics.
- **Interactive Skills Grid**: Categorized filter tabs (All, Frontend, Backend & DB, AI & Multimodal, Languages, Tools) with proficiency levels and realistic icons.
- **Verified Certifications**: Detailed showcase of the 12-week NPTEL Management Information System (MIS) certification.
- **Academic Foundation**: Degree details, university context (GLA University, Mathura), and relevant computer science coursework.
- **Validated Contact Form**: Real-time field validation, direct clipboard copy for email, social links, and confetti celebration on submission.
- **Functional Resume System**: In-browser ATS resume preview modal plus direct printable / downloadable document generation (`Shreya_Sharma_Resume.html`).
- **Centralized Configuration**: All personal info, projects, links, and content are managed in a single file: `src/data/portfolioData.js`.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/si`, `react-icons/tb`, `react-icons/hi2`, `react-icons/vsc`, `react-icons/fa6`)
- **Interactive FX**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended, tested on Node v24)
- npm

### Installation & Local Development

```bash
# Clone or navigate to the repository
cd d:/portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Updating Content & Customization

All portfolio data is decoupled from the UI components and organized cleanly in:
`src/data/portfolioData.js`

To update your social links, project repositories, or skills:
1. Open `src/data/portfolioData.js`.
2. Update the fields under `personal`, `skills`, `experience`, `projects`, `certifications`, or `education`.
3. Save the file—Vite hot reloading will update the site instantaneously.

---

## 📄 License
This project is open-source and available for educational and personal showcase use.
