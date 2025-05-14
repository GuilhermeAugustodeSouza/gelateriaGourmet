import Logo1 from "./../../../public/sabor-oreo.png";
import Logo2 from "./../../../public/sabor-pistache.png";
import Logo3 from "./../../../public/sabor-cookies-avela.png";
import Logo4 from "./../../../public/sorbet-kiwi.png";
import Logo5 from "./../../../public/sorbet-morango.png";
import Logo6 from "./../../../public/sorbet-limao.png";
import estilos from "./sabores.module.css";
import Image from "next/image";
import Logo from "../../../public/banner-sabores.jpg";

export default function Sabores() {
  return (
     <><section>
      <section className={estilos.containerImgBanner}>
        <Image src={Logo} alt="Background sabores"></Image>
        <h1>NOSSOS SABORES</h1>
      </section>
    </section>
    
    <main className={estilos.containerSabores}>


        <section className={estilos.secao_sabores}>
          <h2>SABORES DE SORVETE</h2>
          <div className={estilos.container_sorvetes}>
            <div>
              <Image className={estilos.img_sorvete} src={Logo1} alt={"Sabor de sorvete"} />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor oreo, uma explosão de sabor.</p>
            </div>

            <div>
              <Image className={estilos.img_sorvete} src={Logo2} alt={"Sabor de sorvete"} />
              <h3>Sorvete de Pistache</h3>
              <p> Cremoso sorvete sabor pistache, com pedacinhos de sementes.</p>
            </div>

            <div>
              <Image className={estilos.img_sorvete} src={Logo3} alt={"Sabor de sorvete"} />
              <h3>Sorvete de Coockies e Avelã</h3>
              <p>O nosso melhor sorvete, você vai adorar o sabor.</p>
            </div>

            <div>
              <Image className={estilos.img_sorvete} src={Logo4} alt={"Sabor de sorvete"} />
              <h3>Sorvete de Kiwi</h3>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>

            <div>
              <Image className={estilos.img_sorvete} src={Logo5} alt={"Sabor de sorvete"} />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>

            <div>
              <Image className={estilos.img_sorvete} src={Logo6} alt={"Sabor de sorvete"} />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>
                {" "}
                O incrivel sorvete gourmet de limão siciliano vai te encantar.
              </p>
            </div>
          </div>
        </section>
      </main></>
  );
}

