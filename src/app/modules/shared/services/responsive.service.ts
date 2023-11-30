import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  DeviceInfo,
  OperatingSystem,
  Orientation,
  Size,
} from '../models/layout';
@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  pipe(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
  private _deviceInfo: BehaviorSubject<DeviceInfo> =
    new BehaviorSubject<DeviceInfo>(new DeviceInfo());
  get deviceInfo$(): Observable<DeviceInfo> {
    return this._deviceInfo?.asObservable();
  }

  constructor() {
    window.addEventListener('resize', () => this.updateDeviceInfo());
  }

  updateDeviceInfo(): void {
    const updatedDeviceInfo: DeviceInfo = {
      orientation: this.getOrientation(),
      size: this.getDeviceType(),
      os: this.getOperatingSystem(),
    };
    this._deviceInfo?.next(updatedDeviceInfo);
  }

  getDeviceType(): Size {
    const sizes = [768, 1024];
    const width = window.innerWidth;
    if (width >= sizes[0] && width < sizes[1]) {
      return Size.TABLET;
    } else if (width >= sizes[1]) {
      return Size.DESKTOP;
    } else {
      return Size.PHONE;
    }
  }

  getOrientation(): Orientation {
    return window.innerWidth > window.innerHeight
      ? Orientation.LANDSCAPE
      : Orientation.PORTRAIT;
  }

  getOperatingSystem(): OperatingSystem {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf('Win') !== -1) {
      return OperatingSystem.WIN;
    } else if (userAgent.indexOf('Mac') !== -1) {
      return OperatingSystem.MAC;
    } else if (userAgent.indexOf('Linux') !== -1) {
      return OperatingSystem.LINUX;
    } else if (userAgent.indexOf('Android') !== -1) {
      return OperatingSystem.ANDROID;
    } else if (userAgent.indexOf('iOS') !== -1) {
      return OperatingSystem.IOS;
    } else {
      return OperatingSystem.OTHER;
    }
  }
}
