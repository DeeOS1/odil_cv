const resumes = [
  {
    title: "Мини-CV",
    description: "Кратко об опыте, навыках и образовании.",
    formats: [
      {
        label: "PDF",
        href: "/docs/odil-mini-cv.pdf",
        filename: "Мини_CV_Одил_Бегзода.pdf",
      },
      {
        label: "Word",
        href: "/docs/odil-mini-cv.docx",
        filename: "Мини_CV_Одил_Бегзода.docx",
      },
    ],
  },
  {
    title: "Полное CV",
    description: "Профессиональный профиль, опыт и технические навыки.",
    formats: [
      {
        label: "Word",
        href: "/docs/odil-full-cv.docx",
        filename: "CV_Одил_Бегзода_полное.docx",
      },
    ],
  },
  {
    title: "CV с проектами",
    description: "Подробные кейсы, результаты работы и технологии.",
    formats: [
      {
        label: "Word",
        href: "/docs/odil-projects-cv.docx",
        filename: "CV_Одил_Бегзода.docx",
      },
    ],
  },
];

export default function ResumeDownloads() {
  return (
    <div className="resume-downloads" id="resume" aria-labelledby="resume-title">
      <h3 id="resume-title">Выберите резюме</h3>
      <p className="resume-intro">Все версии доступны для скачивания.</p>
      <div className="resume-grid">
        {resumes.map((resume) => (
          <article className="resume-card" key={resume.title}>
            <h4>{resume.title}</h4>
            <p>{resume.description}</p>
            <div className="resume-formats">
              {resume.formats.map((format) => (
                <a
                  className="resume-download-link"
                  href={format.href}
                  download={format.filename}
                  aria-label={`Скачать ${resume.title} в формате ${format.label}`}
                  key={format.href}
                >
                  Скачать {format.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
