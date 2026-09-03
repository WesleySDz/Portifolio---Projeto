import { useState, useRef, useEffect, type FormEvent } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useViewMode } from "../contexts/ViewModeContext";
import { X, Send, ChevronDown, Check, CheckCircle2, Star } from "lucide-react";
import { RECIPIENT_EMAIL, sendContactEmail } from "../config/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t, language } = useLanguage();
  const { viewMode } = useViewMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("freelance");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  /* Para recrutador, pré-selecionar Tempo Integral */
  useEffect(() => {
    if (viewMode === "recruiter") {
      setSelectedTopic("fulltime");
    } else {
      setSelectedTopic("freelance");
    }
  }, [viewMode]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setIsSelectOpen(false);
    setIsSubmitted(false);
    setErrorMessage("");
    onClose();
  };

  if (!isOpen) return null;

  /* Opções de assunto — para Recrutador, destacar as duas primeiras */
  const isRecruiter = viewMode === "recruiter";

  const topicOptions = [
    {
      id: "fulltime",
      label: t.contact.topicOptions.fulltime,
      priority: isRecruiter,
    },
    {
      id: "freelance",
      label: t.contact.topicOptions.freelance,
      priority: isRecruiter,
    },
    {
      id: "project",
      label: t.contact.topicOptions.project,
      priority: false,
    },
    {
      id: "other",
      label: t.contact.topicOptions.other,
      priority: false,
    },
  ];

  const currentTopicLabel =
    topicOptions.find((opt) => opt.id === selectedTopic)?.label ||
    topicOptions[0].label;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage(
        language === "pt"
          ? "Por favor, preencha todos os campos antes de enviar."
          : "Please fill in all fields before submitting.",
      );
      return;
    }

    setErrorMessage("");

    sendContactEmail({
      name,
      email,
      topic: currentTopicLabel,
      message,
    });

    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-2xl bg-(--bg-dark) rounded-2xl md:rounded-3xl border border-(--border-accent-subtle) animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effects behind modal */}
        <div className="absolute top-0 left-1/4 w-96 h-32 bg-accent/20 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-accent-secondary/20 blur-[80px] pointer-events-none rounded-full" />

        <div className="relative p-6 sm:p-10 md:p-12">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-(--text-muted) hover:text-white transition-all cursor-pointer bg-white/5 hover:bg-accent/20 border border-(--border-subtle) rounded-full p-2.5 hover:scale-105 hover:border-(--border-accent)"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {isSubmitted ? (
            /* Tela de Confirmação e Sucesso */
            <div className="py-10 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent text-accent flex items-center justify-center mb-6 shadow-(--shadow-neon-md)">
                <CheckCircle2 size={44} />
              </div>

              <h3 className="text-3xl font-serif text-white mb-3">
                {language === "pt" ? "Mensagem Preparada!" : "Message Ready!"}
              </h3>
              <p className="text-(--text-secondary) max-w-md text-base leading-relaxed mb-2 font-sans">
                {language === "pt"
                  ? "Seu aplicativo de e-mail foi aberto com os dados preenchidos para enviar direto para:"
                  : "Your email client was opened with the filled-in details to send directly to:"}
              </p>
              <span className="text-accent-light font-mono text-sm px-4 py-1.5 rounded-full bg-accent/10 border border-(--border-accent-subtle) mb-8 inline-block">
                {RECIPIENT_EMAIL}
              </span>

              <button
                type="button"
                onClick={handleClose}
                className="btn-accent px-8 py-3.5 text-base"
              >
                {language === "pt" ? "Concluir e Fechar" : "Done & Close"}
              </button>
            </div>
          ) : (
            /* Formulário Principal */
            <>
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-3xl sm:text-4xl font-serif tracking-wide mb-2 text-white">
                  {t.contact.modalTitle}
                </h3>
                <p className="text-(--text-muted) text-base sm:text-lg font-sans">
                  {t.contact.modalSubtitle}
                </p>
              </div>

              {/* Form */}
              <form
                className="flex flex-col gap-5 sm:gap-6 font-sans"
                onSubmit={handleSubmit}
              >
                {/* Mensagem de Erro de Validação */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-medium animate-in fade-in">
                    {errorMessage}
                  </div>
                )}

                {/* Inputs de Nome e Email */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-xs text-(--text-muted) uppercase tracking-wider font-semibold">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-theme"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-xs text-(--text-muted) uppercase tracking-wider font-semibold">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-theme"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Custom Dropdown / Select de Assunto */}
                <div className="flex flex-col gap-2" ref={selectRef}>
                  <label className="text-xs text-(--text-muted) uppercase tracking-wider font-semibold">
                    {t.contact.topicLabel}
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className={`w-full bg-(--bg-glass) border text-left rounded-xl p-3.5 sm:p-4 text-white flex items-center justify-between transition-all cursor-pointer ${
                        isSelectOpen
                          ? "border-accent ring-1 ring-accent bg-accent/10"
                          : "border-(--border-subtle) hover:border-(--border-accent-subtle)"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {/* Star badge para opções prioritárias (modo recruiter) */}
                        {isRecruiter &&
                          topicOptions.find((o) => o.id === selectedTopic)
                            ?.priority && (
                            <Star
                              size={14}
                              className="fill-[#d946ef] text-[#d946ef]"
                            />
                          )}
                        <span className="text-white font-normal">
                          {currentTopicLabel}
                        </span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-(--text-muted) transition-transform duration-200 ${isSelectOpen ? "rotate-180 text-accent-light" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu Flutuante */}
                    {isSelectOpen && (
                      <div className="absolute top-full left-0 right-0 z-30 mt-2 bg-(--bg-dark) border border-(--border-accent) rounded-xl p-1.5 shadow-(--shadow-modal) backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                        {/* Separator label para recrutador */}
                        {isRecruiter && (
                          <div className="px-3 pt-1 pb-2">
                            <span className="text-[10px] uppercase tracking-widest text-[#d946ef] font-medium">
                              {language === "pt"
                                ? "⭐ Oportunidades profissionais"
                                : "⭐ Professional opportunities"}
                            </span>
                          </div>
                        )}

                        {topicOptions.map((option, idx) => {
                          const isSelected = option.id === selectedTopic;
                          const showDivider = isRecruiter && idx === 2;
                          return (
                            <div key={option.id}>
                              {showDivider && (
                                <div className="h-px bg-white/10 mx-2 my-1.5" />
                              )}
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedTopic(option.id);
                                  setIsSelectOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-left transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-accent text-white font-medium shadow-(--shadow-neon-sm)"
                                    : option.priority
                                      ? "text-white hover:bg-(--bg-glass-hover)"
                                      : "text-(--text-secondary) hover:bg-(--bg-glass-hover) hover:text-white"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {option.priority && !isSelected && (
                                    <Star
                                      size={13}
                                      className="fill-[#d946ef] text-[#d946ef] shrink-0"
                                    />
                                  )}
                                  <span>{option.label}</span>
                                </div>
                                {isSelected && (
                                  <Check size={16} className="text-white" />
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Textarea de Mensagem */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-(--text-muted) uppercase tracking-wider font-semibold">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input-theme resize-none"
                    placeholder={
                      language === "pt"
                        ? "Escreva sua mensagem aqui..."
                        : "Write your message here..."
                    }
                  />
                </div>

                {/* Ações */}
                <div className="flex justify-end gap-3 sm:gap-4 mt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn-ghost px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-medium"
                  >
                    {t.contact.cancel}
                  </button>
                  <button
                    type="submit"
                    className="btn-accent px-6 py-3 sm:px-9 sm:py-3.5 text-sm sm:text-base group"
                  >
                    <span>{t.contact.send}</span>
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
