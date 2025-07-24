// Button.jsx
import { Link } from 'react-router-dom';

function Button({ text, to, onClick, variant = 'primary' }) {
  return (
    <Link
      to={to}
      className={`inline-block px-6 py-3 rounded font-medium text-white ${
        variant === 'primary'
          ? 'bg-primary-600 hover:bg-primary-700'
          : 'bg-secondary-600 hover:bg-secondary-700'
      } transition-colors`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

export default Button;
