/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const QuoteSpan = styled.span(({
    isPadded
}) => ({
    fontSize: '0.8rem',
    textAlign: 'center',
    display: 'block',
    width: '100%',
    padding: isPadded ? '15px 20px 0' : '15px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.08rem',
    boxSizing: 'border-box'
}));

export const Quote = ({ children, ...props }) => (
    <QuoteSpan {...props}>
        {children}
    </QuoteSpan>
);
