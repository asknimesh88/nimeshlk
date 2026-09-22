import Image from "next/image";

const LINKS = {
  susl: "https://www.sab.ac.lk/staff-directory/472",
  scholar: "https://scholar.google.com/citations?user=KWfTLdUAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/D-N-Nimesh-Madushanka",
  upwork: "https://www.upwork.com/freelancers/nimeshmadushanka",
};

const NAV = [
  ["About", "#about"],
  ["Academic", "#academic"],
  ["Freelance", "#freelance"],
  ["Testimonials", "#testimonials"],
];

const PROFILES = [
  { href: LINKS.susl, icon: "/icons/susl-crest.png", name: "University profile", note: "Sabaragamuwa University of Sri Lanka" },
  { href: LINKS.scholar, icon: "/icons/googlescholar.svg", name: "Google Scholar", note: "Publications and citations" },
  { href: LINKS.researchgate, icon: "/icons/researchgate.svg", name: "ResearchGate", note: "Research network and papers" },
];

const PATH = [
  ["B.Sc. in Agricultural Sciences and Management", "Sabaragamuwa University of Sri Lanka"],
  ["M.Phil. in Animal Reproduction", "Postgraduate research"],
  ["Lecturer, Department of Livestock Production", "Faculty of Agricultural Sciences, SUSL"],
];

const SKILLS = [
  {
    title: "Academic",
    note: "Teaching and research",
    tone: "tone-sky",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2.5 9 2.5 12 0v-5" /><path d="M22 9v6" />
      </svg>
    ),
    items: ["Animal reproduction", "Livestock production", "Research methodology", "Academic writing", "Student mentoring"],
  },
  {
    title: "Technical",
    note: "Websites and servers",
    tone: "tone-sun",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /><path d="M14 4l-4 16" />
      </svg>
    ),
    items: ["WordPress", "Linux server administration", "LiteSpeed, Apache & Nginx", "Cloudflare DNS", "Website optimisation"],
  },
];

