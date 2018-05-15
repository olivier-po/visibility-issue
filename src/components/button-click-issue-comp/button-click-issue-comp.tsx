import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'button-click-issue-comp',
  styleUrl: 'button-click-issue-comp.scss',
  shadow: false
})
export class MyComponent {

  // External Events
  @Event() buttonClicked: EventEmitter;

  ////////////////////////////////////////////////////////////////
  // User Interactions
  ////////////////////////////////////////////////////////////////

  /**
   * The user wants to start the tour 
   */
  private clickButton(): void {
    this.buttonClicked.emit();
  }

  ////////////////////////////////////////////////////////////////
  // Render
  ////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <ion-button
          onClick={ () => this.clickButton() }>
          Test
        </ion-button>
      </div>
    );
  }
}
