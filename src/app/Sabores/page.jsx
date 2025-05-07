import estilos from './sabores.module.css';
import Image from 'next/image';
import Logo from '../../../public/banner-sabores.jpg';

export default function Sabores(){
    return(
<section className={estilos.containerSabores}>
    <Image src={Logo} alt='Background sabores'></Image>
    <h1>NOSSOS SABORES</h1>
</section>
    );
};