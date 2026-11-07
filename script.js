const nameInput=document.getElementById("name");
const mathInput=document.getElementById("math");
const scienceInput=document.getElementById("science");
const englishInput=document.getElementById("english");
const btnInput=document.getElementById("btn");
const resultInput=document.getElementById("result");
const rnameInput=document.getElementById("resultname");
const totalInput=document.getElementById("total");
const percentageInput=document.getElementById("percentage");
const statusInput=document.getElementById("status");

btnInput.addEventListener("click",
    function(){
        const name=nameInput.value.trim();
        const math=mathInput.value;
        const science=scienceInput.value;
        const english=englishInput.value;

        if(name ===""|| math ===""||science ===""||english==="")
        {
            alert("please fill in all fields!");
            return;
        }
        const m1=Number(math);
         const m2=Number(science);
          const m3=Number(english);

        const marks=[m1,m2,m3];
    if(marks.some(mark=>
        !Number.isInteger(mark)||mark<0||mark>100
    ) ){
    alert("enter whole marks between 0 and 100");
    return;}
const total=m1+m2+m3;
const percentage=(total/300)*100;

const passed=marks.every(mark=>
    mark>=40
);
rnameInput.textContent="Student:"+ name;
totalInput.textContent="Total marks:"+ total +"/300";
percentageInput.textContent="Percentage:"+percentage.toFixed(2)+"%";
 if (passed){
    statusInput.textContent="Result:PASS"
    statusInput.style.color="green";
 }
 else{
    statusInput.textContent="Result:FAIL"
    statusInput.style.color="red";
 }
 resultInput.style.display="block";
});