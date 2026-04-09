import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from '../../../entities/Currency/model/types/currency';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
} as ComponentMeta<typeof ListBox>;

const items = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

const Template: ComponentStory<typeof ListBox> = args => {
    const [value, setValue] = useState<string>(Currency.RUB);

    return (
        <ListBox
            {...args}
            value={value}
            onChange={newValue => {
                action('onChange')(newValue);
                setValue(newValue);
            }}
        />
    );
};

export const Normal = Template.bind({});
Normal.args = {
    value: Currency.RUB,
    items,
};

export const Dark = Template.bind({});
Dark.args = {
    value: Currency.RUB,
    items: [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.USD, content: Currency.USD },
    ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    value: Currency.RUB,
    items,
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
