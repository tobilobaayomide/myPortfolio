const ContactSection = () => {
  return (
    <section id="contact" className="contact-modern">
      <div className="contact-container-modern">
        {/* Header */}
        <div className="contact-header-modern" data-aos="fade-up">
          <span className="contact-label">CONTACT</span>
          <h2 className="contact-page-title">Let's Work Together</h2>
        </div>

        {/* Split Layout: CTA + Form */}
        <div className="contact-split-layout">
          {/* Left Side - CTA Content */}
          <div className="contact-cta" data-aos="fade-right" data-aos-delay="100">
            <h3 className="cta-heading">Building the future, one project at a time.</h3>
            <p className="cta-description">
              I'm always excited to work on new projects and collaborate with passionate people. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            
            <div className="contact-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Quick Response</h4>
                  <p>Usually within 24 hours</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Clean, Modern Code</h4>
                  <p>Following best practices</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm1-17h-2v8h2v-8zm0 10h-2v2h2v-2z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Available for Projects</h4>
                  <p>Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="contact-form-modern" action="https://formsubmit.co/oyetunjitobiloba82@gmail.com" method="POST" data-aos="fade-left" data-aos-delay="200">
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://hunkymanie.vercel.app/" />
            
            <div className="form-row">
              <div className="form-group-modern">
                <label htmlFor="name" className="form-label-modern">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input-modern"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group-modern">
                <label htmlFor="email" className="form-label-modern">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input-modern"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="form-group-modern">
              <label htmlFor="message" className="form-label-modern">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input-modern form-textarea"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="contact-btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
