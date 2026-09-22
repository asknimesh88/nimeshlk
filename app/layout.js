import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], display: "swap", variable: "--font-archivo" });

const url = "https://nimesh.lk";
const title = "Nimesh Madushanka | Lecturer in Livestock Production & WordPress Developer";
const description =
  "Nimesh Madushanka is a Lecturer in Livestock Production at Sabaragamuwa University of Sri Lanka (M.Phil. in Animal Reproduction) and a Top Rated Upwork WordPress developer and Linux server administrator with 15,000+ hours and 170+ clients.";

export const metadata = {
  metadataBase: new URL(url),
  title: { default: title, template: "%s | Nimesh Madushanka" },
  description,
  applicationName: "Nimesh Madushanka",
  keywords: [
    "Nimesh Madushanka",
    "D N Nimesh Madushanka",
    "Lecturer Livestock Production",
    "Animal Reproduction Sri Lanka",
    "Sabaragamuwa University of Sri Lanka",
    "Faculty of Agricultural Sciences",
    "Large animal reproduction research",
    "Follicular development",
    "WordPress developer Sri Lanka",
    "WordPress expert",
    "Top Rated Upwork freelancer",
    "Linux server administrator",
    "LiteSpeed server",
    "Nginx Apache configuration",
    "Cloudflare DNS expert",
    "Core Web Vitals optimization",
    "Website speed optimization",
    "WordPress migration",
  ],
  authors: [{ name: "Nimesh Madushanka", url }],
  creator: "Nimesh Madushanka",
  publisher: "Nimesh Madushanka",
  category: "Portfolio",
  alternates: { canonical: "/" },
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    type: "profile",
    url,
    siteName: "Nimesh Madushanka",
    title,
    description,
    locale: "en_US",
    firstName: "Nimesh",
    lastName: "Madushanka",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#14213d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${url}/#person`,
      name: "Nimesh Madushanka",
      alternateName: "D. N. Nimesh Madushanka",
      url,
      image: `${url}/nimesh-madushanka.jpg`,
      email: "mailto:nimesh@bestworkers.biz",
      jobTitle: ["Lecturer, Department of Livestock Production", "WordPress Developer & Server Administrator"],
      worksFor: {
        "@type": "CollegeOrUniversity",
        name: "Sabaragamuwa University of Sri Lanka",
        url: "https://www.sab.ac.lk",
      },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Sabaragamuwa University of Sri Lanka" },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "B.Sc. in Agricultural Sciences and Management" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "M.Phil. in Animal Reproduction" },
      ],
      knowsAbout: [
        "Animal Reproduction", "Livestock Production", "Follicular Development", "Reproductive Biology",
        "WordPress", "Linux Server Administration", "LiteSpeed", "Nginx", "Apache", "Cloudflare DNS", "Website Optimization",
      ],
      address: { "@type": "PostalAddress", addressCountry: "LK" },
      sameAs: [
        "https://www.sab.ac.lk/staff-directory/472",
        "https://scholar.google.com/citations?user=KWfTLdUAAAAJ",
        "https://www.researchgate.net/profile/D-N-Nimesh-Madushanka",
        "https://www.upwork.com/freelancers/nimeshmadushanka",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name: "Nimesh Madushanka",
      inLanguage: "en",
      publisher: { "@id": `${url}/#person` },
    },
    {
      "@type": "ProfilePage",
      url,
      name: title,
      description,
      mainEntity: { "@id": `${url}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
