import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../Components/Hero'


export default class AboutUs extends Component {
    render() {
      return (
        <Container className="mt-5">
          <h1  className="m-3">LoGo - магазина верхней одежды</h1>
          <Hero />
          <h4>БРЕНД</h4>
          <p>Бренд видит себя маяком в мире моды, ориентированным на все более требовательную аудиторию, и всего за два года компания объединила под своим брендом сотню магазинов. В настоящее время, спустя 18 лет, сеть располагает более, чем 1000 магазинами и охватывает более 70 рынков. Объем продаж сети составляет 9% от общего объема доходов всей группы.</p>
          <h4>
          ЦЕЛЬ
          </h4>
          <p>это молодые люди, которые любят приключения, отлично разбираются в новых трендах, любят музыку, активно пользуются социальными сетями и новыми технологиями.</p>
          <h4>КОНЦЕПЦИЯ</h4>
          <p>Во всех уголках мира магазины  отличаются удобным расположением и продуманной архитектурой. Пространство магазинов новаторски преобразуется в просторные и модные площадки, а образ каждого магазина досконально продумывается: от внешнего вида витрины до расстановки и раскладки товаров внутри магазина. Bershka всегда выбирает наилучшее расположение в городе и самые удачные точки в главных торговых центрах. Часто выбор падает на уникальные здания, которые архитектурная студия Bershka восстанавливает и вдыхает в них новую жизнь, в соответствии с образом бренда и его философией.</p>
          <h4>ЛИНИИ ТОВАРОВ</h4>
          <p>Магазины представляют собой два раздельных пространства, предназначенных для различных линий товаров, которые предлагает LoGo. В каждой секции: товары расположены в соответствии с их стилем, создавая широкую палитру от повседневной до спортивной одежды, и от самых базовых предметов одежды до более стильных моделей.</p>

        </Container>
      )
    }
}
