import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function InformationsRange() {
  return (
    <header className="flex items-center justify-between bg-cyan-950 w-full p-2">
      <div className="flex items-center">
        <a
          href="mailto:focusconsultoriajuridica@gmail.com"
          target="blank"
          className="flex items-center"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-white" />
          <p className="hidden md:flex text-white ml-2">
            focusconsultoriajuridica@gmail.com
          </p>
        </a>
        <a
          href="tel:+554232237728"
          target="blank"
          className="flex items-center"
        >
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-white ml-2" />
          <p className="hidden md:flex text-white ml-2">(42) 3223-7728</p>
        </a>
      </div>
      <div className="flex gap-3">
        <a href="https://www.instagram.com/focusconjur/" target="blank">
          <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-white" />
        </a>
      </div>
    </header>
  );
}
