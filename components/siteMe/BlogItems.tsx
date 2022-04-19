import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogItems = (props) => {
    return (
        <div className={`${props.style.Blog} md:basis-3/6 lg:basis-1/4 `}>
            <div className={props.style.BlogItem}>
                <div className={props.style.BlogImage}>
                    <img
                        className="w-full"
                        src={props.content.srcImg}
                        alt={props.content.alt}
                    />
                </div>
                <div className={props.style.BlogContent}>
                    <p className={props.style.BlogTitle}>{props.content.alt}</p>
                    <div className="flex flex-row">
                        <a className="basis-2/6"
                           href={props.content.linkedin.href}
                           rel="noreferrer"
                           data-bs-toggle="tooltip"
                           data-bs-placement="bottom"
                           title={props.content.linkedin.title}
                           target="_blank"
                        >
                            <FontAwesomeIcon icon={props.content.linkedin.icon}/>
                        </a>

                        <a className="basis-2/6"
                           href={props.content.twitter.href}
                           rel="noreferrer"
                           data-bs-toggle="tooltip"
                           data-bs-placement="bottom"
                           title={props.content.twitter.title}
                           target="_blank"
                        >
                            <FontAwesomeIcon icon={props.content.twitter.icon}/>
                        </a>
                        <a className="basis-2/6"
                           href={props.content.virgool.href}
                           rel="noreferrer"
                           data-bs-toggle="tooltip"
                           data-bs-placement="bottom"
                           title={props.content.virgool.title}
                           target="_blank"
                        >
                            <img
                                className={props.style.Virgool}
                                src={props.content.virgool.srcIcon}
                                alt={props.content.virgool.title}
                            />
                        </a>
                        <p>برای مطالعه مقاله روی لینکها کلیک کنید</p>
                    </div>
                </div>
                <div className={props.style.BlogHidden}>
                    <p>{props.content.text}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogItems;