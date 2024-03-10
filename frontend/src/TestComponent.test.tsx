import { render, screen } from '@testing-library/react';
import { test } from '@jest/globals';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
    test('renders TestComponent', () => {
        render(<TestComponent />);
        expect(screen.getByText('Test Component')).toBeInTheDocument(); // Fix the problem by using toBeInTheDocument
    });
});
