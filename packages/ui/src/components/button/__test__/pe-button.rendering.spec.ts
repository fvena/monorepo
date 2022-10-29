import { describe, it, expect } from 'vitest';
import { render, screen } from '@portfolio/style-guide/vitest';
import PeButton from '../pe-button.vue';

describe('PeButton.component: rendering', () => {
  it('renders button with text correctly', () => {
    const text = 'Click me';

    // Set the prop value by using the second argument of `render()`.
    render<typeof PeButton>(PeButton, {
      props: {
        primary: true
      },
      slots: {
        default: text
      }
    });

    // Get the only element with a 'button' role.
    const button = screen.getByRole('button');

    // test
    expect(button).not.toBeNull();
    expect(button.innerHTML).toContain(text);
  });

  it('has expected css class when primary is true', () => {
    const text = 'Click me';

    // render component
    render<typeof PeButton>(PeButton, {
      props: {
        primary: true
      },
      slots: {
        default: text
      }
    });

    // Get the only element with a 'button' role.
    const button = screen.getByRole('button');

    // test
    expect(button.className).toContain('primary');
  });

  it('has expected css class when selected is false', () => {
    const text = 'Click me';

    // render component
    render<typeof PeButton>(PeButton, {
      slots: {
        default: text
      }
    });

    // Get the only element with a 'button' role.
    const button = screen.getByRole('button');

    // test
    expect(button.className).not.toContain('primary');
  });

  it('has expected css class when type is default', () => {
    const text = 'Click me';

    // render component
    render<typeof PeButton>(PeButton, {
      slots: {
        default: text
      }
    });

    // Get the only element with a 'button' role.
    const button = screen.getByRole('button');

    // test
    expect(button.className).toContain('brand');
  });

  it('has expected css class when type is defined', () => {
    const text = 'Click me';

    // render component
    render<typeof PeButton>(PeButton, {
      props: {
        type: 'customType'
      },
      slots: {
        default: text
      }
    });

    // Get the only element with a 'button' role.
    const button = screen.getByRole('button');

    // test
    expect(button.className).toContain('customType');
  });
});
