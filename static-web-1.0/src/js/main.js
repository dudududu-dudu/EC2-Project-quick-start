import './style.css'
import FWDao from '/FWDao.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://www.bilibili.com/video/BV1ZS411A7b9/?spm_id_from=333.337.search-card.all.click&vd_source=db03767a816f04a3d12f4991d8d84e2b" target="_blank">
      <img src="${FWDao}"/>
    </a>
    <h1>这里也可以插html tag啊啊啊啊啊啊啊啊啊啊啊啊啊!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
