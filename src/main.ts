import './style.css'
import { Timer } from './objects/timer'

function animate(time: number) {



  requestAnimationFrame(animate)
}

const t = new Timer({t: 100});

