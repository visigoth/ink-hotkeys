import React from 'react';
import {HotKeys} from 'react-hotkeys';
import {StdinContext} from 'ink';
import {EventTarget} from 'event-target-shim';

class InkEventTarget extends EventTarget {
  constructor(hotkeys) {
    this.hotkeys = hotkeys;
  }
};

export default class InkHotKeys {
  constructor(props) {
    super(props);
    this.eventTarget = new InkEventTarget(this);
  }

  render() {
    return (
        <HotKeys attach={this.eventTarget} {...this.props} />
    );
  }
}

