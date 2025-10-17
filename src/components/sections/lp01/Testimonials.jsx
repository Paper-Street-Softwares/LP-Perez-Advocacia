import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { Carousel } from "primereact/carousel";
import Button from "../../interactives/Button";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

export default function Testimonial({ colorMode }) {
  const { t } = useTranslation();

  // Lógica de cores conforme o modo
  const bgColor = colorMode === "light" ? "bg-white" : "squares";
  const textColor = colorMode === "light" ? "text-black" : "text-black";
  const arrowColor = colorMode === "light" ? "#000000" : "#000000";

  // Template de item do carousel
  const itemTemplate = (testimonial) => (
    <MotionDivDownToUp
      key={testimonial.id}
      className="p-4 w-[70%] phone2:w-[90%] m-auto flex justify-center "
    >
      <div
        className={`rounded-2xl shadow-lg p-3 w-[80%] text-center flex flex-col justify-between ${
          colorMode === "light" ? "bg-gray-100" : "bg-primary"
        }`}
      >
        <p
          className={`italic text-paragraph1 desktop2:text-paragraph2 mb-4 ${textColor}`}
        >
          {testimonial.text}
        </p>
        <hr className="opacity-20 border-black" />
        <span className={`font-semibold text-sm mt-4 ${textColor}`}>
          {testimonial.author}
        </span>
      </div>
    </MotionDivDownToUp>
  );

  // Configuração responsiva
  const responsiveOptions = [
    { breakpoint: "2500px", numVisible: 1, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 1, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const Testimonials = [
    {
      id: 1,
      text: (
        <p>
          " Desde o início do processo de curatela da minha mãe até o
          inventário, encontrei nela muito mais do que uma advogada. Encontrei
          um verdadeiro apoio humano. Sua atuação ultrapassa a técnica jurídica
          — ela acolhe, escuta, orienta e caminha junto com uma sensibilidade
          rara.
          <br /> <br />
          Em um dos momentos mais delicados da minha vida, ela esteve ao meu
          lado com uma presença firme e amorosa. Olhou para cada detalhe com
          cuidado, respeitando não apenas os trâmites legais, mas também os
          sentimentos envolvidos. Sua empatia e seu senso de justiça me deixaram
          realmente segura.
          <br /> <br />
          Hoje, ela é minha referência como profissional do Direito Civil.
          Indico seu trabalho a todas as pessoas que buscam um atendimento
          humanizado, cuidadoso e diferenciado — alguém que compreende que, por
          trás de cada processo, existe uma vida, uma história, uma família.
          <br /> <br />
          Ela representa uma nova forma de exercer a advocacia: com alma, com
          ética e com amor ao que faz. E é esse perfil de profissional que busco
          em todas as áreas da minha vida. Gratidão Dra Luena, do escritório
          Perez Advocacia, por atravessar comigo esse caminho. ""
        </p>
      ),
      author: (
        <h6 className="flex flex-col">
          Dra. Denise Freitas Barata Murakami{" "}
          <span className="text-black/70 text-paragraph2">Psicóloga</span>
        </h6>
      ),
    },
    {
      id: 2,
      text: (
        <p>
          " Quando precisei de auxílio jurídico de confiança e especializado me
          indicaram o escritório com ótimas referências.
          <br /> <br />
          Fiquei impressionado com o profissionalismo, a neutralidade e o
          humanismo com que o escritório tratou do meu caso desde o início. Me
          trataram não apenas como cliente, mas como uma pessoa individual e
          posso dizer que fizeram por mim até mais do que o serviço exigia.
          <br /> <br />
          Por exemplo, possibilitaram reuniões para sanar dúvidas das duas
          partes envolvidas e cuidaram de cada detalhe dos documentos com total
          orientação.
          <br />
          Já havia procurado outros escritórios antes.
          <br />
          <br />
          Mas, posso afirmar, que nenhum foi tão ético, profissional e
          humanístico como esse. Estou extremamente satisfeito com os serviços
          que me foram prestados. ""
        </p>
      ),
      author: (
        <h6 className="flex flex-col">
          Rafael Tavares{" "}
          <span className="text-black/70 text-paragraph2">Agente federal</span>
        </h6>
      ),
    },
  ];

  return (
    <SectionArea className={`${bgColor}`} paddingtop={true}>
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="w-full">
          <SectionHeader
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t("testimonials.minitag")}
            sectionHeaderTitle={t("testimonials.title")}
            sectionHeaderSubtitle={t("testimonials.subtitle")}
            titleColorSet={textColor}
            subtitleColorSet={textColor}
          />

          {/* ✅ Envolvido com overflow-x-hidden para remover a margem lateral */}
          <div className="w-full overflow-x-hidden flex flex-col desktop1:flex-row items-center justify-center gap-[32px]">
            <Carousel
              value={Testimonials}
              itemTemplate={itemTemplate}
              responsiveOptions={responsiveOptions}
              autoplayInterval={5000}
              circular
              showNavigators
              showIndicators={false}
              className="w-full custom-carousel flex items-center"
              prevIcon={
                <span style={{ color: arrowColor, fontSize: "200%" }}>❮</span>
              }
              nextIcon={
                <span style={{ color: arrowColor, fontSize: "200%" }}>❯</span>
              }
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
