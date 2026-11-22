import { portfolioData } from '../data/portfolioData';

/**
 * Generates an ATS-compliant, recruiter-friendly formatted resume document
 * and triggers immediate download or print-to-PDF.
 */
export const downloadResume = () => {
  const { personal, experience, projects, skills, education, certifications } = portfolioData;

  const resumeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${personal.name} - Resume</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #1a202c;
      line-height: 1.5;
      padding: 30px;
      max-width: 850px;
      margin: 0 auto;
      background: #ffffff;
      font-size: 13px;
    }
    header {
      border-bottom: 2px solid #2d3748;
      padding-bottom: 12px;
      margin-bottom: 16px;
      text-align: center;
    }
    h1 {
      font-size: 26px;
      font-weight: 700;
      color: #0f172a;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .headline {
      font-size: 14px;
      color: #475569;
      font-weight: 600;
      margin-bottom: 6px;
    }
    .contact-line {
      font-size: 12px;
      color: #64748b;
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }
    .contact-line a {
      color: #2563eb;
      text-decoration: none;
    }
    section {
      margin-bottom: 16px;
    }
    h2 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #1e3a8a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 3px;
      margin-bottom: 8px;
    }
    .item {
      margin-bottom: 10px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .item-title {
      font-weight: 700;
      font-size: 13px;
      color: #0f172a;
    }
    .item-sub {
      font-style: italic;
      color: #475569;
      font-size: 12px;
    }
    .item-meta {
      font-size: 12px;
      color: #64748b;
      font-weight: 500;
    }
    ul {
      list-style-type: disc;
      padding-left: 18px;
      margin-top: 3px;
    }
    li {
      margin-bottom: 3px;
      color: #334155;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 6px;
      font-size: 12px;
    }
    .skills-cat {
      font-weight: 700;
      color: #1e293b;
    }
    .skills-val {
      color: #334155;
    }
    @media print {
      body { padding: 15px; font-size: 12px; }
      @page { margin: 0.5in; }
    }
  </style>
</head>
<body>
  <header>
    <h1>${personal.name}</h1>
    <div class="headline">${personal.title}</div>
    <div class="contact-line">
      <span>${personal.location}</span> •
      <span><a href="mailto:${personal.email}">${personal.email}</a></span> •
      <span><a href="${personal.linkedin}" target="_blank">LinkedIn</a></span> •
      <span><a href="${personal.github}" target="_blank">GitHub</a></span>
    </div>
  </header>

  <section>
    <h2>Education</h2>
    <div class="item">
      <div class="item-header">
        <span class="item-title">${education[0].degree}</span>
        <span class="item-meta">${education[0].status}</span>
      </div>
      <div class="item-header">
        <span class="item-sub">${education[0].institution}, ${education[0].location}</span>
      </div>
      <ul>
        <li><strong>Relevant Coursework:</strong> ${education[0].coursework.join(', ')}</li>
        <li>Active contributor to campus coding forums, technology events, and competitive problem-solving.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      <div class="skills-cat">Languages:</div>
      <div class="skills-val">Python, JavaScript (ES6+), Java (Basics), C/C++ Basics, HTML5, CSS3</div>
      <div class="skills-cat">Frontend:</div>
      <div class="skills-val">React.js, Tailwind CSS, Responsive Web Design, UI/UX Principles</div>
      <div class="skills-cat">Backend & DB:</div>
      <div class="skills-val">Node.js, Express.js, MongoDB, RESTful APIs, JWT Authentication</div>
      <div class="skills-cat">AI & Multimodal:</div>
      <div class="skills-val">OpenAI CLIP, LLaVA, Image Embeddings, Cosine Similarity, Vector Space Search</div>
      <div class="skills-cat">Developer Tools:</div>
      <div class="skills-val">Git, GitHub, VS Code, Postman, Linux Basics, Vite</div>
    </div>
  </section>

  <section>
    <h2>Internship Experience</h2>
    <div class="item">
      <div class="item-header">
        <span class="item-title">${experience[0].role} – ${experience[0].projectTitle}</span>
        <span class="item-meta">${experience[0].period}</span>
      </div>
      <div class="item-sub">${experience[0].organization} • ${experience[0].location}</div>
      <ul>
        ${experience[0].keyContributions.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>
  </section>

  <section>
    <h2>Featured Projects</h2>
    ${projects.map(p => `
      <div class="item">
        <div class="item-header">
          <span class="item-title">${p.title}</span>
          <span class="item-meta">${p.category}</span>
        </div>
        <div class="item-sub"><strong>Tech Stack:</strong> ${p.techStack.join(', ')}</div>
        <ul>
          <li>${p.summary}</li>
          ${p.features.slice(0, 2).map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </section>

  <section>
    <h2>Certifications</h2>
    <div class="item">
      <div class="item-header">
        <span class="item-title">${certifications[0].title}</span>
        <span class="item-meta">${certifications[0].duration}</span>
      </div>
      <div class="item-sub">${certifications[0].issuer} (${certifications[0].organization})</div>
      <ul>
        <li>Coursework in Enterprise Resource Planning (ERP), Data Modeling, Decision Support Systems & Strategic IT Alignment.</li>
      </ul>
    </div>
  </section>
</body>
</html>
  `;

  // Direct download of the real Shreya_Sharma_Resume.pdf
  const a = document.createElement('a');
  a.href = '/resume.pdf';
  a.download = 'Shreya_Sharma_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Also open in new window if user wants to view/print ATS version
  const blob = new Blob([resumeHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const printWindow = window.open(url, '_blank');
  if (printWindow) {
    printWindow.addEventListener('load', () => {
      setTimeout(() => printWindow.print(), 500);
    });
  }
};
