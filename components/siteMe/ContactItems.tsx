import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactItems = (props) => {
    return (
        <div className={props.style}>
            <a
                href={props.content.href}
                data-bs-toggle="tooltip"
                rel="noreferrer"
                title={props.content.title}
                data-bs-placement="bottom"
                target="_blank"
            >
                <span className="font-bold">{props.content.span}</span>
                {props.content.icon ? (
                    <FontAwesomeIcon icon={props.content.icon} />
                ) : (
                    <div />
                )}
            </a>
        </div>
    );
};

export default ContactItems;