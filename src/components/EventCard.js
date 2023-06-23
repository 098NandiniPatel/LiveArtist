import React,{useState} from 'react'
import './eventCard.css'
const EventCard = ({title,icon,background}) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    const cardStyle = {
      backgroundImage: hovered ? `url(${background})` : 'none',
    };
    return (
      <div
        className="event-card"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={icon} alt="Icon" className="icon"  />
        <h5 className="event-title">{title}</h5>
      </div>
    );
  };
export default EventCard