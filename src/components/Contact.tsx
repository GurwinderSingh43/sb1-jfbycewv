import React from 'react';
import { Mail, Smartphone, Linkedin, Github } from 'lucide-react';

const ContactItem = ({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link?: string }) => {
  const content = (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:bg-blue-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors duration-200">
        {content}
      </a>
    );
  }

  return <div className="p-4">{content}</div>;
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactItem
              icon={<Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
              title="Email"
              value="gurisaggu2002@gmail.com"
              link="mailto:gurisaggu2002@gmail.com"
            />
            <ContactItem
              icon={<Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
              title="Phone"
              value="+91-9779898610"
              link="tel:+919779898610"
            />
            <ContactItem
              icon={<Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
              title="LinkedIn"
              value="gurwindersingh001"
              link="https://www.linkedin.com/in/gurwindersingh001"
            />
            <ContactItem
              icon={<Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
              title="GitHub"
              value="GurwinderSingh43"
              link="https://github.com/GurwinderSingh43"
            />
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;