"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Users,
  Euro,
  Gift,
  X
} from "lucide-react";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const ModalTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

const ModalBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { open, setOpen } = useModal();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const modalContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-[999999]"
          style={{ zIndex: 999999 }}
        >
          <Overlay />

          <motion.div
            ref={modalRef}
            className={cn(
              "w-full max-w-2xl max-h-[95vh] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-[1000000] flex flex-col overflow-hidden mx-4",
              className
            )}
            style={{ zIndex: 1000000 }}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render modal in a portal to body to escape any stacking context
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10 overflow-y-auto", className)}>
      {children}
    </div>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-full w-full bg-black bg-opacity-95 z-[999998] ${className}`}
      style={{ zIndex: 999998 }}
    ></motion.div>
  );
};

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 group"
    >
      <X className="h-4 w-4 text-black dark:text-white group-hover:scale-125 group-hover:rotate-3 transition duration-200" />
    </button>
  );
};

interface RegistrationModalProps {
  triggerText?: string;
  triggerClassName?: string;
  children?: React.ReactNode;
}

export function RegistrationModal({ 
  triggerText = "Registrati Ora", 
  triggerClassName,
  children 
}: RegistrationModalProps) {
  return (
    <ModalProvider>
      <ModalTrigger className={triggerClassName}>
        {children || triggerText}
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              Ti Paghiamo €1!
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Unisciti alla rivoluzione contro il telemarketing selvaggio
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-neutral-700 dark:text-neutral-300">
                €1 immediato alla registrazione
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Guadagni extra per ogni referral
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Partecipazione ad azioni legali collettive
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Protezione totale dal telemarketing
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Registrati</span>
              </div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">4.247</div>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Euro className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Bonus</span>
              </div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">€1</div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-6 mb-6">
            <Badge className="bg-emerald-500 text-white border-0 mb-3 mx-auto block w-fit">
              BONUS EARLY BIRD
            </Badge>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              Registrati su WhatsApp
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              Aiutaci a raggiungere 300.000 registrazioni per sbloccare la Fase 1
            </p>
            
            <Button 
              className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white border-0 text-lg font-medium"
              onClick={() => window.open('https://wa.me/+393123456789?text=Ciao%2C%20voglio%20registrarmi%20su%20Opponiti%20e%20ricevere%20il%20bonus%20di%20%E2%82%AC1%21', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Registrati su WhatsApp
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-600">
            Registrandoti accetti i nostri Termini di Servizio e la Privacy Policy
          </p>
        </ModalContent>
      </ModalBody>
    </ModalProvider>
  );
}