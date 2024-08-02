import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function WhatsappButton() {
  return (
    <button className="flex items-center gap-2 bg-customGold p-3">
      <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
      <p className="text-white font-medium text-xl">
        Seja atendido via Whatsapp
      </p>
    </button>
  );
}
