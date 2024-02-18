import {useState,useEffect} from 'react';
function DigitalClock(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const intervalInstance = setInterval(()=>{
            setTime(t=>new Date().toLocaleTimeString());
        },1000)
        console.log("df"); // -> this runs every second if no dependency attached
        // now this console.log() only runs once however the interval keeps going :)
        return ()=>{
            clearInterval(intervalInstance)
        }
    },[]);
    return(
        <div>
            <p>Time: {time}</p>
        </div>
    );

}
export default DigitalClock;