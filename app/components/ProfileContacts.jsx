function ContactIcon({ children }) {
  return (
    <span className="contact-item-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

export default function ProfileContacts() {
  return (
    <div className="contact-items" aria-label="Контактная информация">
      <a className="contact-item contact-item-link" href="tel:931006699">
        <ContactIcon>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.3-1.35a2 2 0 0 1 2.1-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.9Z" />
        </ContactIcon>
        <span className="contact-item-text">
          <small>Телефон</small>
          <strong>931006699</strong>
        </span>
      </a>
      <a
        className="contact-item contact-item-link"
        href="https://t.me/Dustovodil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactIcon>
          <path d="m22 2-7.6 20-4-8.4L2 9.5 22 2Z" />
          <path d="m10.4 13.6 5.1-4.7" />
        </ContactIcon>
        <span className="contact-item-text">
          <small>Telegram</small>
          <strong>@Dustovodil</strong>
        </span>
      </a>
      <a
        className="contact-item contact-item-link"
        href="mailto:dustov.odil1999@mail.ru"
      >
        <ContactIcon>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </ContactIcon>
        <span className="contact-item-text">
          <small>Email</small>
          <strong>dustov.odil1999@mail.ru</strong>
        </span>
      </a>
      <div className="contact-item">
        <ContactIcon>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18M8 15h2M14 15h2" />
        </ContactIcon>
        <span className="contact-item-text">
          <small>Дата рождения</small>
          <strong><time dateTime="1999-08-10">10.08.1999</time></strong>
        </span>
      </div>
    </div>
  );
}
