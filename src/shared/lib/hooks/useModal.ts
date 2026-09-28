import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    animationDelay?: number;
}

export function useModal(props: UseModalProps) {
    const {
        isOpen, onClose, animationDelay,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    return {
        close,
        isClosing,
        isMounted,
    };
}