import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', throttle(function({seconds}) {
        console.log('played the video!');
        console.log(seconds);
        localStorage.setItem('videoplayer-current-time', seconds);
    
}, 1000));


// player.on(
//     'timeupdate',
//     throttle(function ({ seconds }) {
//       localStorage.setItem('videoplayer-current-time', seconds);
//     }, 1000)
// //   );
// localStorage.setItem("videoplayer-current-time", "time");

const lastTime = localStorage.getItem('videoplayer-current-time');
console.log(`last time`, lastTime);

function testTime(){
    if(lastTime){
        player.setCurrentTime(lastTime)
    }
}
testTime();