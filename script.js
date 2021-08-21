const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
]

const renderGoodsItem = (title, price) => {
  return `<div class="goods-item">
            <div class="img-wrap">
              <img src=" " alt="">
            </div>
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="goods-button" type="button">Купить</button>
          </div>`
}

function renderGoods(item) {
  return renderGoodsItem(item.title, item.price)
}

const renderGoodsList = (list) => {
  let goodsList = list.map(renderGoods)
  let str = ''

  goodsList.forEach((element) => {
    str = str + element
  })
  document.querySelector('.goods-list').innerHTML = str
  
}

renderGoodsList(goods)
