import { useRef, useState } from 'react'
import FloatingSelector from '../ReusableComponents/FloatingSelector/FloatingSelector'
import './GameGround.css'
import Dialog from '../Dialog/Dialog';

export default function GameGround() {
    const labels = [2, 5, 10];
    let dialogRef = useRef();
    var timer = useRef();
    var time = useRef();
    const [timeSelected, updateSelectedTime] = useState(2);
    const [gameStatus, updateGameStatus] = useState(false);
    const [scoreObject,updateScoreObject] = useState({
        totalTime:null,
        remainingTime:null
    })
    function buttonAction() {
        if (gameStatus == false) {
            time.current = timeSelected * 1000;
            updateGameStatus(true);
            startGame();
        }
        else {
            updateGameStatus(false);
            endGame();
        }
    }
    function startGame() {
        timer.current = setInterval(() => {
            time.current = time.current - 10;
            if (time.current < 0) {
                endGame()
            }
        }, 10)
    }

    function endGame() {
        if (timer.current) {
            clearInterval(timer.current);
        }
        updateGameStatus(false);
        updateScoreObject((prevObject) => {
            return {
                totalTime: timeSelected,
                remainingTime: time.current
            }
        });

        dialogRef.current.open();
        
    }

    function onRestart() {
        console.log('Dialog closed..');
        updateScoreObject((prevObject) => {
            return {
                totalTime: null,
                remainingTime: null
            }
        });
    }

   

    return (<div className='game-ground'>
        <div className="box">
            <div className="content">
                <FloatingSelector labels={labels} gameStatus={gameStatus} timeSelected={timeSelected} updateSelectedTime={updateSelectedTime} />
                <h2>Catch : {timeSelected} seconds</h2>
                <button onClick={buttonAction}>{gameStatus ? 'End' : 'Start'}</button>
            </div>
        </div>

        <Dialog ref={dialogRef} scoreObject={scoreObject} onAction={onRestart} />
    </div>)
}