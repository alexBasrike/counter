import css from './CounterSettings.module.css';
import {Button} from "../Button/Button.tsx";
import type {ChangeEvent} from "react";

type CounterSettingsProps = {
    COUNTER_MAX_VALUE: number
    COUNTER_MIN_VALUE: number
    SET_MAX_VALUE: (counterMaxValue: number) => void
    SET_MIN_VALUE: (counterMinValue: number) => void
    SET_BTN_DISABLED: boolean
    setNewValues: () => void
}

export const CounterSettings = ({
                                    COUNTER_MAX_VALUE,
                                    COUNTER_MIN_VALUE,
                                    SET_MAX_VALUE,
                                    SET_MIN_VALUE,
                                    SET_BTN_DISABLED,
                                    setNewValues
                                }: CounterSettingsProps) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        SET_MAX_VALUE(Number(e.currentTarget.value));
    }

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        SET_MIN_VALUE(Number(e.currentTarget.value));
    }

    return (
        <div className={css.counterSettings}>

            <div className={css.counterSettingsParams}>
                <p>
                    <span>max value: </span>
                    <input type="number" value={COUNTER_MAX_VALUE} onChange={onChangeMaxValueHandler}/>
                </p>
                <p>
                    <span>start value: </span>
                    <input type="number" value={COUNTER_MIN_VALUE} onChange={onChangeMinValueHandler}/>
                </p>
            </div>

            <div className={css.counterSettingsButton}>
                <Button callBack={setNewValues} disabled={!SET_BTN_DISABLED}>set</Button>
            </div>

        </div>
    );
};