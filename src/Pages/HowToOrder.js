import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class HowToOrder extends Component {
  render() {
    return (
      <Container className="mt-5">
        <h4>
        Как оформить заказ? Пошаговая инструкция
        </h4>
        <p>1. Выбрать инструкцию для наиболее удобной для вас платформы:
Описание оформления заказа на сайте находится ниже
Мобильная версия сайта
Приложение на iOS
Приложение на Android</p>
<p>2. Найти необходимый товар;</p>
<p>3. Выбрать необходимый размер. Для этого используйте гид по определению размеров;</p>

<p>4. Нажать на кнопку «Добавить в корзину»;</p>

<p>5. На экране появится всплывающее окно, в котором будет возможность либо вернуться к покупкам, нажав кнопку «Продолжить покупки», либо перейти к оформлению заказа, нажав кнопку «Оформить заказ» внизу. Выберите необходимое действие;</p>

<p>6. Чтобы удалить из Корзины ненужные позиции, наведите курсор на эту позицию, справа появится кнопка «Убрать из корзины»;</p>

<p>7. На странице оформления нужно внести все контактные данные*;

* если вы не хотите получать рассылку, то снимите галочку в поле «Подписаться на новости и скидки»;</p>

<p>8. Чтобы применить промо-код, укажите код купона в поле «Промо-код» и нажмите кнопку «Применить»;</p>

<p>9. Выберите удобный вариант оплаты;</p>

<p>10. Нажмите кнопку «Отправить заказ»;</p>

<p>11. После нажатия кнопки «Отправить заказ» появится сообщение об успешно завершенной процедуре оформления заказа.</p>
    
      </Container>
    )
  }
}