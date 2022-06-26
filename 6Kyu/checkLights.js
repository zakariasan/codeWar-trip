//Task
//John works in a factory that produces traffic lights. His task is to check whether the traffic lights are qualified. He will judge three indicators: the color of the light, the radius size and the switching logic. Finally, he will give the product a final result: qualified or not qualified





const COLORS = {
    red : /^#(a[a-f]|[b-f]|[0-9a-f])0000$/i,
    yellow : /^#(a[a-f]|[b-f]|[0-9a-f]){2}00$/i,
    green : /^#00(a[a-f]|[b-f]|[0-9a-f])00$/i,
};

const STEPS = {red:"yellow,,,", yellow:",green,,red", green:",,yellow,"};

function checkLights(lights){
    return Object.entries(lights).some(([color, light])=>{
        !COLORS[color].test(light.color) 
        ||light.raduis < 9.5
        ||light.raduis >10.5
        ||STEPS[color] !== [light.step1, light.step2, light.step3, light.step4].join();
    }) ?"not qualified": "qualified" }

var lights={
    red:{color:"#ff0000",radius:10,step1:"green",step2:"",step3:"",step4:""},
    yellow:{color:"#ffff00",radius:10.5,step1:"",step2:"green",step3:"",step4:"red"},
    green:{color:"#00ff00",radius:9.5,step1:"",step2:"",step3:"yellow",step4:""}
    }
console.log(checkLights(lights))
