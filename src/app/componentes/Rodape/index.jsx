import Image from 'next/image';
import Logo from '../../../../public/logo.png'
import estilos from './Rodape.module.css'

export default function Rodape() {
  return (

    <footer className={estilos.containerRodape}>
      <Image src={Logo} alt="logo tipo sorveteria"></Image>

      <section>
        <h2>Endereço</h2>
        <p>Av. Bernardino de Campos 98, São Paulo-Sp 12345-678</p>
      </section>

      <section>
        <h2> Contato</h2>
        <p> inf@meusite.com</p>
        <p>Tel (11)3456-7890</p>
      </section>

      <section>
        <h2>Horários</h2>
        <p>Aberto todos os dias / 10:00 ás 22:00</p>
      </section>
<div>   
   <p>Gelateria orgulhososamente desenvolvido por 'nome do desenvolvedor'</p>
</div>
  
      
    </footer>
  );
}
