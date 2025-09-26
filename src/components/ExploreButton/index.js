import { Link } from 'react-router-dom';
import './index.css';

const ExploreButton = props => {
    const { linkPath } = props;
    return (<Link to={linkPath} className='explore-link-styles'>
        <button className="explore-button-styles">
            Explore More
            <span className="star star1" >✦</span>
            <span className="star star2" >✦</span>
            <span className="star star3" >✦</span>
            <span className="star star4" >✦</span>
            <span className="star star5" >✦</span>
            <span className="star star6" >✦</span>
        </button>
    </Link>)
}

export default ExploreButton;