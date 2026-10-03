import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Currency } from '../../../entities/Currency/model/types/currency';
import { Country } from '../../../entities/Country/model/types/country';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            last: 'Smith',
            first: 'Adam',
            city: 'Moscow',
            currency: Currency.USD,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            last: 'Smith',
            first: 'Adam',
            city: 'Moscow',
            currency: Currency.USD,
        },
    },
})];
