export default function AiSupportProject() {
  return (
    <button
      className="project-card reveal"
      type="button"
      data-category="integration"
      data-project="ai-support"
      aria-label="Подробнее об ИИ-поддержке на Openfire и Zammad"
    >
      <span className="project-card-top">
        <span className="project-index">01 / AI & INTEGRATION</span>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </span>
      <span className="project-art art-ai-support" aria-hidden="true">
        <span className="ai-support-flow">
          <span>Openfire</span>
          <b>ИИ</b>
          <span>Zammad</span>
        </span>
        <span className="ai-support-caption">ДИАЛОГ · РЕШЕНИЕ · ЗАЯВКА</span>
      </span>
      <span className="project-content">
        <span className="project-status is-progress"><i /> НОВЫЙ ПРОЕКТ</span>
        <strong className="project-title">ИИ-поддержка: Openfire + Zammad</strong>
        <span className="project-description">
          ИИ отвечает пользователю вместо оператора и пытается решить проблему.
          Если решить её не удаётся, создаёт заявку в Zammad.
        </span>
        <span className="project-tags">
          <span>ИИ</span><span>Openfire / XMPP</span><span>Zammad</span>
        </span>
      </span>
    </button>
  );
}
