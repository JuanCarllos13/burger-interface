import styled from 'styled-components'

export const Container = styled.div`

`
export const ProductsImg = styled.img`
    width: 100%;
`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;

    &:hover{

    }

`
export const CategoryButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    border-bottom: ${props => (props.isActiveCategory && '2px solid #9758A6')};;
    color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;

`
