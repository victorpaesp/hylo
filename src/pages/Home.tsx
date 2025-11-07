import { useNavigate } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { useAudioStore } from "../store/useAudioStore";
import { LoaderCircle, Instagram, Volume2, VolumeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Home = () => {
  const navigate = useNavigate();
  const { toggleMusic, isPlaying } = useAudioStore();
  const [bgLoaded, setBgLoaded] = useState(false);
  const [showSobre, setShowSobre] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/original-webp.webp";
    img.onload = () => setBgLoaded(true);
  }, []);

  if (!bgLoaded) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <LoaderCircle className="animate-spin text-white" size={60} />
          <span className="text-white text-2xl">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!audioUnlocked) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        <img
          src="/original-webp.webp"
          alt="background"
          className="absolute top-0 left-0 w-screen h-auto min-h-full object-cover z-0 pointer-events-none select-none"
          style={{ maxHeight: "100vh" }}
        />
        <div
          className="absolute top-0 left-0 w-screen h-screen"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 1 }}
        />
        <div className="z-10 flex flex-col gap-3 super-rocky">
          <h2 className="text-3xl">Hylo Cartis Studio</h2>
          <button
            onClick={() => {
              toggleMusic();
              setAudioUnlocked(true);
            }}
            className="relative z-10 px-5 py-3 rounded-2xl text-3xl font-bold bg-[#b08e71] text-[#1a150f] shadow-lg hover:bg-[#a07e61] transition"
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="super-rocky relative w-screen min-h-screen overflow-hidden flex p-10 sm:p-24 overflow-y-auto">
      <img
        src="/original-webp.webp"
        alt="background"
        className="absolute top-0 left-0 w-screen h-auto min-h-full object-cover z-0 pointer-events-none select-none"
        style={{ maxHeight: "100vh" }}
      />
      <div className="absolute top-0 left-0 w-screen h-screen bg-black/20 z-0 pointer-events-none" />

      <div className="flex lg:flex-row flex-col-reverse z-10 relative justify-around gap-6 sm:justify-between w-full">
        {/* Navegação ou Sobre */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center text-white">
          {!showSobre ? (
            <motion.nav
              className="flex w-full flex-col gap-6 lg:max-w-[50%] max-w-full mb-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <MenuButton
                  text="Entrar na Loja"
                  onClick={() =>
                    window.open("https://www.hylocartis.com.br", "_blank")
                  }
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.4 }}
              >
                <MenuButton text="Coleção" onClick={() => navigate("/")} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <MenuButton text="Sobre" onClick={() => setShowSobre(true)} />
              </motion.div>
            </motion.nav>
          ) : (
            <motion.div
              className="flex flex-col gap-4 lg:max-w-[85%] max-w-full bg-black/70 rounded-xl p-8 sm:mb-24 mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-4">Sobre</h2>
              <p className="sm:text-base text-sm montserrat font-semibold">
                A Hylo Cartis é um estúdio de moda e identidade visual expandida
                que une arte, espiritualidade e estética em narrativas
                vestíveis. Nascida no deserto — metáfora da travessia criativa
                —, a marca constrói peças que traduzem força, fé e movimento.
                Entre o streetwear e o luxo artesanal, a Hylo é fábrica e
                templo: produz suas próprias roupas, cria imagens, som e
                experiências que conectam corpo e território. Cada coleção é um
                manifesto sobre autoconhecimento, tempo e transformação — onde
                vestir é também um ato de expressão e permanência.
              </p>
              <a
                href="https://instagram.com/hylocartistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-pink-400 transition-colors duration-200 self-end px-4"
                aria-label="Instagram Hylo Cartis Studio"
              >
                <Instagram size={40} />
              </a>
              <MenuButton text="Voltar" onClick={() => setShowSobre(false)} />
            </motion.div>
          )}
        </div>

        {/* Título */}
        <div className="text-end w-full lg:w-1/2">
          <div className="w-full text-center mb-auto mt-auto sm:mt-0">
            <motion.h1
              className="text-[9rem] sm:text-[13rem] text-[#1a150f] leading-none"
              style={{
                textShadow: "0 4px 10px #b08e71, 0 1px 0 #b08e71",
                WebkitTextStroke: "2px #b08e71",
              }}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              HYLO
            </motion.h1>
            <motion.h2
              className="text-[5rem] sm:text-[6rem] text-[#1a150f] leading-none w-full mb-4"
              style={{
                textShadow: "0 4px 10px #b08e71, 0 1px 0 #b08e71",
                WebkitTextStroke: "2px #b08e71",
              }}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            >
              CARTIS STUDIO
            </motion.h2>
            <motion.span
              className="text-[1.5rem] text-[#1a150f]"
              style={{
                textShadow: "0 2px 2px #b08e71, 0 1px 0 #b08e71",
                WebkitTextStroke: "0.25px #b08e71",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
              Estilo que nasce na rua
            </motion.span>
          </div>
        </div>
      </div>

      {/* Botão de música */}
      <button
        onClick={toggleMusic}
        className="absolute top-5 right-5 p-[0px_0px_16px_16px] cursor-pointer flex items-center justify-center z-20"
      >
        <span className="text-[#CCCCCC] bg-[#00000075] rounded-lg p-2.5">
          {isPlaying ? (
            <Volume2 size={24} className="" />
          ) : (
            <VolumeOff size={24} className="" />
          )}
        </span>
      </button>
    </div>
  );
};
