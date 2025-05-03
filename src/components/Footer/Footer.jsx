import React from 'react';
import './styles.css';
import Logo from '../Logo/Logo';
import InformationSection from './Informations';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';

const informations = [
  {
    title: 'Informação',
    items: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Blog', link: '/blog' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Trabalhe conosco', link: '/careers' },
      { text: 'Meus Pedidos', link: '/orders' }
    ]
  },
  {
    title: 'Categorias',
    items: [
      { text: 'Camisetas', link: '/categories?category=camisas' },
      { text: 'Calças', link: 'categories?category=calcas' },
      { text: 'Bonés', link: 'categories?category=bones' },
      { text: 'Headphones', link: 'categories?category=headphones' },
      { text: 'Tênis', link: 'categories?category=tenis' }
    ]
  },
  {
    title: 'Contatos',
    items: [
      { text: 'Av.   Santos Dumont. 2626 - Aldeota, Fortaleza - CE', link: 'https://www.digitalcollege.com.br/contato/' },
      { text: '(85) 9 9809-6349', link: 'https://www.digitalcollege.com.br/contato/' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-section">
        <Logo type="footer" />
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com" >
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
      {informations.map(info => (
        <InformationSection key={info.title} title={info.title} informations={info.items} />
      ))}
      <div className="footer-bottom">
        <hr />
        <p>© 2025 E-Commerce</p>
      </div>
    </footer>
  );
};

export default Footer;
