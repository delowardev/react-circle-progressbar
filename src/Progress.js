import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types';

// generate unique id
const uuid = (prefix = '', suffix = '') => {
    return (
        prefix +
        Math.random().toString(36).substring(2, 8) +
        Math.random().toString(36).substring(2, 8) +
        suffix
    )
};

// check element in viewport
const isElementInViewport = el => {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// default props
const defaultProps = {
    size: 180,
    borderWidth: 15,
    borderBgWidth: 15,
    fillColor: '#288feb',
    emptyColor: '#dddddd',
    background: 'none',
    className: '',
    percent: 55,
    linecap: 'round',
    transition: 400,
    isGradient: false,
    gradient: {
        angle: 0,
        startColor: '#ff0000',
        stopColor: '#ffff00',
    },
    isShadow: false,
    shadow: {
        inset: false,
        vertical: 10,
        horizontal: 0,
        blur: 10,
        opacity: .5,
        color: '#000000'
    },
    isBgShadow: false,
    bgShadow: {
        inset: true,
        vertical: 3,
        horizontal: 0,
        blur: 3,
        opacity: .4,
        color: '#000000'
    },
    viewport: true,
    onViewport: undefined
};

// Progress component
const Progress = props => {
    props = { ...defaultProps, ...props };
    props.shadow = { ...props.shadow, ...defaultProps.shadow };
    props.gradient = { ...defaultProps.gradient, ...props.gradient };
    props.bgShadow = { ...defaultProps.bgShadow, ...props.bgShadow };

    const elem = useRef();

    const uid1 = uuid('grd_');
    const uid2 = uuid('shd_');
    const uid3 = uuid('shd2_');

    const {
        className,
        fillColor,
        emptyColor,
        background,
        gradient,
        shadow,
        isGradient,
        isShadow,
        linecap,
        isBgShadow,
        bgShadow,
        transition,
        children,
        viewport,
        onViewport
    } = props;

    const size = parseInt(props.size);
    const percent = parseInt(props.percent);
    const borderBgWidth = parseInt(props.borderBgWidth);
    const borderWidth = parseInt(props.borderWidth);


    let circleRadiusBg = (size - borderBgWidth) * .5;
    let circleRadiusFg = (size - borderWidth) * .5;


    if (borderWidth > borderBgWidth) {
        circleRadiusBg -= (borderWidth - borderBgWidth) * .5;
    }

    if (borderBgWidth > borderWidth) {
        circleRadiusFg -= (borderBgWidth - borderWidth) * .5;
    }

    const circumference = 2 * Math.PI * circleRadiusFg;
    const dashOffset = circumference - (circumference * percent / 100);

    const [offset, setOffset] = useState(circumference);

    // wrap attributes
    let wrapStyle = {
        height: size,
        width: size,
        position: 'relative'
    };

    const wrapAttr = {
        className: `circle-progress-wrap ${className}`,
        style: wrapStyle,
        ref: elem
    };

    // child attributes

    let childStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const childAttr = {
        className: `circle-progress-inner`,
        style: childStyle
    }

    // svg attributes
    const svgAttr = {
        style: {
            transform: 'rotate(-90deg)',
            overflow: 'visible'
        },
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: `${size / 2} ${size / 2} ${size} ${size}`
    };

    const circleBgAttr = {
        cx: size,
        cy: size,
        r: circleRadiusBg,
        stroke: emptyColor,
        strokeWidth: borderBgWidth,
        fill: background,
        ...(isBgShadow && { filter: `url(#${uid3})` })
    };


    const circleFgAttr = {
        cx: size,
        cy: size,
        r: circleRadiusFg,
        fill: 'none',
        strokeWidth: borderWidth,
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        strokeLinecap: linecap,
        stroke: isGradient ? `url(#${uid1})` : fillColor,
        ...(isShadow && { filter: `url(#${uid2})` }),
        ...(transition && { style: { transition: `stroke-dashoffset ${transition}ms` } })
    };

    // gradient

    const gradientAttr = {
        id: uid1,
        x1: '0%',
        y1: '0%',
        x2: '0%',
        y2: '100%',
        gradientTransform: `rotate(${gradient.angle}, .5, .5)`
    };

    const gradientStartAttr = {
        offset: 0,
        stopColor: gradient.startColor
    };

    const gradientStopAttr = {
        offset: 100,
        stopColor: gradient.stopColor
    };

    // shadow
    const shadowAttr = {
        id: uid2,
        width: '500%',
        height: '500%',
        x: '-250%',
        y: '-250%'
    };

    const feShadowAttr = {
        dx: shadow.vertical * -1,
        dy: shadow.horizontal,
        stdDeviation: shadow.blur,
        floodColor: shadow.color,
        floodOpacity: shadow.opacity
    };

    const bgShadowAttr = {
        id: uid3,
        width: '500%',
        height: '500%',
        x: '-250%',
        y: '-250%'
    };

    const feBgShadowAttr = {
        dx: bgShadow.vertical * -1,
        dy: bgShadow.horizontal,
        stdDeviation: bgShadow.blur,
        floodColor: bgShadow.color,
        floodOpacity: bgShadow.opacity
    };

    const placeOffset = () => {
        window.addEventListener('scroll', placeOffset);
        !viewport && setOffset(dashOffset);
        if (isElementInViewport(elem.current) && typeof elem.current !== 'undefined') {
            window.removeEventListener('scroll', placeOffset);
            onViewport && onViewport(elem.current)
            viewport && setOffset(dashOffset);
        }
    };

    useEffect(() => {
        placeOffset(elem.current)
    }, []);

    return (
        <div {...wrapAttr}>
            <svg {...svgAttr}>
                {
                    isGradient && (
                        <linearGradient {...gradientAttr}>
                            <stop {...gradientStartAttr} />
                            <stop {...gradientStopAttr} />
                        </linearGradient>
                    )
                }

                {
                    isShadow && (
                        shadow.inset === false ? (
                            <filter {...shadowAttr}>
                                <feDropShadow {...shadowAttr} />
                            </filter>
                        ) : (
                            <filter  {...shadowAttr}>
                                <feOffset dx={feShadowAttr.dx} dy={feShadowAttr.dy} />
                                <feGaussianBlur stdDeviation={feShadowAttr.stdDeviation} />
                                <feComposite operator="out" in="SourceGraphic" result="inverse" />
                                <feFlood flood-color={feShadowAttr.floodColor} flood-opacity={feShadowAttr.floodOpacity} result="color" />
                                <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                                <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                            </filter>
                        )
                    )
                }


                {
                    isBgShadow && (
                        bgShadow.inset === false ? (
                            <filter {...bgShadowAttr}>
                                <feDropShadow {...feBgShadowAttr} />
                            </filter>
                        ) : (
                            <filter {...bgShadowAttr}>
                                <feOffset dx={feBgShadowAttr.dx} dy={feBgShadowAttr.dy} />
                                <feGaussianBlur stdDeviation={feBgShadowAttr.stdDeviation} />
                                <feComposite operator="out" in="SourceGraphic" result="inverse" />
                                <feFlood floodColor={feBgShadowAttr.floodColor} floodOpacity={feBgShadowAttr.floodOpacity} result="color" />
                                <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                                <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                            </filter>
                        )
                    )
                }


                <circle {...circleBgAttr} />
                <circle {...circleFgAttr} />
            </svg>
            {
                children && <div {...childAttr}><div>{children}</div></div>
            }
        </div>
    )
}
// check proptypes
Progress.propTypes = {
    size: PropTypes.number,
    borderWidth: PropTypes.number,
    borderBgWidth: PropTypes.number,
    fillColor: PropTypes.string,
    emptyColor: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
    percent: PropTypes.number,
    linecap: PropTypes.string,
    isGradient: PropTypes.bool,
    transition: PropTypes.number,
    gradient: PropTypes.shape({
        angle: PropTypes.number,
        startColor: PropTypes.string,
        stopColor: PropTypes.string,
    }),
    isShadow: PropTypes.bool,
    shadow: PropTypes.shape({
        inset: PropTypes.bool,
        vertical: PropTypes.number,
        horizontal: PropTypes.number,
        blur: PropTypes.number,
        opacity: PropTypes.number,
        color: PropTypes.string
    }),
    isBgShadow: PropTypes.bool,
    bgShadow: PropTypes.shape({
        inset: PropTypes.bool,
        vertical: PropTypes.number,
        horizontal: PropTypes.number,
        blur: PropTypes.number,
        opacity: PropTypes.number,
        color: PropTypes.string
    }),
    viewport: PropTypes.bool,
    onViewport: PropTypes.func
}

export default Progress
