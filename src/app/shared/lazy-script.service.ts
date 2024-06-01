import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type ScriptResult =
  | {
      status: 'loaded' | 'already-loaded';
    }
  | {
      status: 'failed';
      error?: any;
    };

@Injectable({
  providedIn: 'root',
})
export class LazyScriptService {
  constructor(@Inject(DOCUMENT) private readonly _dom: Document) {}

  /** Dynamically load a given script */
  loadScript(src: string): Promise<ScriptResult> {
    return new Promise((resolve) => {
      // load script
      const node = this._dom.createElement('script');
      node.src = src;
      node.type = 'text/javascript';
      node.async = true;
      node.defer = true;

      // IE
      if ((node as any).readyState) {
        (node as any).onreadystatechange = () => {
          if (
            (node as any).readyState === 'loaded' ||
            (node as any).readyState === 'complete'
          ) {
            (node as any).onreadystatechange = null;
            resolve({ status: 'loaded' });
          }
        };
      }
      // others
      else {
        node.onload = () => {
          resolve({ status: 'loaded' });
        };
      }

      node.onerror = (error: any) => {
        console.error('Failed to load script', error);
        resolve({ status: 'failed', error });
      };

      document.getElementsByTagName('head')[0].appendChild(node);
    });
  }
}
