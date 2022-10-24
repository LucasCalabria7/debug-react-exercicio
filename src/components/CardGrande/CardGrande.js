import React from 'react';
import {LayoutCardGrande, ImgCardGrande, InfosCard, TituloCardGrande} from './styles'


export function CardGrande(props) {
    console.log(props)
    return (
        
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCard>
                <TituloCardGrande>{ props.name }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCard>
        </LayoutCardGrande>
    )
}