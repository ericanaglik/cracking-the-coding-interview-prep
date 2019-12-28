/***********************************************************
6.1: The Heavy Pill - You have 20 bottles of pills. 19
bottles have 1.0 gram pills, but one has pills of weight 1.1
grams. Given a scale that provides an exact measurement,
how would you find the heavy bottle? You can only use the
scale once.
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.2: Basketball - You have a basketball hoop and someone
says that you can play one of two games.
Game 1: You get one shot to make the hoop.
Game 2: You get three shots and you have to make two of
three shots.
If p is the probability of making a particular shot, for
which values of p should you pick one game or the other?
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.3: Dominoes - There is an 8x8 chessboard in which two
diagonally opposite corners have been cut off. You are given
31 dominoes, and a single domino can cover exactly two
squares. Can you use the 31 dominoes to cover the entire
board? Prove your answer (by providing an example or showing
why its impossible).
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.4: Ants on a Triangle - There are three ants on different
vertices of a triangle. What is the probability of
collision (between any two or all of them) if they start
walking on the sides of the triangle? Assume that each ant
randomly picks a direction, with either direction being 
equally likely to be chosen, and that they walk at the same
speed.
Similarly, find the probability of collision with n ants on
an n-vertex polygon.
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.5: Jugs of Water - You have a five-quart jug, a
three-quart jug, and an unlimited supply of water (but no
measuring cups). How would you come up with exactly four
quarts of water? Note that the jugs are oddly shaped, such
that filling up exactly "half" of the jug would be
impossible.
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.6: Blue-Eyed Island - A bunch of people are living on an
island, when a visitor comes with a strange order: all blue-
eyed people must leave the island as soon as possible. There
will be a flight out at 8:00 pm every evening. Each person
can see everyone elses eye color, but they do not know
their own (nor is anyone allowed to tell them).
Additionally, they do not know how many people have blue
eyes, although they do know that at least one person does. 
How many days will it take the blue-eyed people to leave?
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.7: The Apocalypse - In the new post-apocalyptic world, the
world queen is desperately concerned about the birth rate.
Therefore, she decrees that all families should ensure that
they have one girl or else they face massive fines. If all
families abide by this policy -- that is, they have to
continue to have children until they have one girl, at which
point they immediately stop -- what will the gender ratio of
the new generation be? (Assume that the odds of someone
having a boy or a girl on any given pregnancy is equal.)
Solve this out logically and then write a computer
simulation of it.
***********************************************************/
function apocalypseSimulation(){
  /*
  we want to know how many boys on average we will have 
  before getting a girl, we can do this by continuously 
  rolling a random number between 0 and 1, if its greater 
  than .5 we stop rolling and move to the next iteration
  Each roll will add 1 to a boys variable, and number
  of iterations ran will be the girls variable. Taking the 
  ratio of these 2 things will be the answer.
  */
  boys = 0
  girls = 10000000
  for(i = 0; i < girls; i++){
    let next = false
    while(next === false){
      child = Math.floor(Math.random() * 101)
      if(child <= 50){
        boys += 1
      } else {
        next = true
      }
    }
  }
  
  return(boys/girls)
}
console.log(apocalypseSimulation())
/********************** MY SOLUTION ************************
The simulation yields 1.02
***********************************************************/

/***********************************************************
6.8: The Egg Drop Problem - There is a building of 100
floors. If an egg drops from the Nth floor or above, it will
break. If its dropped from any floor below, it will not
break. You're given two eggs. Find N, while minimizing the
number of drops for the worst case.
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.9: 100 Lockers - There are 100 closed lockers in a
hallway. A man begins by opening all 100 lockers. Next, he
closes every second locker. Then, on his third pass, he
toggles every third locker (closes it if it is open or opens
it if it is closed). This process continues for 100 passes,
such that on each pass i, the man toggles every ith locker.
After his 100th pass in the hallway, in which he toggles
only locker #100, how many lockers are open? 
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/

/***********************************************************
6.10: Poison - You have 1000 bottles of soda, and exactly
one is poisoned. You have 10 test strips which can be used
to detect poison. A single drop of poison will turn the
test strip positive permanently. You can put any number of
drops ona  test strip at once and you can reuse a test strip
as many times as you'd like (as long as the results are
negative). However, you can only run tests once per day and
it takes seven days to return a result. How would you figure
out the potential poisoned bottle in as few days as
possible?

FOLLOW UP
Write code to simulate your approach.
***********************************************************/

/********************** MY SOLUTION ************************

***********************************************************/