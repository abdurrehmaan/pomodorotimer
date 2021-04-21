const worktime = document.querySelector('.workinterval');
const breaktime = document.querySelector('.breakinterval');
const startbutton = document.querySelector('.btnstart')
const pausebutton = document.querySelector('.btnpause')
const resumebutton = document.querySelector('.btnresume')
const stopbutton = document.querySelector('.btnstop')
const taskname = document.querySelector('.taskname')
const worktimer = document.querySelector('.worktimer');
const worktimer2 = document.querySelector('.worktimer2');
const completedList = document.querySelector('.completedList ul ');

let i = 0;
let isworktime;
let isbreaktime;
let ispause;
let wt;
let totalWorkTime;
let bt;
let totalbreakTime;

function refresh() {
    isworktime = true;
    isbreaktime = false;
    ispause = false;
    i = 0;
    wt = worktime.value;
    totalWorkTime = wt * 60;
    bt = breaktime.value;
    totalbreakTime = bt * 60;
    const html = `<h1><span class="minuts">00</span>: <span class="seconds">00</span></h1>`
    worktimer.innerHTML = html;
}
refresh();




let worktimefun = () => {
    let newworktime = totalWorkTime;
    let seconds = parseInt(newworktime % 60);
    let minuts = parseInt(newworktime / 60) % 60;
    i++;
    worktimer.classList.remove("yellowcolor");
    worktimer.classList.add("greencolor")


    const html = `<h1><span class="minuts">${minuts}</span>: <span class="seconds">${seconds}</span></h1>`
    worktimer.innerHTML = html;


}

let breaktimefun = () => {
    i++;
    let newbreaktime = totalbreakTime;
    let seconds = parseInt(newbreaktime % 60);
    let minuts = parseInt(newbreaktime / 60) % 60;
    worktimer.classList.remove("greencolor");
    worktimer.classList.add("yellowcolor");
    const html = `<h1><span class="minuts">${minuts}</span>: <span class="seconds">${seconds}</span></h1>`
    worktimer.innerHTML = html;





}
let abc
startbutton.addEventListener('click', () => {

    abc = setInterval(e => {
        if (!ispause) {
            if (isworktime) {
                worktimefun();
                if (totalWorkTime == 0) {
                    isbreaktime = true;
                    isworktime = false;
                    wt = worktime.value;
                    totalWorkTime = wt * 60;
                }
                else {
                    totalWorkTime--;
                }

            }
            else {
                breaktimefun();
                if (totalbreakTime == 0) {
                    isbreaktime = false;
                    isworktime = true;
                    bt = breaktime.value;
                    totalbreakTime = bt * 60;


                }
                else {
                    totalbreakTime--;
                }

            }

        }
    }, 100);


})

pausebutton.addEventListener('click', e => {

    ispause = true;

})
resumebutton.addEventListener('click', e => {
    ispause = false;
})
stopbutton.addEventListener('click', e => {

    clearInterval(abc)
    displayinlist(i)
    refresh()



})
function displayinlist(i) {


    let newworktime = i;
    let seconds = parseInt(newworktime % 60);
    let minuts = parseInt(newworktime / 60) % 60;
    let hours = parseInt(newworktime / 3600);
    console.log(hours, ":", minuts, ":", seconds)
    let message = `<li>Task completed in ${hours} : ${minuts}: ${seconds}</li>`;
    completedList.innerHTML += message



}




