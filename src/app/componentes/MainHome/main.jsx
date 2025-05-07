import Logo1 from "./../../../../public/banner-sabores.jpg";
import Logo2 from "./../../../../public/eventos-image.jpg";
import Logo3 from "./../../../../public/sobre-image.jpg";
import Image from "next/image";
import estilos from './main.module.css';

export default function MainHome() {
  return (
    <main className={estilos.containerMainHome}>
      <Image src={Logo1} alt={"image"} />
      <section>
        <h2>NOSSOS SABORES</h2>
        <spam>Novos e deliciosos!</spam>
        <p>
          Sorvete bom é aquele com os melhores ingredientes! Aqui na gelateria
          todo os nossos produtos são naturais, á base de frutas e sem nenhum
          conservante! Também temos opções sem lactose e sem açúcar. Venha
          conhecer e perceber que tem como o sorvete ser delicioso e saudável ao
          mesmo tempo!
        </p>
      </section>
      <section>
        <h2>NOSSOS EVENTOS</h2>
        <spam>Delicias com sorvete</spam>
        <p>
          Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
          prontinhos para te atender e oferecer os melhores eventos com o melhor
          sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a
          gente.
        </p>
      </section>
      <Image src={Logo2} alt={"Opcionais de sorvete"} />
      <Image src={Logo3} alt={"Amigos brindando com sorvertes"} />
      <section>
        <h2>SOBRE NÓS</h2>
        <spam>Alegria em cada casquinha</spam>
        <p>
          Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
          há anos no mercado produzindo o que tem de melhor para o nosso cliente
          e você não pode ficar fora dessa. Venha nos fazer uma visita e
          aproveite o melhor atendimento e o melhor sorvete da cidade.
        </p>
      </section>
    </main>
  );
}
