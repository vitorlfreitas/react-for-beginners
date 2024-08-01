// rafce = React Arrow Function Component Export
import { ReactNode } from "react";

interface Props {
    // Allows to add HTML elements
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                onClick={onClose}
            ></button>
        </div>
    );
};

export default Alert;
