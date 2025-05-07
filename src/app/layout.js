import Topo from './componentes/Topo/Topo';
import Rodape from './componentes/Rodape/index';
import "./globals.css";


export const metadata = {
  title: "Sorveteria-React",
  description: "landing-page-sorveteria-react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
