import { useEffect, useState } from "react";

const ClickCounterComponent = () => {

    const [clickCount1, setClickCount1] = useState(0);
    const [clickCount2, setClickCount2] = useState(0);
    const [intervalCount, setIntervalCount] = useState(0);

    console.log("Render called");

    useEffect(() => {
        console.log("useEffect for clickCount1");
    }, [clickCount1]);

    useEffect(() => {
        console.log("useEffect for clickCount2");
    }, [clickCount2]);

    useEffect(() => {
        console.log("useEffect for clickCount1 and clickCount2");

        // This will be called before the code inside useEffect will run
        // This is where you will abort/cancel previous/in progress requests when user reloads page for security, called Unmounting
        return () => {
            console.log("useEffect for no state parameter clean up");
        }
    }, [clickCount1, clickCount2]);

    // This will run only once - works like constructor
    useEffect(() => {
        console.log("useEffect for no state parameter");

        return () => {
            console.log("useEffect for no state parameter clean up");
        }
    }, []);

    // This will run in every 1 second
    /* useEffect(() => {
        const interval = setInterval(() => {
            setIntervalCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []); */

    const person = {
        firstName: "Juan",
        lastName: "Dela Cruz"
    };

    useEffect(() => {
        console.log("useEffect for object");
    }, [person.firstName]);

    useEffect(() => {
        console.log("useEffect for array");
    }, [1, 2, 3]);

    return (
        <div>
            <h2>Click Counter</h2>
            <p>
                <label>Click Count: {clickCount1}</label>
                <button onClick={e => setClickCount1(prev => prev + 1)}>Click Count 1</button>
            </p>
            <p>
                <label>Click Count: {clickCount2}</label>
                <button onClick={e => setClickCount2(prev => prev + 1)}>Click Count 2</button>
            </p>
            {/* <p>
                <label>{intervalCount}</label>
            </p> */}
        </div>
    );

};

export default ClickCounterComponent;