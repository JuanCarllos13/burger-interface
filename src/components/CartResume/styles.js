import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .ContainerTop{
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas:
            'title title'
            'items items-price'
            'tax tax-price';


        .title{
            grid-area: title;
            margin-bottom: 20px;
        }
        .items{
            grid-area: items;
        }
        .items-price{
            grid-area: items-price;
        }
        .tax{
            grid-area: tax;
        }
        .tax-price{
            grid-area: tax-price;
        }
    }



    .ContainerBotton{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 50px;
    }

`
