// Gallery.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css'; // Import CSS file for local styles

export default function Gallery() {
    return (
        <div className="gallery">
            <div className="mb-2 d-flex">
                <FontAwesomeIcon icon={faCircle} className="me-2 " style={{ width: '10px', height: '10px' }} />
                <FontAwesomeIcon icon={faCircle} className="me-2 " style={{ width: '10px', height: '10px' }} />
                <FontAwesomeIcon icon={faCircle} className="me-2 " style={{ width: '10px', height: '10px' }} />
            </div>


            <div className={`${styles.containerMasonry}`}>
                <div style={{ height: '200px' }}> </div>
                <div style={{ height: '200px' }}> </div>
                <div style={{ height: '200px' }}> </div>
                <div style={{ height: '200px' }}> </div>
                <div style={{ height: '100px' }}> </div>
                <div style={{ height: '100px' }}> </div>
                <div style={{ height: '75px' }}> </div>
                <div style={{ height: '150px' }}> </div>
                <div style={{ height: '85px' }}> </div>
                <div style={{ height: '200px' }}> </div>
                <div style={{ height: '150px' }}> </div>
                <div style={{ height: '120px' }}> </div>
                <div style={{ height: '100px' }}> </div>
            </div>
        </div>
    );
}
