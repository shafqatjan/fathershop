// LanguageSwitch.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css'; // Import CSS file for local styles

export default function LanguageSwitch() {
  return (
    <div className={styles.languageSwitch}>
      <div className="dropdown">
        <button className={`btn dropdown-toggle d-flex ${styles.dropdownToggle}`} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
          aria-expanded="false">
          <FontAwesomeIcon icon={faGlobe} className="me-1 mt-1" style={{ width: '12px', height: '12px' }} />
          <small>Language</small>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">English</a></li>
          <li><a className="dropdown-item" href="#">Spanish</a></li>
        </ul>
      </div>
    </div>
  );
}
