import css from './CounterBlock.module.css'
import {useEffect, useState} from "react";
import {Button} from "../Button/Button.tsx";

type CounterBlockProps = {
    COUNTER_MAX_VALUE: number
    COUNTER_MIN_VALUE: number
    IS_VALUES_CORRECT: boolean
    SET_BTN_DISABLED: boolean
}

export const CounterBlock = ({
                                 COUNTER_MAX_VALUE,
                                 COUNTER_MIN_VALUE,
                                 IS_VALUES_CORRECT,
                                 SET_BTN_DISABLED
                             }: CounterBlockProps) => {

    const [counter, setCounter] = useState<number>(COUNTER_MIN_VALUE);

    const increaseCounter = () => setCounter(prevState => prevState + 1);
    const resetCounter = () => setCounter(COUNTER_MIN_VALUE);

    const reachedMaxValue = counter === COUNTER_MAX_VALUE;
    const reachedMinValue = counter === COUNTER_MIN_VALUE;
    const incorrectValues = !IS_VALUES_CORRECT;
    const editingMaxMinValue = SET_BTN_DISABLED

    useEffect(() => {
        resetCounter();
    }, [COUNTER_MAX_VALUE, COUNTER_MIN_VALUE]);

    let counterBlockContent;
    if (!IS_VALUES_CORRECT) {
        counterBlockContent = <span>Incorrect value!</span>
    } else if (SET_BTN_DISABLED) {
        counterBlockContent = <span>enter values and press 'set'</span>
    } else {
        counterBlockContent = counter
    }

    return (
        <div className={css.counterBlock}>

            <div className={css.counterValue + ' ' + (reachedMaxValue ? css.counterValueReachedMax : '')}>
                {counterBlockContent}
            </div>

            <div className={css.counterButtons}>
                <Button callBack={increaseCounter} disabled={reachedMaxValue || editingMaxMinValue || incorrectValues}>inc</Button>
                <Button callBack={resetCounter} disabled={reachedMinValue || editingMaxMinValue || incorrectValues}>reset</Button>
            </div>

        </div>
    );
};