## ScrumDoro


#### To Do List :
* Should runs on Electron
* Should be accessible by web aswell (React ? AngularJS ?)
* Should use a noSQL DB (mongoDb ? LokiJS ?)

* Should have a backlog
    * Backlog should allow to add :
        * story (which could have sub-task)
        * bug (//)
        * task
    * Backlog should allow to create Sprint (weekly)
* Should have a ScrumBoard displaying all the card (task+subtask)
    * Should be divided in three :
        * Todo
        * Doing
        * Done
    * Could have also :
        * Testing
        * Deployed
* Should be able to estimate task in minutes
* Should be able to settings :
    * Pomodoro default times ?
    * Set number of days worked
    * Set number of hours worked / days
* Should have a Pomodoro Sprint
    * Where the week is displayed in days
    * Where card could be moved into the days column (organize it over time)

* Should have a Dashboard
    * Where you could "Start" your day, having the list of task displayed
    * Where you could order task chronologicaly (Task#1 : 8pm to (8pm+estimatedTime),...) having a timer going from 25:00 to zero (or in minus) till you re-click on
       the button.

    Eg :
    I click : Start my day, list of Task appears : [{name:Scrumdoro-1, estimatedTime:50mn, order:1}, {name:Scrumdoro-2, estimatedTime:10mn, order:2}].
    I select (=> highlight) a task (I want to start doing it), press big button, it launches timers. If I go on brake (cig),
    I press red button "Stop", it store a pomodoroTime and gives to task 1 : Remaining time : 50mn - timeOfPomodoro.
    If I am procrastinating on Facebook, I press yellow button Pause, it just pause time (to give estimation correct).
    When I'm back, I press yellow button again (it will be like a switch maybe for visual information of state pause/unpause?)
    When i'm done I press green button : I have finished !, it does same as red button.


There are a lot of other stuff I want to put in. But let's start with this basis


#### Road Map

Future :

* 30 August - V 0.2 - Should fullfill above Todo List
* 31 July - V 0.1 - Should have a working alpha

Past :
* 1 July 2016 - V0.0 - Initial commit, branching old code to prototype.



