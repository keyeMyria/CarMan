import fontWeight from './Fonts/FontWeight';

export default {
    fontFamily: 'Roboto',
    spacing: {
        actionButtonSize: 56,
        // https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size
        iconSize: 24,
        iconSizeLarge: 80,
        avatarSize: 40,
        snackbarHeight: 48,
        defaultSize: 16,
        ratingStarsSize: 20,
        toolbarElem: {
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
        },
    },
    typography: {
        fontWeight,
        appBar: {
            fontWeight: fontWeight.medium,
            fontSize: 20,
        },
        buttons: {
            fontWeight: fontWeight.medium,
            fontSize: 14,
        },
        subheading: {
            fontWeight: fontWeight.normal,
            fontSize: 16,
            lineHeight: 24,
        },
        bodySmall: {
            fontWeight: fontWeight.normal,
            fontSize: 12,
            lineHeight: 16,
        },
        subheading2: {
            fontWeight: fontWeight.normal,
            fontSize: 19,
            lineHeight: 24,
        },
        body2: {
            fontWeight: fontWeight.medium,
            fontSize: 14,
            lineHeight: 24,
        },
        body1: {
            fontWeight: fontWeight.normal,
            fontSize: 14,
            lineHeight: 20,
        },
        headline: {
            fontWeight: fontWeight.normal,
            fontSize: 24,
        },
        headline2: {
            fontWeight: fontWeight.normal,
            fontSize: 30,
        },
    },
    palette: {
        // main theme colors
        primaryColor: '#0088ff',
        cardBlue: 'rgba(0, 136, 255, 0.1)',
        // accentColor: '#0034ff',
        accentColor: '#ff6d3d',
        darkColor: '#0077e0',
        secondaryColor: '#efe3af',
        // text color palette
        primaryTextColor: '#000e33',
        secondaryTextColor: '#313131',
        alternateTextColor: '#eeeeee',
        errorTextColor: '#dc3545',
        // backgournds and borders
        mainBackgroundColor: '#f5f6fa',
        canvasColor: '#fcfcfc',
        lightCanvasColor: '#fdfdfd',
        darkCanvasColor: '#e8e8e8',
        borderColor: '#5e5e5e',
        // https://material.google.com/style/color.html#color-text-background-colors
        disabledColor: '#636363',
        disabledTextColor: '#a3a3a3',
        activeIcon: '#161616',
        inactiveIcon: '#393939',
        lightGrayColor: '#e6e6e6',
        dividerColor: '#c1d1d7',
        white: '#fff',
        green: '#228B22',
        red: '#B22222',
    },
    toolbar: {
        container: {
            // paddingTop: 20,
            height: 60,
        },
    },
};