const svg = (children) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const SERVICES = [
  ["WordPress development", "Custom themes, plugin setup, site migrations and Core Web Vitals improvements.",
    svg(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 13h8M8 16h5" /></>)],
  ["Server administration", "Linux servers running LiteSpeed, Apache or Nginx, plus Cloudflare DNS, email routing and hosting management.",
    svg(<><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></>)],
  ["Speed & security", "Faster load times, hardened sites and clean DNS, so your website stays online and performs well.",
    svg(<><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M13 8l-3 4.5h4L11 17" /></>)],
];

const TECH = [
  ["WordPress", "wordpress.svg"], ["Linux", "linux.svg"], ["LiteSpeed", "litespeed.svg"], ["Cloudflare", "cloudflare.svg"],
  ["Apache", "apache.svg"], ["Nginx", "nginx.svg"], ["cPanel", "cpanel.svg"], ["DirectAdmin", "directadmin.png"],
];

const TESTIMONIALS = [
  ["Nimesh is amazing. He's my go-to guy for anything advanced on a website and I've referred him to others. I highly recommend him.", "Tracy"],
  ["Nimesh is the best webmaster we have ever had. We have seven figure e-commerce sites and he is an asset to any team.", "Jackson"],
  ["If you have advanced SEO tech issues causing dropped rankings, this is the guy. 10+ all the way around.", "William"],
  ["It's simple: if you don't want to waste time and money, Nimesh is the guy. Efficient, professional, easy to work with.", "Jose"],
  ["Very thorough and helpful in making sure I fully understood what we were doing and why. Extremely competent. A+.", "Dan"],
  ["Nimesh brought a lot of skill and advice to the task. Communication was professional and on point. He did exactly what I asked for.", "Marc"],
];

function Ext({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="Nimesh Madushanka, back to top">
            <span className="brand-mark" aria-hidden="true">N</span>Nimesh.lk
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {NAV.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="btn btn-small">Contact</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero wrap">
          <div className="hero-text">
            <p className="hero-role">Lecturer & Web Developer</p>
            <h1>Nimesh Madushanka</h1>
            <p className="lead">
              I teach animal reproduction and livestock production at Sabaragamuwa University of Sri Lanka,
              and I build, fix and speed up WordPress websites and servers for clients around the world.
            </p>
            <div className="actions">
              <a href="#contact" className="btn">Get in touch</a>
              <Ext href={LINKS.upwork} className="btn btn-ghost">Hire me on Upwork</Ext>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/nimesh-madushanka.jpg"
              alt="Nimesh Madushanka smiling, surrounded by sun conure parrots"
              width={2224}
              height={2224}
              priority
              sizes="(max-width: 860px) 90vw, 440px"
            />
          </div>
        </section>

        <section className="facts wrap" aria-label="Highlights">
          <dl>
            <div><dt>Top Rated</dt><dd>on Upwork</dd></div>
            <div><dt>15,000+</dt><dd>hours of client work</dd></div>
            <div><dt>170+</dt><dd>clients served</dd></div>
            <div><dt>M.Phil.</dt><dd>in Animal Reproduction</dd></div>
          </dl>
        </section>

        <section id="about" className="section wrap about">
          <div>
            <h2>Two careers, one standard of work</h2>
            <p>
              I'm a Lecturer in the Department of Livestock Production, Faculty of Agricultural Sciences,
              at Sabaragamuwa University of Sri Lanka. I hold a B.Sc. in Agricultural Sciences and Management
              and an M.Phil. in Animal Reproduction. I teach animal reproduction and livestock subjects, and I carry out research in the field.
            </p>
            <p>
              Alongside my academic work, I'm a web developer and server administrator. I specialise in WordPress and
              Linux, helping businesses keep their websites fast, secure and reliable.
            </p>
            <ol className="path" aria-label="Education and career">
              {PATH.map(([title, where]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{where}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="skills">
            {SKILLS.map((s) => (
              <div key={s.title} className={`skill-panel ${s.tone}`}>
                <div className="skill-head">
                  <span className="skill-icon" aria-hidden="true">{s.icon}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.note}</p>
                  </div>
                </div>
                <ul className="tags">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="academic" className="section academic">
          <div className="wrap split">
            <div>
              <p className="kicker">Academic career</p>
              <h2>Research and teaching</h2>
              <p>
                At the Department of Livestock Production, I teach animal reproduction and related livestock
                subjects to undergraduate students, and contribute to the field through research.
              </p>
              <h3 className="small-head">Research areas</h3>
              <ul className="chips">
                <li>Large animal reproduction</li><li>Follicular development</li>
                <li>Reproductive biology</li><li>Livestock</li>
              </ul>
            </div>
            <ul className="profiles">
              {PROFILES.map((p) => (
                <li key={p.href}>
                  <Ext href={p.href} className="profile">
                    <Image src={p.icon} alt="" width={44} height={44} />
                    <span>
                      <strong>{p.name}</strong>
                      <span>{p.note}</span>
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg>
                  </Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="freelance" className="section freelance">
          <div className="wrap">
            <p className="kicker">Freelance work</p>
            <div className="freelance-head">
              <h2>WordPress and server administration</h2>
              <Ext href={LINKS.upwork} className="btn">
                <Image src="/icons/upwork.svg" alt="" width={20} height={20} className="invert" />
                Hire me on Upwork
              </Ext>
            </div>
            <div className="services">
              {SERVICES.map(([name, text, icon]) => (
                <div key={name} className="service-card">
                  <span className="service-icon">{icon}</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <h3 className="small-head">Technologies I work with</h3>
            <ul className="tech">
              {TECH.map(([name, icon]) => (
                <li key={name}>
                  {icon && <Image src={`/icons/${icon}`} alt="" width={22} height={22} className="invert" />}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="testimonials" className="section testimonials">
          <div className="wrap">
            <div className="quotes-head">
              <div>
                <h2>What clients say</h2>
                <p className="sub">Five-star reviews from clients on Upwork.</p>
              </div>
              <Ext href={LINKS.upwork} className="btn btn-ghost">See all reviews on Upwork</Ext>
            </div>
            <div className="quotes">
              {TESTIMONIALS.map(([quote, name]) => (
                <figure key={name} className="quote-card">
                  <div className="stars" role="img" aria-label="Rated 5 out of 5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="currentColor" />
                      </svg>
                    ))}
                  </div>
                  <blockquote>â€œ{quote}â€</blockquote>
                  <figcaption>
                    <span className="avatar" aria-hidden="true">{name[0]}</span>
                    <span>
                      <strong>{name}</strong>
                      <span>Upwork client</span>
                    </span>
                    <Image src="/icons/upwork.svg" alt="" width={22} height={22} className="quote-src" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Let's work together</h2>
            <p>Need help with a website or server, or want to talk about livestock research? Send me an email.</p>
            <div className="emails">
              <a href="mailto:nimesh@bestworkers.biz">nimesh@bestworkers.biz</a>
              <a href="mailto:nimesh@agri.sab.ac.lk">nimesh@agri.sab.ac.lk</a>
            </div>
            <ul className="social">
              {[...PROFILES, { href: LINKS.upwork, icon: "/icons/upwork.svg", name: "Upwork" }].map((p) => (
                <li key={p.href}>
                  <Ext href={p.href}>
                    <Image src={p.icon} alt="" width={20} height={20} />
                    {p.name}
                  </Ext>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p>Â© {new Date().getFullYear()} Nimesh Madushanka</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
