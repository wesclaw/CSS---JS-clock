const time = document.getElementById('time')

const second_hand = document.querySelector('.second')
const minute_hand = document.querySelector('.minute')
const hour_hand = document.querySelector('.hour')

function getDate(){
  const date = new Date()
  const hours = date.getHours()
  const minute = date.getMinutes()
  const seconds = date.getSeconds()
  ///degrees
  const s_degrees = ((seconds/60)*360) + 90;
  const m_degrees = ((minute/60)*360) + 90;
  const h_degrees = ((minute/12)*360) + 90;
  second_hand.style.transform = `rotate(${s_degrees}deg)`
  minute_hand.style.transform = `rotate(${m_degrees}deg)`
  hour_hand.style.transform = `rotate(${h_degrees}deg)`
  time.textContent = hours + ':' + minute + ':' + seconds
}

setInterval(getDate, 1000)