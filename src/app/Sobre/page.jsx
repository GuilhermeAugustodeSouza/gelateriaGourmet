import Image from "next/image";
import Logo1 from "../../../public/banner-sobre.png";
import Logo2 from "../../../public/sobre-image.jpg";
import Logo3 from "../../../public/sorveteria.jpg";
import estilos from "./sobre.module.css";

export default function Sobre() {
  return (
    <>
      <section className={estilos.containerSobre}>
        <Image src={Logo1} alt="background Sobre"></Image>
        <h1>A GELATERIA</h1>
      </section>
      
      <div className={estilos.containerMain}>
        <h2>SOBRE NÓS</h2>
        <h3><em>Nós simplesmente amamos sorvete!</em></h3>
        <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos  operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para o varejo como para o atacado.</p>
      <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para a sua residência e aproveitar junto com a familia. Também vendemos para estabelecimentos e criamos eventos como festas de aniversários, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos propocionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa com o melhor sorvete da cidade.</p>
      </div>

      <div className={estilos.containerImgs}>
        <Image src={Logo2} alt={'Amigos brindando com sorvete'}></Image>
         <Image src={Logo3} alt={'Por dentro de uma loja'}></Image>
      </div>
    </>
  );
}
