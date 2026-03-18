import './App.css'
import {CounterBlock} from "../CounterBlock/CounterBlock.tsx";
import {CounterSettings} from "../CounterSettings/CounterSettings.tsx";
import {useEffect, useState} from "react";

function App() {

    const [settingsMaxValue, setSettingsMaxValue] = useState<number>(5);
    const [settingsMinValue, setSettingsMinValue] = useState<number>(0);

    const [counterMaxValue, setCounterMaxValue] = useState<number>(5);
    const [counterMinValue, setCounterMinValue] = useState<number>(0);

    useEffect(() => {
        const maxValueFromLocalStorage: number = JSON.parse(localStorage.getItem('COUNTER_MAX_VALUE') as string);
        const minValueFromLocalStorage: number = JSON.parse(localStorage.getItem('COUNTER_MIN_VALUE') as string);

        if (maxValueFromLocalStorage) {
            setSettingsMaxValue(maxValueFromLocalStorage);
            setCounterMaxValue(maxValueFromLocalStorage);
        }

        if (minValueFromLocalStorage) {
            setSettingsMinValue(minValueFromLocalStorage);
            setCounterMinValue(minValueFromLocalStorage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('COUNTER_MAX_VALUE', JSON.stringify(settingsMaxValue));
        localStorage.setItem('COUNTER_MIN_VALUE', JSON.stringify(settingsMinValue));
    }, [settingsMaxValue, settingsMinValue]);

    const setNewSettingsMaxValue = (newCounterValue: number) => {
        setSettingsMaxValue(newCounterValue);
    }

    const setNewSettingsMinValue = (newCounterValue: number) => {
        setSettingsMinValue(newCounterValue);
    }

    const setNewValues = () => {
        setCounterMaxValue(settingsMaxValue);
        setCounterMinValue(settingsMinValue);
    }

    const isSetButtonDisabled = settingsMaxValue !== counterMaxValue || settingsMinValue !== counterMinValue;

    return (
        <>
            <div className={'counterWrapper'}>
                <CounterSettings
                    COUNTER_MAX_VALUE={settingsMaxValue}
                    COUNTER_MIN_VALUE={settingsMinValue}
                    SET_MAX_VALUE={setNewSettingsMaxValue}
                    SET_MIN_VALUE={setNewSettingsMinValue}
                    SET_BTN_DISABLED={isSetButtonDisabled}
                    setNewValues={setNewValues}
                />
                <CounterBlock COUNTER_MAX_VALUE={counterMaxValue} COUNTER_MIN_VALUE={counterMinValue}/>
            </div>
        </>
    )
}

export default App
