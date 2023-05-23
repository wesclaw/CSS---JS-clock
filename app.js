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




// const time = document.getElementById('time')

// const second = document.querySelector('.second')
// const minute = document.querySelector('.minute')
// const hour = document.querySelector('.hour')

// function getDate(){
// const date = new Date()
// const h = date.getHours()
// const m = date.getMinutes()
// const s = date.getSeconds()
// const s_degrees = ((s/60)*360)+90;
// const m_degrees = ((m/60)*360)+90;
// const h_degrees = ((m/12)*360)+90;
// hour.style.transform = `rotate(${h_degrees}deg)`
// minute.style.transform = `rotate(${m_degrees}deg)`
// second.style.transform = `rotate(${s_degrees}deg)`
// time.textContent = h + ':' + m + ':' + s
// }

// setInterval(getDate, 1000)