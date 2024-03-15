// TermsAndConditions.js
import styles from '../styles/Home.module.css'; // Import CSS file for local styles

export default function TermsAndConditions() {
    return (
        <div className={`text-muted small ${styles.terms}`}>
            By signing up you agree to our <a href="#" className="link-dark text-decoration-none">Terms & Conditions</a>
        </div>
    );
}
