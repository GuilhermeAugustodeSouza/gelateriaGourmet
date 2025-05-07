import Image from 'next/image';
import Logo from '../../../../public/banner-home.png'   
import estilos from './Header.module.css'

export default function Header(){
    return(
        <section className={estilos.containerHeader}>
            <Image src={Logo} alt='background header'></Image>
            <h1>SORVETE ARTESANAL</h1>
        </section>
    )
}