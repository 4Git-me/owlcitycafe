import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import { vi } from 'vitest';

test('submits the form and resets fields', () => {
  // Mock alert and console.log
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
  const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => {});

  render(<Contact />);

  // Fill out form fields
  fireEvent.change(screen.getByPlaceholderText('Your full name'), {
    target: { value: 'Milton Carl', name: 'name' },
  });
  fireEvent.change(screen.getByPlaceholderText('you@example.com'), {
    target: { value: 'milton@example.com', name: 'email' },
  });
  fireEvent.change(screen.getByPlaceholderText('What’s this about?'), {
    target: { value: 'Test Subject', name: 'subject' },
  });
  fireEvent.change(screen.getByPlaceholderText('Write your message here...'), {
    target: { value: 'This is a test message.', name: 'message' },
  });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Check if console.log and alert were called
  expect(consoleMock).toHaveBeenCalledWith({
    name: 'Milton Carl',
    email: 'milton@example.com',
    subject: 'Test Subject',
    message: 'This is a test message.',
  });
  expect(alertMock).toHaveBeenCalledWith('Inquiry submitted successfully!');

  // Confirm fields were reset
  expect(screen.getByPlaceholderText('Your full name').value).toBe('');
  expect(screen.getByPlaceholderText('you@example.com').value).toBe('');
  expect(screen.getByPlaceholderText('What’s this about?').value).toBe('');
  expect(screen.getByPlaceholderText('Write your message here...').value).toBe('');

  // Cleanup mocks
  alertMock.mockRestore();
  consoleMock.mockRestore();
});
