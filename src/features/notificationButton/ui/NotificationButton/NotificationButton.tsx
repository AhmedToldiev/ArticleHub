import { classNames } from 'shared/lib/classnames/classNames';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'widgets/Popups/ui/Popover/Popover';
import { Button, ButtonTheme } from 'widgets/Button/Button';
import { NotificationList } from '../../../../entities/Article/ui/Notification/ui/NotificationList/NotificationList';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction='bottom left'
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
