//What is love?

//Write a function that, given an array, get all objects which are instance of a preloaded class Love.

//Love has two proprietes, babyDontHurtMe and noMore. These properties apply the rules below.

//babyDontHurtMe = true -> Baby don't hurt me.
//noMore = true -> No more.
//babyDontHurtMe and noMore = true -> Baby don't hurt me, no more.
//babyDontHurtMe and noMore = false -> What is love?
//You need concat the results of all loves of the array, and return it.
//Have a fun!


function whatIsLove(arr) {
  let gr = arr.filter(a=> typeof(a)==='object');
  let sp =[];
  gr.map(a => {
    if(a.babyDontHurtMe && !a.noMore )
      sp.push("Baby don't hurt me.")
    else if(!a.babyDontHurtMe && a.noMore)
      sp.push( "No more.")
    else if(a.babyDontHurtMe && a.noMore)
      sp.push("Baby don't hurt me, no more.")
    else if(!a.babyDontHurtMe && !a.noMore)
       sp.push("What is love?");
  })
  return sp.join(' ');
};
