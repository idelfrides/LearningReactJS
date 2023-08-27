import Button from "./buttons/Button";

// isto é dezestruturaçao --> function Events({ number }){

function Events(){

    /* para invocar o método q dispara um evento,
    recreve-se apenas o seu nome sem '()' -> myEvent */
    
    function myEvent(){
        console.log("Activating the first event!")
    }

    function myEvent2(){
        console.log("Activating the second event!")
    }

    return (
        <div>
            <p>Click to run an event </p>
            <Button event={myEvent} text='First Event'/>
            <Button event={myEvent2} text='Second Event'/>
            {/* <button  onClick={myEvent}>Make Activate</button> */}
        </div>
    )
}

export default Events;