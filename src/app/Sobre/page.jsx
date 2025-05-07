
import Image from 'next/image';
import Logo from '../../../public/banner-sobre.png';
import estilos from './sobre.module.css'

export default function Sobre(){
    return(
    <section className={estilos.containerSobre}>
        <Image src={Logo} alt='background Sobre'></Image>
        <h1>A GELATERIA</h1>
    </section>    
    
    );
}