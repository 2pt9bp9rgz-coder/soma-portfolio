function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="page-heading-wrap page-heading-wrap--center about-heading-desktop">
        <span className="page-heading">{highlightFirstLetters("CONTACT")}</span>
        <span className="section-heading-dash" style={{ background: "#3f6ec9" }} />
      </div>

      <SectionPhotoHeading photo="images/contact-bg.jpg" title="CONTACT" subtitle="お問い合わせ" />

      <FadeUp as="p" className="contact-intro">
        ご依頼・コラボ・ご質問など、お気軽にご連絡ください。
      </FadeUp>

      <a className="contact-cta-btn" href="contact-form.html">
        お問い合わせはこちら →
      </a>
    </section>
  );
}
