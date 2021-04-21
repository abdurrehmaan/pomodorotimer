const worktime = document.querySelector('.workinterval');
const breaktime = document.querySelector('.breakinterval');
const startbutton = document.querySelector('.btnstart')
const pausebutton = document.querySelector('.btnpause')
const resumebutton = document.querySelector('.btnresume')
const stopbutton = document.querySelector('.btnstop')
const taskname = document.querySelector('.taskname')
const worktimer = document.querySelector('.worktimer');
const worktimer2 = document.querySelector('.worktimer2');

let i = 0;


isworktime = true;
isbreaktime = true;

let wt = worktime.value;
let totalWorkTime = wt * 60;
let bt = breaktime.value;
let totalbreakTime = bt * 60;


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
    console.log("i am in break timer");
    i++;
    let newbreaktime = totalbreakTime;
    let seconds = parseInt(newbreaktime % 60);
    let minuts = parseInt(newbreaktime / 60) % 60;
    worktimer.classList.remove("greencolor");
    worktimer.classList.add("yellowcolor");
    const html = `<h1><span class="minuts">${minuts}</span>: <span class="seconds">${seconds}</span></h1>`
    worktimer.innerHTML = html;





}
startbutton.addEventListener('click', () => {
    let abc = setInterval(e => {
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

    }, 100);

})





