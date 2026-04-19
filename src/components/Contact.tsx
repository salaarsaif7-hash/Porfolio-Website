import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          
          {/* Contact Info */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:saifullahhaneef233@gmail.com"
                data-cursor="disable"
              >
                saifullahhaneef233@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a
                href="tel:+923705206160"
                data-cursor="disable"
              >
                +92 370 5206160
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/salaarsaif7-hash"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="www.linkedin.com/in/saifullah-haneef-a78984317"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/saifullahmuhammadhaneef"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="https://wa.me/923705206160"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>

          </div>

          {/* Footer */}
          <div className="contact-box">
            <h5>
              <MdCopyright /> {new Date().getFullYear()} Saifullah Haneef
            </h5>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;