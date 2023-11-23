export enum Direction {
  HI = 'HI',
  LOW = 'LOW',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Size {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  PHONE = 'phone',
}
export enum Orientation {
  PORTRAIT = 'portait',
  LANDSCAPE = 'landscape',
}

export enum OperatingSystem {
  WIN = 'windows',
  MAC = 'mac',
  LINUX = 'linux',
  IOS = 'ios',
  ANDROID = 'android',
  OTHER = 'unknown',
}
export class DeviceInfo {
  public size!: Size;
  public orientation!: Orientation;
  public os!: OperatingSystem;
}
