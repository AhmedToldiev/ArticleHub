import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Currency } from '../../../entities/Currency/model/types/currency';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        Story => <div style={{ padding: 100 }}><Story /></div>,
    ],
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
    items,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    items,
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    items,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    items,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    items,
};
