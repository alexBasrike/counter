import css from './CounterBlock.module.css'
import {useEffect, useState} from "react";
import {Button} from "../Button/Button.tsx";

type CounterBlockProps = {
    COUNTER_MAX_VALUE: number
    COUNTER_MIN_VALUE: number
}

export const CounterBlock = ({
                                 COUNTER_MAX_VALUE,
                                 COUNTER_MIN_VALUE
                             }: CounterBlockProps) => {

    const [counter, setCounter] = useState<number>(COUNTER_MIN_VALUE);

    const increaseCounter = () => setCounter(counter + 1);
    const resetCounter = () => setCounter(COUNTER_MIN_VALUE);

    const reachedMaxValue = counter === COUNTER_MAX_VALUE;
    const reachedMinValue = counter === COUNTER_MIN_VALUE;

    useEffect(() => {
        resetCounter();
    }, [COUNTER_MAX_VALUE, COUNTER_MIN_VALUE]);

    return (
        <div className={css.counterBlock}>

            <div className={css.counterValue + ' ' + (reachedMaxValue ? css.counterValueReachedMax : '')}>
                {counter}
            </div>

            <div className={css.counterButtons}>
                <Button callBack={increaseCounter} disabled={reachedMaxValue}>inc</Button>
                <Button callBack={resetCounter} disabled={reachedMinValue}>reset</Button>
            </div>

        </div>
    );
};