function gps(s, x) {
    // your code  
  console.log(s,x)
  let dis = []
  let v = []
  let max = 0
  if(x.length <=1 )
    return 0
  for(let i = 0; i< x.length -1;i++){
    dis[i] = Math.abs(x[i] - x[i+1]);
    v[i] = Math.floor((dis[i] * 3600)/s);
  
  }
  v = Math.max(...v)

  return v
}

/*In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:*/

/*x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]*/
/*The sections are:*/

/*0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25*/
/*We can calculate John's average hourly speed on every section and we get:*/


