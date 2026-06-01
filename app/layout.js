import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://computerzone.in"
  ),
  title: {
    default: "Computer Zone — Premier Computer Institute | Job-Ready Courses",
    template: "%s | Computer Zone",
  },
  description:
    "Computer Zone is a premier computer institute offering Full Stack Web Development, AI & Machine Learning, Data Analysis, Cybersecurity, and ADCA + Tally courses. 95%+ placement rate. Industry-expert trainers. Enroll today.",
  keywords: [
    "computer institute",
    "Computer Zone",
    "web development course",
    "AI machine learning",
    "data analysis",
    "cybersecurity course",
    "ethical hacking",
    "ADCA tally",
    "programming classes",
    "IT training",
    "job placement",
    "full stack development",
  ],
  authors: [{ name: "Computer Zone" }],
  creator: "Computer Zone",
  publisher: "Computer Zone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://computerzone.in",
    siteName: "Computer Zone",
    title: "Computer Zone — Premier Computer Institute | Job-Ready Courses",
    description:
      "Join Computer Zone and transform your career with job-ready tech courses. Full Stack, AI/ML, Data Analysis, Cybersecurity, ADCA + Tally. 95%+ placement rate.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Computer Zone — Premier Computer Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Zone — Premier Computer Institute",
    description:
      "Transform your career with job-ready tech courses. 95%+ placement rate.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Computer Zone",
              url: "https://computerzone.in",
              logo: "https://computerzone.in/logo.png",
              description:
                "Premier computer institute offering Full Stack Web Development, AI & ML, Data Analysis, Cybersecurity, and ADCA + Tally courses.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shyamdih More, Katras",
                addressLocality: "Dhanbad",
                addressRegion: "Jharkhand",
                postalCode: "828113",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7992430183",
                  contactType: "admissions",
                  availableLanguage: ["English", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7979738041",
                  contactType: "admissions",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Courses",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Full Stack Web Development",
                    description:
                      "Complete web development from frontend to backend",
                    provider: { "@type": "Organization", name: "Computer Zone" },
                  },
                  {
                    "@type": "Course",
                    name: "AI & Machine Learning",
                    description:
                      "Build intelligent systems with Python and TensorFlow",
                    provider: { "@type": "Organization", name: "Computer Zone" },
                  },
                  {
                    "@type": "Course",
                    name: "Data Analysis",
                    description:
                      "Transform data into business insights with Python and Power BI",
                    provider: { "@type": "Organization", name: "Computer Zone" },
                  },
                  {
                    "@type": "Course",
                    name: "Cybersecurity & Ethical Hacking",
                    description:
                      "Learn penetration testing and cyber defense",
                    provider: { "@type": "Organization", name: "Computer Zone" },
                  },
                  {
                    "@type": "Course",
                    name: "ADCA + Tally Prime",
                    description:
                      "Complete computer applications and accounting course",
                    provider: { "@type": "Organization", name: "Computer Zone" },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
