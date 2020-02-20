import React from 'react';
import estilo from "../App.css";

import flecha from '../Vector/Arrow.svg';
import img from '../Imagenes/12.PNG';

class Inicio extends React.Component{
    render(){
        const fondo = {
            height: '140vh',
            width: '100%',
            backgroundImage:  `url(${img})`,
            //transform: 'rotate(90deg)',
            backgroundColor: '#3f3f3f',
            padding: "25% 15%",
            //backgroundImage: "url( https://s3.envato.com/files/a4c2e1aa-9c57-4516-8d8b-9ae80aae23a5/inline_image_preview.jpg )",
            color: "#CC6600"
            
        }     
        
        const posFlecha = {
            paddingTop: '35%'
        }
        const subrayado = {
            textDecoration: 'underline overline',
            fontFamily: 'Lacquer'
        }

      
     return (
        <React.Fragment>
            <div className={estilo.portada} style={fondo} id="Inicio">
                <h1 style={subrayado}>D1ST0RS10N</h1>
                <h4 style={subrayado}> FullStack Web Developer</h4>

                <br></br>

                <p style={subrayado}>Sigue bajando para descubrir más</p>
                < a href  = "#navbarNavDropdown" >
                    <img src={flecha} style={posFlecha} alt=""></img></a>
            </div>
            
        </React.Fragment>
    );
}
}

export default Inicio;