import { createElement } from '@lwc/engine-dom';
import SmartEscalationDashboard_lwc from 'c/smartEscalationDashboard_lwc';

describe('c-smart-escalation-dashboard-lwc', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-smart-escalation-dashboard-lwc', {
            is: SmartEscalationDashboard_lwc
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});