
const ind_team = ["MS Dhoni","Rohit","virat"]

const Aus_team = ["Maxwell","Starc","Warner"]

const newz_team = ["boult","conway","sentner"]

const IPL = ind_team.concat(...Aus_team, ...newz_team)  // concat func()  se hm 2 arrays ko merge kr sakte hain

console.log("Ind",ind_team);
console.log("Aus",Aus_team);
console.log("Newz",newz_team);
console.log("iPL",IPL);


const annother_array = [1,2,3,[5,4,3],10,30,[11,22,33,44,[50,40,70,60]]]
const real_another_array = annother_array.flat(Infinity)
// flat() ka use ham tb krte hain jb ek array k andar multiple array ho aur unke ,
// sbhi arrays k elements ko ek single array mein lana ho tb

console.log("another_array",annother_array);
console.log("real_another_array",real_another_array);