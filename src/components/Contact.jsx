import { useState, useRef } from 'react';
import linkedicon from '../components/Images/png/linkedin-ico.png';
import github from '../components/Images/png/github-ico.png';
import insta from '../components/Images/png/insta-ico.png';
import twitter from '../components/Images/png/twitter-ico.png';
import youtube from '../components/Images/png/yt-ico.png';
import downloadcv from '../components/Images/png/venkataraodamaresume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const msgRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzgyYka2NhUwYiGSR6OkO8I_RH0UsqB1oISfVTUpdvUxPygeg8Wb2A29TpvRC-R_nuf8g/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
      .then((response) => {
        msgRef.current.innerHTML = "Message Sent Successfully...";
        setTimeout(() => {
          msgRef.current.innerHTML = "";

          setFormData({ Name: '', Email: '', Message: '' });
        }, 5000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('Error in submitting the form.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container10">
          <div className="contact-left">
            <h1 className='abcd'>Contact Me</h1>
            <p className='abcd'>Venkatarao Dama</p>
            <p
              className="abc"
              style={{
                fontFamily: "sans-serif",
                fontSize: "large",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                whiteSpace: "nowrap"
              }}
            >
              <a href='mailto:venkataraodama660@gmail.com'><i className="fa-solid fa-envelope"></i>venkataraodama660@gmail.com</a>
            </p>

            <p className='abcd' style={{ cursor: 'pointer' }}>
              <a href='tel:9948598350' ><i className="fas fa-phone-square-alt"></i> 9948598350</a>
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/venkatarao.dama.90">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/Dama82829884">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/venkat_chowdary__18/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/dama-venkataraod/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/20KT1A0567">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <a
              href={downloadcv}
              download
              className="btn btn2"
              style={{
                backgroundColor: '#ff004f',
                fontFamily: 'sans-serif',
                color: 'white',
                marginTop: 10,
                marginLeft: 40
              }}
            >
              Download CV
            </a>
          </div>
          <div>
            <h2 className="heading heading-sec heading-sec__mb-med">
              <span className="heading-sec__main heading-sec__main--lt">
                Contact Form
              </span>
              <span className="heading-sec__sub heading-sec__sub--lt" id="c1">
                Feel free to contact me by submitting the form below,
                <br />
                and I will get back to you as soon as possible.
              </span>
            </h2>
            <div className="formvalues">
              <form
                className="contact__form"
                name="submit-to-google-sheet"
                onSubmit={handleSubmit}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="name">Name:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Name"
                          placeholder="Your Name"
                          required
                          value={formData.Name}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="email">Email:</label>
                      </td>
                      <td>
                        <input
                          type="email"
                          name="Email"
                          placeholder="Your Email"
                          required
                          value={formData.Email}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="message">Message:</label>
                      </td>
                      <td>
                        <textarea
                          name="Message"
                          rows="6"
                          placeholder="Your Message"
                          value={formData.Message}
                          onChange={handleChange}
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <button
                          type="submit"
                          className="btn btn2"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <span id="msg" ref={msgRef}></span>
              {status && <div className="error-message">{status}</div>}
            </div>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social Media</span>
              </h2>
              <div className="main-footer__social-cont">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dama-venkataraod/">
                  <img className="main-footer__icon" src={linkedicon} alt="LinkedIn" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/20KT1A0567">
                  <img className="main-footer__icon" src={github} alt="GitHub" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://x.com/Dama82829884">
                  <img className="main-footer__icon" src={twitter} alt="Twitter" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC4w-9kOFgr6XGgMJNKIXlrA">
                  <img className="main-footer__icon" src={youtube} alt="YouTube" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/venkat_chowdary__18/">
                  <img className="main-footer__icon main-footer__icon--mr-none" src={insta} alt="Instagram" />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h4 className="heading heading-sm text-lt">Venkatarao</h4>
              <p className="main-footer__short-desc">
                As a Java Full Stack Developer, I specialize in building end-to-end web applications using Java, Spring Boot for backend development, and React for frontend development. I have strong expertise in MySQL for database management and integrate RESTful APIs for seamless communication. With a focus on scalable, maintainable code, I ensure high-performance, user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
