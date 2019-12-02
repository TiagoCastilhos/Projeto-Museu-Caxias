import { Injectable } from '@angular/core';
import { IpcRenderer, IpcRendererEvent, WebFrame, Remote } from 'electron';
import * as fs from 'fs';
import { ChildProcess } from 'child_process';

declare global {
  interface Window { require: any; }
}

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  ipcRenderer: IpcRenderer;
  webFrame: WebFrame;
  remote: Remote;
  childProcess: ChildProcess;
  fs: typeof fs;

  constructor() {
    this.ipcRenderer = window.require('electron').ipcRenderer;
    this.webFrame = window.require('electron').webFrame;
    this.remote = window.require('electron').remote;

    this.childProcess = window.require('child_process');
    this.fs = window.require('fs');
  }

  public on(channel: string, listener: (ipcRendererEvent: IpcRendererEvent, ...args: any[]) => void): void {
    if (!this.ipcRenderer) {
      return;
    }
    this.ipcRenderer.on(channel, listener);
  }

  public send(channel: string, ...args): void {
    if (!this.ipcRenderer) {
      return;
    }
    this.ipcRenderer.send(channel, ...args);
  }
}