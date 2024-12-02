import backgroundImage from '../assets/Header.jpg';

const Header = () => {
   const headerStyle = {
       backgroundImage: `url(${backgroundImage})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '300px',
       color: 'white',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
   };

   return (
       <header style={headerStyle}>
           <h1>Pizzería Mamma Mía</h1>
           <p>¡Las mejores pizzas de la ciudad!</p>
       </header>
   );
};

export default Header;

 