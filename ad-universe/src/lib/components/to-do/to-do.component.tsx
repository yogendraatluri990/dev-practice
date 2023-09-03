import React from 'react';

import { ToDo } from '../../types/to-do';

export class ToDoComponent extends React.Component<Partial<ToDo>> {
  render(): React.ReactNode {
    return (
      <>
        <h1>{this.props.header}</h1>
        <p>{this.props.message}</p>
      </>
    );
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       