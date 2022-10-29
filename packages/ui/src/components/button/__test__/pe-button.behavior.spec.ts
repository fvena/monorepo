import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@portfolio/style-guide/vitest';
import PeButton from '../pe-button.vue';

describe('Item.component: behavior', () => {
  // test our component click event
  it('emits click event when button is clicked', async () => {
    const text = "Click me; I'm sick";

    // render component
    const { emitted } = render<typeof PeButton>(PeButton, {
      slots: {
        default: text
      }
    });

    // fire click
    await fireEvent.click(screen.getByRole('button'));

    // Expect that the event emitted a "click" event. We should test for emitted
    // events has they are part of the public API of the component.
    expect(emitted()).toHaveProperty('click');
  });
});
