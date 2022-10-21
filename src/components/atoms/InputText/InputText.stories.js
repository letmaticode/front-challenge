import React from 'react';

import InputTextComponent from '.';

export default {
    title: 'Atoms/InputText'
}

export const InputText = () => {
    return <InputTextComponent label={'Label'} type={'text'} placeholder={'Placer holder'} />
}

export const InputTextPassword = () => {
    return <InputTextComponent label={'Label'} type={'password'} placeholder={'Placer holder'} />
}

export const TextArea = () => {
    return <InputTextComponent label={'TextArea'} as={'textarea'} rows="5" placeholder={'Placer holder'} />
}