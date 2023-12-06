/*
Time:        60     80     86     76
Distance:   601   1163   1559   1300
*/

interface Race {
  t: number
  d: number
}

const races:Race[] = [
  { t:60, d:601 },
  { t:80, d:1163 },
  { t:86, d:1559 },
  { t:76, d:1300 }
]

const searchLowerBound = (r:Race) => {
  for(let i = 0; i < r.t; i++) {
    let tRest = r.t - i
    let dist = tRest * i
    if(dist > r.d) return i
  }
  return r.t;
}

const searchUpperBound = (r:Race) => {
  for(let i = r.t; i > 0; i--) {
    let tRest = r.t - i
    //console.log(tRest)
    let dist = tRest * i
    //console.log(dist, r.d)
    if(dist > r.d) return i
  }
  return 0;
}

let result = 1;
races.forEach( r => {

  const upper = searchUpperBound(r);
  const lower = searchLowerBound(r);
  console.log( r.t - upper , lower, "should be the same" )
  

  result *= (upper - lower + 1)

})

console.log(result)