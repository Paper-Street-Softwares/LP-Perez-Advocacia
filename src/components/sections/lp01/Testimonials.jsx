import React, { useState, useRef } from "react";
import { Carousel } from "primereact/carousel";
import { Dialog } from "primereact/dialog";
import { Play, Pause, X } from "lucide-react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import { useTranslation } from "react-i18next";

export default function Testimonial({ colorMode }) {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  const bgColor = colorMode === "light" ? "bg-white" : "squares";
  const textColor = "text-black";
  const arrowColor = "#D8AF57";

  const Testimonials = [
    {
      id: 1,
      author: "Dra. Denise Freitas Barata Murakami",
      role: "Psicóloga",
      text: (
        <p>
          <span className="desktop1:hidden">
            Em um dos momentos mais delicados da minha vida, ela esteve ao meu
            lado com uma presença firme e amorosa...
          </span>
          <span className="hidden desktop1:flex">
            "Hoje, ela é minha referência como profissional do Direito Civil.
            Indico seu trabalho a todas as pessoas que buscam um atendimento
            humanizado, cuidadoso e diferenciado — alguém que compreende que,
            por trás de cada processo, existe uma vida, uma história, uma
            família..."
          </span>
        </p>
      ),
      fullText: (
        <p>
          ”Desde o início do processo de curatela da minha mãe até o inventário,
          encontrei nela muito mais do que uma advogada. Encontrei um verdadeiro
          apoio humano. Sua atuação ultrapassa a técnica jurídica — ela acolhe,
          escuta, orienta e caminha junto com uma sensibilidade rara.
          <br />
          <br />
          Em um dos momentos mais delicados da minha vida, ela esteve ao meu
          lado com uma presença firme e amorosa. Olhou para cada detalhe com
          cuidado, respeitando não apenas os trâmites legais, mas também os
          sentimentos envolvidos. Sua empatia e seu senso de justiça me deixaram
          realmente segura.
          <br />
          <br />
          Hoje, ela é minha referência como profissional do Direito Civil.
          Indico seu trabalho a todas as pessoas que buscam um atendimento
          humanizado, cuidadoso e diferenciado — alguém que compreende que, por
          trás de cada processo, existe uma vida, uma história, uma família.
          <br />
          <br />
          Ela representa uma nova forma de exercer a advocacia: com alma, com
          ética e com amor ao que faz. E é esse perfil de profissional que busco
          em todas as áreas da minha vida. Gratidão Dra Luena, do escritório
          Perez Advocacia, por atravessar comigo esse caminho.”
        </p>
      ),
    },
    {
      id: 2,
      author: "Rafael Tavares",
      role: "Agente federal",
      text: (
        <p>
          <span className="desktop1:hidden">
            Quando precisei de auxílio jurídico de confiança e especializado me
            indicaram o escritório com ótimas referências...
          </span>
          <span className="hidden desktop1:flex">
            "Fiquei impressionado com o profissionalismo, a neutralidade e o
            humanismo com que o escritório tratou do meu caso desde o início. Me
            trataram não apenas como cliente, mas como uma pessoa individual e
            posso dizer que fizeram por mim até mais do que o serviço exigia..."
          </span>
        </p>
      ),
      fullText: (
        <p>
          ”Quando precisei de auxílio jurídico de confiança e especializado me
          indicaram o escritório com ótimas referências.
          <br />
          <br />
          Fiquei impressionado com o profissionalismo, a neutralidade e o
          humanismo com que o escritório tratou do meu caso desde o início. Me
          trataram não apenas como cliente, mas como uma pessoa individual e
          posso dizer que fizeram por mim até mais do que o serviço exigia.
          <br />
          <br />
          Por exemplo, possibilitaram reuniões para sanar dúvidas das duas
          partes envolvidas e cuidaram de cada detalhe dos documentos com total
          orientação.
          <br />
          <br />
          Já havia procurado outros escritórios antes.
          <br />
          <br />
          Mas, posso afirmar, que nenhum foi tão ético, profissional e
          humanístico como esse. Estou extremamente satisfeito com os serviços
          que me foram prestados.”
        </p>
      ),
    },
  ];

  const openModal = (testimonial) => {
    setModalTitle(testimonial.author);
    setModalContent(testimonial.fullText);
    setVisible(true);
  };

  const itemTemplate = (testimonial) => (
    <MotionDivDownToUp
      key={testimonial.id}
      className="w-full flex justify-center"
    >
      <div
        className={`rounded-2xl shadow-lg p-6 w-full tablet1:w-[90%] text-center flex flex-col justify-between ${
          colorMode === "light" ? "bg-gray-100" : "bg-gray-200"
        }`}
      >
        {testimonial.author}
        <br />
        <span className="text-black/70 text-paragraph2">
          {testimonial.role}
        </span>
        <br />
        <p className={`italic text-paragraph1 mb-6 ${textColor}`}>
          {testimonial.text}
        </p>
        <button
          onClick={() => openModal(testimonial)}
          className={`font-semibold text-sm bg-primary p-2 rounded-md text-black`}
        >
          Continuar lendo
        </button>
      </div>
    </MotionDivDownToUp>
  );

  const responsiveOptions = [
    { breakpoint: "2500px", numVisible: 1, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 1, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <SectionArea className={`${bgColor}`} paddingtop={true}>
      <SectionWrapper className="flex flex-col items-center">
        <SectionHeader
          className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
          miniTitle={t("testimonials.minitag")}
          sectionHeaderTitle={t("testimonials.title")}
          sectionHeaderSubtitle={t("testimonials.subtitle")}
          titleColorSet={textColor}
          subtitleColorSet={textColor}
        />

        {/* ✅ Carousel */}
        <div className="relative w-[100%] tablet1:w-[80%] flex flex-col items-center">
          <Carousel
            ref={carouselRef}
            value={Testimonials}
            itemTemplate={itemTemplate}
            responsiveOptions={responsiveOptions}
            autoplayInterval={isPlaying ? 7000 : null} // 🔥 pausa o autoplay
            circular
            showIndicators={false}
            showNavigators
            prevIcon={
              <span style={{ color: arrowColor, fontSize: "200%" }}>❮</span>
            }
            nextIcon={
              <span style={{ color: arrowColor, fontSize: "200%" }}>❯</span>
            }
            className="w-full desktop1:w-[70%]"
          />

          {/* ✅ Controle Play / Pause */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={togglePlayPause}
              className="p-2 bg-primary rounded-full hover:scale-110 transition"
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>
          </div>
        </div>

        {/* ✅ Modal */}
        <Dialog
          className="font-secondFont"
          closeIcon={<X size={20} />}
          header={<span className="text-secondary">{modalTitle}</span>}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{
            "4000px": "400px",
            "1024px": "400px",
            "641px": "300px",
          }}
          contentStyle={{ paddingTop: 0 }}
        >
          <style jsx global>{`
            .p-dialog-header {
              border-bottom: 1px solid rgba(0, 0, 0, 0.15);
              padding: 16px;
            }
          `}</style>

          <div className="mt-4">{modalContent}</div>
        </Dialog>
      </SectionWrapper>
    </SectionArea>
  );
}
