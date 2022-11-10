import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import tempoParaSegundos from '../../common/utils/date';
import { Itarefa } from '../../types/tarefa';
import { useEffect, useState } from 'react';

interface Props {
    selecionado: Itarefa | undefined
}


export default function Cronometro({selecionado} : Props){
    const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)));

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie um cronomêtro
            </p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo = {tempo} />
            </div>
            <Botao onClick={() => console.log('Começando')}>
                Começar
            </Botao>
        </div>
    )
}