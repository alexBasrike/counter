import React from "react";
import css from "./Button.module.css";

type TypeButtonProps = {
    children: React.ReactNode
    callBack: () => void
    disabled?: boolean
}

export const Button = ({children, callBack, disabled}: TypeButtonProps) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <button
            className={css.buttonPrimary}
            onClick={onClickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
};