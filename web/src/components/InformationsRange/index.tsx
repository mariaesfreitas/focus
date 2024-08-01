import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function InformationsRange() {
  return (
    <header className="flex items-center justify-between bg-cyan-950 w-full p-2">
      <div className="flex items-center">
        <a href="" target="blank" className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-white" />
          <p className="hidden md:flex text-white ml-2">
            focusconsultoriajuridica@gmail.com
          </p>
        </a>
        <a href="" target="blank" className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-white ml-2" />
          <p className="hidden md:flex text-white ml-2">(42) 3223-7728</p>
        </a>
      </div>
      <div className="flex gap-3">
        <a href="" target="blank">
          <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-white" />
        </a>
        <a href="" target="blank">
          <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-white" />
        </a>
      </div>
    </header>
  );
}
