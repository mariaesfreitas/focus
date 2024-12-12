import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5542999386233&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Focus%20Consultoria.%20Gostaria%20de%20falar%20com%20um%20especialista."
      target="blank"
    >
      <button className="flex items-center gap-2 bg-customGold p-3">
        <FontAwesomeIcon icon={faWhatsapp} className="text-white w-8 h-8" />
        <p className="text-white font-medium">
          Fale com um especialista por WhatsApp.
        </p>
      </button>
    </a>
  );
}
