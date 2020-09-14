import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ChangeEvent, ReactNodeArray, ReactPortal } from 'react';

export type handlerEvent =
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLTextAreaElement>;

export type inputProps = {
    componentType?: string;
    onChange?: (inputValue: handlerEvent) => void;
    hasLabel?: boolean;
    label?: string;
    placeholder?: string;
    inputType?: string;
    name?: string;
    value?: string;
    disabled?: boolean;
    prefix?:
        | string
        | (ReactPortal & string)
        | (ReactNodeArray & string)
        | undefined;
    size?: SizeType;
};
