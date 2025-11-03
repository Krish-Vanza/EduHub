import React from 'react';
import Footer from '../student/Footer'

const Mail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22 6 12 13 2 6"></polyline>
  </svg>
);

const Phone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

function ContactUsContent() {
  
  // Contact details
  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Us",
      content: "bb23csb0b61@student.nitw.ac.in",
      href: "mailto:bb23csb0b61@student.nitw.ac.in",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Call Us",
      content: "+91 9310714635",
      href: "tel:9310714635",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Our Location",
      content: "Hanamkonda, Telangana, India",
      href: "#map", // Link to the map section
    },
  ];

  // Social media links
  const socialMedia = [
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://x.com/BeheraBis35781",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/biswojit-behera-54aa042a8/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/BisWojit488",
      label: "GitHub",
    },
  ];
  return (
    <div className=" bg-gradient-to-b from-teal-100 to-teal-60 font-sans">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hi, feel free to reach out.
          </p>
        </div>

        {/* Main Content: Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Column 1: Contact Info & Socials */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl bg-gradient-to-b from-teal-100 to-teal-60 p-8 shadow-xl">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Contact Information
              </h2>
              
              <ul className="space-y-6">
                {contactDetails.map((item) => (
                  <li key={item.title} className="flex items-start">
                    <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 transition-colors hover:text-blue-600"
                      >
                        {item.content}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social Media Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Follow Us
                </h3>
                <div className="mt-4 flex space-x-6">
                  {socialMedia.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      className="text-gray-400 transition-colors hover:text-blue-600"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Google Map */}
          <div id="map" className="rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60721.4326580172!2d79.5226077335605!3d18.00030001962615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f66551b946f%3A0x29654116215c6b0b!2sHanamkonda%2C%2tTelangana!5e0!3m2!1sen!2sin!4v1730553012345"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Hanamkonda, Telangana"
            ></iframe>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <ContactUsContent />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;