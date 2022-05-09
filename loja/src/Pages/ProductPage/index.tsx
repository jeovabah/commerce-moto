import React from 'react'
import ItemCard from '../../components/ItemCard'
import data from '../../data'
import { Container } from './style'

export const ProductPage = () => {
  return (
    <Container>
        {
            data.productData.map((item, index)=>{
                return (
                    <ItemCard 
                    key={index}
                    title={item.title}
                    marca={item.marca}
                    cc= {item.cc}
                    price= {item.price}
                    img= {item.img} 
                    />
                )
            })
        }
        {/* <ItemCard dataProps={data.productData}/> */}
    </Container>
  )
}
