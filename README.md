# Build your own Promodoro Timer
## Promodoro Timmer by Abdur Rehman
| Contributors | Profile links |
| ------ | ------ |
| Abdur Rehman | https://github.com/abdurrehmaan |
| Zeenat Parveen | https://github.com/Zeeizee |


| Demo | Source Code |
| ------ | ------ |
| https://promodorotimer.netlify.app/ | https://github.com/abdurrehmaan/pomodorotimer |




Today we will be creating Promodoro timer to track the totle work time and break time of a specific task . 

This task giving by @Raheel(Devnation) during the Web Programming course. The was was to build a promodoro timer which tells you exactly when the task was started and when to take a short break. At the End show the completed task and with calculated tasktime (tasktime + breaktime)
Note: `tasktime == worktime`;

###The basic process is as follows:
- Start a 25-minute timer.
- Work until the timer rings.
- Take a short, five minutes break.
- List the Completed to task
- Calculate to total time(worktime + breaktime)

## User Interface
![image](https://user-images.githubusercontent.com/29798155/116761217-77344b00-aa30-11eb-9023-f754d7448aee.png)


## User Task
These are the user stories for this Pomodoro Timer:
- User can start / stop a timer
- User can Pause / Resume a timer
- User can add the title of a task
- User can see a list of the completed pomodoro task with completed time. 

### framework and Toolkit 

We used Bootstrap which is open-source CSS framework 
```
 <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
```

And We for Icons we Font-awesome icon sets and tools 

```
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" />
```



### Promodoro Structure
We will start by creating a simple HTML structure to display a timer and add buttons to start, pause and stop it. 

``` 
 <div class="container my-3">
        <h2 class="text-uppercase text-center display-4">Promodoro Timer</h2>
        <div class="worktimer my-4">
        </div>
        <div>
            <input type="text" class="taskname" placeholder="Enter your Task here">
        </div>
        <div class="wb-box my-4">
            <div class="wt-box">
                <label for="">Work Time</label>
                <input type="number" class="workinterval" value="25" readonly>
            </div>
            <div class="wt-box">
                <label for="">Break Time</label>
                <input type="number" class="breakinterval" value="5" readonly>
            </div>
        </div>
        <div class=" alertmessagebox text-center mb-2"><small class="alertmessage d-none font-weight-bold ">Enter task
                name before
                start</small>
        </div>
        <div class="actionbtns">
            <button class="btnstart startgrey "><i class="fas fa-play-circle"></i></button>
            <button class="btnpause bg-warning d-none "><i class="fas fa-pause-circle"></i></button>
            <button class="btnresume bg-warning d-none "><i class="fas fa-step-forward"></i> </button>
            <button class="btnstop bg-danger d-none "><i class="fas fa-stop-circle"></i></button>
        </div>
        <div class="mt-4">
            <span class="text-uppercase text-center display-5 ">Your Completed Tasks</span>

        </div>
        <div class="completedList my-3">
            <ul class="py-3">

            </ul>

        </div>
    </div>
  ```
  
 # Styling Promodoro Timer 
  
```
  :root{
    --gray: #eeeded;
}
.yellowcolor {
    background: #e67e22;
    color:white;
}
.greencolor {
    background: #2980b9;
    color:white;
}
.container{
    max-width: 400px;
}
.worktimer {
    height: 150px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    /* background-color: var(--gray); */
    /* border: none; */
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.worktimer2 {
    height: 150px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: white;
    /* border: none; */
    outline: none;
    color:#2980b9;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.worktimer span {
    font-size: 5rem;
}
.taskname{
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    /* background-color: var(--gray); */
    padding: 20px;
    border-radius: 5px;
    /* background-color: #2980b9; */
    color: #2980b9;;
    font-size: 1.5rem;
    border: 2px solid #2980b9;
}
.wb-box{
    display: flex;
    justify-content: center;
    align-items: center;
}
.wb-box .wt-box {
    margin: 10px;
    text-align: center;
}
.wb-box .wt-box label {
    font-size: 1.2rem;
    font-weight: 600;
}
.wb-box .wt-box input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-size: 1.5rem;
}
.startgrey{
    background-color: #2980b9;
    opacity: 0.5;
}
.startblue{
    background-color: #2980b9;
    color:white;
}
.alertmessagebox
{
    height: 25px;
    width: 100%;
    color:#e67e22;
}
.workinterval {
    background-color: #2980b9;
    color: white;
}
.breakinterval{
    background-color: #e67e22;
    color: white;
}
.actionbtns{
    display: flex;
    justify-content: center;
    align-items: center;
}
.actionbtns button{
    margin: 5px;
    width: 50%;
    padding: 20px;
    border: none;
    border-radius: 5px; 
    color: white;
    font-size: 1.2rem;
}
.fas{
    font-size: 2.5rem;
}
.completedList ul {
  list-style:decimal;
    width: 100%;
    background-color: #a5d6f7;
    color: white;   
}
.completedList ul li { 
    background-color: white;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
    color: #2980b9;
    padding: 10px 10px;
    font-size: 1.2rem;
}
  ```
  
  
# Create a function to format and display the time

First, I defined all the variables. As I was not using jQuery, I ensured that I captured all my elements using `document.querySelector.`
When the ‘start’ button is clicked, the interval is cleared. A new interval is set if isPaused changes from true to false.
The ‘reset’ button clears the interval, and resets the variables.

The timer function is where the countdown magic happens. It deducts one second from seconds. If seconds <; 0, the alarm is played, and the function determines if the next countdown should be a work session or break session

Now it’s time to work on the +/- buttons for the work and break durations. Initially, I created an onclick function for every button. While it was functional, there was definitely room for improvement.
It’s time to update the HTML!
I created functions to update the countdown display and button display, and incorporated those functions into an overarching function that also updated the Work/Break status and durations.
Finally, I used document.onclick to run the updateHTML function everytime the user clicks on the page. I also used window.setInterval to run the function 10 times a second for good measure.

```
function setInitialTime() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

function start_work() {

  taskName = document.getElementById("taskname").value;
  const workTime = document.getElementById('worktime').value;
  const breakTime = document.getElementById('breaktime').value;
  session_minutes = workTime-1;
  session_seconds = 59;
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
  minutes_interval = setInterval(minutesTimer, 60000);
  seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;
 
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
        document.getElementById("done").innerHTML = "Session Done, Take a Break!";
        document.getElementById("done").classList.add("show_message");
        start_break(breakTime);
      }
      session_seconds = 60;
    }
  }
}
function start_break(breakTime) {
  
  session_minutes = breakTime-1;
  session_seconds = 59;

  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  
  minutes_interval = setInterval(minutesTimer, 60000);
  seconds_interval = setInterval(secondsTimer, 1000);

 
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }


  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

  
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        
        document.getElementById("done").innerHTML = "Break Finished! Continue Working now!";
        document.getElementById("done").classList.add("show_message");

        start_work()
      }
      session_seconds = 60;
    }
  }
}
function reset(){

  clearInterval(minutes_interval)
  clearInterval(seconds_interval)
  let session_seconds = "00";
  let session_minutes = 00;
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}
function startTime(){

  const dateNow = new Date();
  return dateNow
}

function stopTime(){
  const dateNow = new Date()
  return dateNow

}

document.getElementById("start-button").addEventListener("click", () => {
  start_work();
  start = startTime()
  
  document.getElementById("start-button").classList.add("d-none")
  document.getElementById("pause-button").classList.remove("d-none")
});

document.getElementById("pause-button").addEventListener("click", () =>{
  clearInterval(minutes_interval)
  clearInterval(seconds_interval)

  document.getElementById("pause-button").classList.add("d-none")
  document.getElementById("resume-button").classList.remove("d-none")
  
} )
document.getElementById("resume-button").addEventListener("click", () => {
  
  minutes_interval = setInterval(()=> {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;}, 
    60000);

  seconds_interval = setInterval(() => {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;
  }, 1000);

  document.getElementById("pause-button").classList.remove("d-none")
  document.getElementById("resume-button").classList.add("d-none")
  document.getElementById("start-button").classList.add("d-none")
})
document.getElementById("reset-button").addEventListener("click", () => {
  reset();
  stopp = stopTime()
  totalTime = dateFns.distanceInWords(start, stopp, {addSuffix: true})

  const completedSessionList = document.querySelector('#sessions-list')
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">${taskName} was completed ${totalTime}</li>`;

  completedSessionList.innerHTML += html;

  document.getElementById("done").innerHTML = "";
  document.getElementById("done").classList.remove("show_message");

  document.getElementById("start-button").classList.remove("d-none")
  document.getElementById("pause-button").classList.add("d-none")
  document.getElementById("resume-button").classList.add("d-none")

});
```
And that’s the wrap up of my project!
You’ve reached the end of this tutorial. At this point, you should have a functioning Pomodoro timer application with useful features like sound alerts and notifications. If you have any questions or suggestions, please leave a comment below.

Thanks for reading, and happy coding!
