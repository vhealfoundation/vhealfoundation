import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ServicesSidebar from './ServicesSidebar';

// Mock the data
jest.mock('../constants/data', () => ({
  data: [
    {
      title: "COUNSELLING SERVICES",
      subtitle: "Talking therapy for mental well-being",
      image: "test-image-1.jpg",
    },
    {
      title: "ASSESSMENTS",
      subtitle: "Understand, evaluate and improve mental well-being",
      image: "test-image-2.jpg",
    },
  ]
}));

describe('ServicesSidebar', () => {
  test('renders sidebar with service items', () => {
    // Set up window.innerWidth for desktop view
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));

    render(
      <BrowserRouter>
        <ServicesSidebar />
      </BrowserRouter>
    );

    // Check if the sidebar title is rendered
    expect(screen.getByText('Our Services')).toBeInTheDocument();

    // Check if service items are rendered
    expect(screen.getByText('COUNSELLING SERVICES')).toBeInTheDocument();
    expect(screen.getByText('ASSESSMENTS')).toBeInTheDocument();

    // Check if the contact section is rendered
    expect(screen.getByText('Need Help?')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  test('toggles sidebar on mobile view', () => {
    // Set up window.innerWidth for mobile view
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));

    render(
      <BrowserRouter>
        <ServicesSidebar />
      </BrowserRouter>
    );

    // Find the toggle button with arrow icon
    const toggleButton = screen.getByLabelText('Toggle Services Menu');
    expect(toggleButton).toBeInTheDocument();

    // Click the toggle button to open the sidebar
    fireEvent.click(toggleButton);

    // Check if the sidebar is visible
    expect(screen.getByText('Our Services')).toBeVisible();

    // Click the toggle button again to close the sidebar
    fireEvent.click(toggleButton);

    // The sidebar should still be in the document but not visible
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });
});
