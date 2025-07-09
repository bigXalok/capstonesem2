import {useState} from 'react';
import {Link , useLocation } from 'react-router-dom';
import { Mountain } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        {path:'/', label: 'Home'},
        {path: '/places', label: 'Places'},
        {path: '/stay', label: 'Stay'},
        {path: '/transport', label: 'Transport'},
        {path: '/expense-plan', label: 'Expense Plan'}

    ]
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to= "/" className="nav-brand">
                <Mountain size={32} />
                <span>WanderLand</span>
                </Link>

                <ul className={`nav-menu ${isMenuOpen ?  'active': ''} `}>
                    

                </ul>
            </div>   
        </nav>


    );


    
};
export default Navigation;
