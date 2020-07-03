import React, { useState } from 'react'
import './styles/RecipePage.css'

function RecipePage() {

  let url = "http://uppizzadoner.com/wp-content/uploads/2019/04/tost2.jpg"
  return (
    <div className="recipe-page-wrapper">
      <div className="recipe-page-img-ingredients-wrapper">
        <div style={{ backgroundImage: `url(${url})` }} className="recipe-page-img">
          <div className="under-image-info">

            <div>
              <h1>Karışık Tost</h1>
              <p>Kahvaltının vazgeçilmezi</p>
              <span>Kahvaltılık</span>
              <span> - </span>
              <span>5 dk hazırlama</span>
              <span> - </span>
              <span>5 dk pişirme</span>
              <span> - </span>
              <span>4 Kişilik</span> </div>
          </div>
        </div>
        <div className="recipe-page-ingredients">
          <h2>Malzemeler</h2>
          <ul>
            <li>200 gram sucuk</li>
            <li>400 gram kaşar peyniri</li>
            <li>1 yemek kaşığı salça</li>
            <li>2 yumurta</li>
            <li>1 çay kaşığı kırmızı biber</li>
            <li>dilediğiniz kadar kekik</li>
            <li>isteğe göre ketçap</li>
            <li>isteğe göre mayonez</li>
          </ul>
        </div>
      </div>

      <div className="recipe-page-content">
        <h2>Tarif Adımları</h2>
        <ul>
          <li>sucukları kes</li>
          <li>kaşarları kes kes</li>
          <li>yumurtaları çırp</li>
          <li>sucukları ekmeğin üzerindeyken tost makinesinde çevirerek pişir</li>
          <li>sucuklar pişince çırpılan yumurtayı dök, tost makinesini 10 sn. kapatıp pişir</li>
          <li>yumurta piştikten sonra ekmeği açıp kaşarları koy, salçasını sür, dışına tereyağını sür</li>
          <li>kaşarlar eriyinceye kadar pişir</li>

        </ul>
      </div>

    </div>
  )
}

export default RecipePage
