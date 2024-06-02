import './GlitchLoader.css'
import { createPortal } from 'react-dom';
import Modal from 'react-modal';
Modal.setAppElement('#root');
export default function GlitchLoader({ loadingText, loadingStatus }) {
    return createPortal(
        <Modal
            isOpen={loadingStatus == 'on'}
            contentLabel="Loading"
            className="Modal"
            overlayClassName="Overlay"
        >
            <div className="loader">
                <div data-glitch={loadingText} className="glitch">{loadingText}</div>
            </div>
        </Modal>,

        document.querySelector('body')
    )
}