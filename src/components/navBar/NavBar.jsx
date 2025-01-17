import styles from '../navBar/NavBar.module.css';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Link } from 'react-router-dom';

// Import icons from navbar
import user from '../../../public/assets/images/user.svg';
import id from '../../../public/assets/images/id.svg';
import book from '../../../public/assets/images/book.svg';
import exit from '../../../public/assets/images/icons8-exit-50.png';
// import logo from '../../../assets/images/logotipo.svg';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            {/* <img className={styles.logo} src={logo} alt="Logotipo da aplicação" /> */}
            
            {/* Navigation Links */}
            <Link to='/cadastro'>
                <PrimaryButton icon={user} text='Cadastrar Aluno' />
            </Link>
            <Link to='/validar'>
                <PrimaryButton icon={id} text='Validação' />
            </Link>
            <Link to='/listaalunos'>
                <PrimaryButton icon={book} text='Lista de Alunos' />
            </Link>
            <Link to='/'>
                <PrimaryButton icon={exit} text='Sair' />
            </Link>
        </nav>
    );
}

export default NavBar;
