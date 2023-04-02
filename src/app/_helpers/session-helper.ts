import { compress, decompress } from 'lz-string';

export class SessionHelper {

  public static setItem(sessionKey: string, data: any, useLzStringEncription: boolean = false) {
    let sessionData = JSON.stringify(data);
    if (useLzStringEncription) {
      sessionData = compress(sessionData);
    }

    sessionStorage.setItem(sessionKey, sessionData);
  }

  public static getItem(sessionKey: string, useLzStringEncription: boolean = false): any {
    if (useLzStringEncription) {
      const item = JSON.parse(decompress(sessionStorage.getItem(sessionKey)) || '{}');
      return item;
    }

    const item = JSON.parse(sessionStorage.getItem(sessionKey || '{}'));
    return item;
  }

  public static getItemAndDestroy(sessionKey: string, useLzStringEncription: boolean = false): any {
    const item = this.getItem(sessionKey, useLzStringEncription);
    this.destroy(sessionKey);

    return item;
  }

  public static destroy(sessionKey: string) {
    sessionStorage.removeItem(sessionKey);
  }

  public static setLocalItem(sessionKey: string, data: any, useLzStringEncription: boolean = false) {
    let sessionData = JSON.stringify(data);
    if (useLzStringEncription) {
      sessionData = compress(sessionData);
    }

    localStorage.setItem(sessionKey, sessionData);
  }

  public static getLocalItem(sessionKey: string, useLzStringEncription: boolean = false): any {
    if (useLzStringEncription) {
      const item = JSON.parse(decompress(localStorage.getItem(sessionKey)) || '{}');
      return item;
    }

    const item = JSON.parse(localStorage.getItem(sessionKey || '{}'));
    return item;
  }

  public static getLocalItemAndDestroy(sessionKey: string, useLzStringEncription: boolean = false): any {
    const item = this.getLocalItem(sessionKey, useLzStringEncription);
    this.destroyLocal(sessionKey);

    return item;
  }

  public static destroyLocal(sessionKey: string) {
    localStorage.removeItem(sessionKey);
  }
}
