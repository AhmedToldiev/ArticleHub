import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from '../../../../entities/Profile';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        last: 'Ahmed',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
