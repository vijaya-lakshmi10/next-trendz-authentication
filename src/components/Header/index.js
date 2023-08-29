// Write your JS code here
import './index.css'
const Header = () =>(
        <nav className="nav-header">
        <div className="header">
        <div className="header-content">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" className="website-logo-img"/>
        <button className="logout-btn" type="button">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png" alt="nav logout" className="logout-img"/>
        </button>
        </div>
        <div className="header-content header-content-large-view">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" className="website-logo-img"/>
        <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Cart</li>
        </ul>
        <button className="logout-button" type="button">Logout</button>
        </div>
        </div>
        <div className="nav-item-images">
        <ul className="nav-item-small-view">
        <li className="nav-list-item-small-img">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" alt="nav home" className="nav-images"/>
        </li>
        <li className="nav-list-item-small-img">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" alt="nav products" className="nav-images"/>
        </li>
        <li className="nav-list-item-small-img">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" alt="nav cart" className="nav-images"/>
        </li>
        </ul>
        </div>
        </nav>
)
export default Header
