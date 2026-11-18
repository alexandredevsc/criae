import { Link } from "react-router";
import Icon from "./icons/Icon";

export default function TopicCard({
  title,
  description,
  icon,
  iconColor,
  image,
  to,
}) {
  return (
    <Link className="topic-card" to={to}>
      <div className="topic-card__content">
        <Icon name={icon} color={iconColor} size={28} />

        <h3 className="topic-card__title">{title}</h3>

        <p className="topic-card__description">{description}</p>
      </div>

      <img className="topic-card__image" src={image} alt="" />
    </Link>
  );
}
