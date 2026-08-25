import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Mail, X } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Contact() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex-1 flex flex-col justify-center px-10 md:px-20 relative overflow-hidden pb-32">
        {/* Background glow effect for contact page */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-900/20 to-transparent pointer-events-none opacity-50 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mt-4">
          <h1 className="text-6xl md:text-8xl font-serif font-normal mb-8 leading-tight">
            {t.contact.heading}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
            {t.contact.description}
          </p>
        </div>

        {/* Bottom / Side actions */}
        <div className="relative z-10 w-full mt-auto flex flex-col md:flex-row md:items-end justify-between">
          
          {/* Social Icons (left side in design) */}
          <div className="flex flex-col gap-6 items-start mb-12 md:mb-0 relative">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <WhatsappIcon />
            </a>
            <div className="w-0.5 h-32 bg-white mt-4 ml-3.5 hidden md:block"></div>
          </div>

          {/* Send Email Button (right side in design) */}
          <div className="md:absolute md:right-0 md:bottom-20 flex justify-end w-full md:w-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer group"
            >
              <span className="text-xl lowercase tracking-wide">{t.contact.sendEmail}</span>
              <Mail size={32} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-full max-w-3xl bg-[#1c1622] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/10 rounded-full p-2 hover:bg-white/10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="mb-10">
              <h3 className="text-3xl font-medium mb-2">{t.contact.modalTitle}</h3>
              <p className="text-gray-400 text-lg">{t.contact.modalSubtitle}</p>
            </div>

            {/* Modal Form */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-gray-400">{t.contact.nameLabel}</label>
                  <input 
                    type="text" 
                    className="bg-[#241d2a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-gray-400">{t.contact.emailLabel}</label>
                  <input 
                    type="email" 
                    className="bg-[#241d2a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400">{t.contact.topicLabel}</label>
                <select className="bg-[#241d2a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer w-full">
                  <option value="freelance">{t.contact.topicOptions.freelance}</option>
                  <option value="fulltime">{t.contact.topicOptions.fulltime}</option>
                  <option value="other">{t.contact.topicOptions.other}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400">{t.contact.messageLabel}</label>
                <textarea 
                  rows={5}
                  className="bg-[#241d2a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none w-full"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors cursor-pointer text-lg"
                >
                  {t.contact.cancel}
                </button>
                <button 
                  type="submit"
                  className="px-12 py-3 rounded-xl bg-[#4b1d52] hover:bg-[#5c2465] text-white transition-colors cursor-pointer text-lg font-medium"
                >
                  {t.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
