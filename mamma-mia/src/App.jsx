import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
// import Register from './components/Register'; // 
// import Login from './components/Login'; // 
import Cart from './components/Cart'; // 

const App = () => {

   const [view, setView] = useState('cart'); 

   return (
       <div
       style={{
        width: '100vw'
       }}
       >

           <Navbar />
           

           <main className="container mt-4">
               {view === 'cart' && <Cart />} 
               {/* {view === 'home' && <Home />}  Comentado por ahora */}
               {/* {view === 'register' && <Register />} */}
               {/* {view === 'login' && <Login />} */}
           </main>


           <div className="text-center mt-3">
               <button
                   className="btn btn-outline-primary m-2"
                   onClick={() => setView('cart')}
               >
                   Ir al Carrito
               </button>
             
           </div>


           <Footer />
       </div>
   );
};

export default App;
