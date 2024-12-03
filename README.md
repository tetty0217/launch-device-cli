# Launch Device CLI
## Overview
This is a macOS script that allows you to interactively launch registered devices in both Xcode and Android Studio.

You need to register the tools and devices for each.

## Installation
### Xcode
- [Install Xcode](https://developer.apple.com/xcode/)
- [Register Xcode Simulator](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)

### Android Studio
- [Install Android Studio](https://developer.android.com/studio)
- [Create Virtual Device](https://developer.android.com/studio/run/managing-avds)

#### NOTE
1. The `emulator` command in Android Studio needs to be enabled and installed via `Android Studio > Settings > Language & Frameworks > Android SDK > SDK Tools`.
2. You need to add the emulator command to your $PATH
```
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
```

### Setup 
Install the package with any package manager.

**npm**
```sh
npm install -g @tetty0217/launch-simulator
```

**yarn**
```sh
yarn global add @tetty0217/launch-simulator
```

**pnpm**
```sh
pnpm add -g @tetty0217/launch-simulator
```

**bun**
```sh
bun add -g @tetty0217/launch-simulator
```
## Usage
### Xcode iOS Simulator
#### 1. Select the OS name you want to launch.
<img width="500" alt="Xcode iOS Simulator 1" src="https://github.com/user-attachments/assets/78c09444-552c-47bd-b552-d5785bf74e21">

#### 2. Select the Runtime (iOS Version) you want to test (limited to installed versions).
<img width="500" alt="Xcode iOS Simulator 2" src="https://github.com/user-attachments/assets/e46f58d0-4629-4ec4-93e6-f08222ea9735">

#### 3. Select the device you want to test (limited to devices associated with the selected Runtime).
<img width="500" alt="Xcode iOS Simulator 3" src="https://github.com/user-attachments/assets/7df5b310-3051-4987-aed0-a42913926813">

#### 4. The device will launch.
<img width="200" alt="Xcode iOS Simulator 4" src="https://github.com/user-attachments/assets/7ee1bfe5-fe24-4c59-932b-868ff6ddee81">

#### 5. If the Simulator is already running or if you attempt to launch a Simulator that does not meet the conditions, an error will occur.
<img width="500" alt="Xcode iOS Simulator 5" src="https://github.com/user-attachments/assets/4df05774-2fc8-4f0f-b48b-63290577b8e8">

### Android Studio Emulator
#### 1. Select the OS name you want to launch.
<img width="500" alt="Android Studio Emulator 1" src="https://github.com/user-attachments/assets/0e180fba-57fb-44e0-be6d-8584d4d889ab">

#### 2. Select the AVD you want to launch.
<img width="500" alt="Android Studio Emulator 2" src="https://github.com/user-attachments/assets/0f1876ef-4224-4b2b-be15-127ed08ba1fa">

#### 3. The device will launch.
<img width="200" alt="Android Studio Emulator 3" src="https://github.com/user-attachments/assets/6a8b5f66-ecf7-4948-998d-26aa2ffcd4ab">

## Installation
- Install globally and add to your PATH.
- Place it within the project directory.
