import React, { ReactElement, FC } from 'react';
import { Input as AntInput } from 'antd';
import { inputProps } from '../types';

const getComponenByType = (componenctType: string | undefined) => {
    switch (componenctType) {
        case 'Search':
            return AntInput['Search'];
        case 'Password':
            return AntInput['Password'];
        case 'TextArea':
            return AntInput['TextArea'];
        default:
            return AntInput;
    }
};

const CustomInput: FC<inputProps> = ({
    label,
    placeholder,
    hasLabel,
    onChange,
    componentType,
    inputType,
    name,
    value,
    disabled,
}): ReactElement => {
    const Input = getComponenByType(componentType);
    return (
        <div className="custom-input">
            {hasLabel && <label htmlFor={name}>{label}</label>}
            <Input
                disabled={disabled}
                value={value}
                id={name}
                name={name}
                type={inputType}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomInput;
