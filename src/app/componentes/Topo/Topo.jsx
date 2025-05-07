import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import Link from 'next/link';

export default function Topo(){
    return(
<div className={estilos.containerTopo}>
    <Image src={Logo} alt='logo tipo'></Image>
    <nav>
        <Link href='/'>Home</Link>
        <Link href='/Sabores'>Sabores</Link>
        <Link href='/Sobre'>Sobre</Link>
    </nav>
</div>
    )
};