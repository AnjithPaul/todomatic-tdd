import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Components/Form';

describe('<NewMessageForm />', () => {
  let getByTestId;
  let addTask;

  describe('clicking the add button', () => {
    beforeEach(async () => {
        addTask = jest.fn().mockName('addTask');

      ({ getByTestId } = render(<Form addTask={addTask} />));

      await userEvent.type(
        getByTestId('taskInput'),
        'New message',
      );
      userEvent.click(getByTestId('addButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('taskInput').value).toEqual('');
    });
    it('calls the send handler', () => {
        expect(addTask).toHaveBeenCalledWith('New message');
    });
  });
});