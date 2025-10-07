import Paragraphs from "../Paragraphs";
import AboutFading from "../AboutFading";

export default function ParagraphWithFading({ colorMode }) {
  return (
    <Paragraphs className="text-secondary text-opacity-80">
      <AboutFading colorMode={colorMode} />
    </Paragraphs>
  );
}
