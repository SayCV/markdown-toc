import * as vscode from "vscode";

import { extensionName } from "./defaults";

export class log {
  private static _channel: vscode.OutputChannel | undefined;

  private static get channel(): vscode.OutputChannel {
    if (!this._channel) {
      this._channel = vscode.window.createOutputChannel(extensionName);
    }

    return this._channel;
  }

  static info(message: string): void {
    this.channel.appendLine(
      `[Info - ${new Date().toLocaleTimeString()}] ${message}`
    );
  }

  static warn(message: string): void {
    this.channel.appendLine(
      `[Warning - ${new Date().toLocaleTimeString()}] ${message}`
    );
  }

  static error(message: string): void {
    this.channel.appendLine(
      `[Error - ${new Date().toLocaleTimeString()}] ${message}`
    );
  }

  static show(message: string): void {
    this.error(message);

    vscode.window.showErrorMessage(message).then(
      () => {},
      () => {}
    );
  }

  static dispose(): void {
    this.channel.dispose();
  }
}
