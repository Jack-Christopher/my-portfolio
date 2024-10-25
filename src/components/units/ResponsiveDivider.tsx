import {Divider} from "@mui/material";

interface ResponsiveDividerProps {
    backgroundColor?: string;
    initialOrientation?: 'horizontal' | 'vertical';
}

export default function ResponsiveDivider(props: ResponsiveDividerProps) {

    const verticalDivider = (
        <Divider
            orientation="vertical"
            sx={{
                backgroundColor: props.backgroundColor,
                width: '2px',
                display: {xs: 'none', lg: 'block'},
            }}
            flexItem
        />
    );

    const horizontalDivider = (
        <Divider
            orientation="horizontal"
            sx={{
                backgroundColor: props.backgroundColor,
                height: '1px',
            }}
            flexItem
        />
    );

    if (props.initialOrientation === 'horizontal') {
        return horizontalDivider;
    } else {
        return (
            <>
                {verticalDivider}
                {horizontalDivider}
            </>
        );
    }
}