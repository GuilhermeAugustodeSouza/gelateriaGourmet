import Image from 'next/image';
import Logo from '../../../../public/logo.png'
import estilos from './Rodape.module.css'
import Link from 'next/link';
export default function Rodape() {
  return (

    <footer className={estilos.containerRodape}>
      <Image src={Logo} alt="logo tipo sorveteria"></Image>

      <section>
        <h2>Endereço</h2>
        <p>Av.Francisco deslandes 98, Belo horizonte 30345-678</p>
      </section>

      <section>
        <h2> Contato</h2>
        <p> inf@meusite.com</p>
        <p>Tel (31)3456-7890</p>
      </section>

      <section>
        <h2>Horários</h2>
        <p>Aberto todos os dias / 10:00 ás 22:00</p>
      </section>
<div>   
   <p>Gelateria orgulhosamente desenvolvido por<Link href='https://mypageguilherme34.vercel.app' target='_blank' rel='noopener noreferrer'>Guilherme Goudinho</Link> </p>
</div>
  
      
    </footer>
  );
}
