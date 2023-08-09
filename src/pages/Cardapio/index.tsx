import styles from './Cardapio.module.scss'
import Logo from '../../assets/logo.svg'

export default function Cardapio(){
    return (
        <main>
            <nav className={ styles.menu }>
            <img src={Logo} alt="Logo do Restaurante"/>
            {/*Cardapio Do Restaurante Mojo Dojo Casa House do Grande Mestre Cuca Senhor Artista Profissional Admiravel Divino Luxuoso Doutor Magíster Especializado Lindo Danado Explêndido Sensacional Charmoso Chef 5 Estrelas Respeitado Raul*/}
            </nav>
        </main>
    );
}