# Launch Device CLI
## Overview
This is a macOS script that allows you to interactively launch registered devices in both Xcode and Android Studio.

You need to register the tools and devices for each.

### Xcode
- [Install Xcode](https://developer.apple.com/xcode/)
- [Register Xcode Simulator](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)

### Android Studio
- [Install Xcode](https://developer.apple.com/xcode/)
- [Register Xcode AVD](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)

### NOTE
1. The `emulator` command in Android Studio needs to be enabled and installed via `Android Studio > Settings > Language & Frameworks > Android SDK > SDK Tools`.
2. You need to add the emulator command to your $PATH
```
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
```

## Usage
### Xcode iOS Simulator
#### 1. Select the OS name you want to launch.
<img width="500" alt="Xcode iOS Simulator 1" src="https://github.com/user-attachments/assets/0fdbbdf0-43a5-44e0-8743-77a22c77d783">

#### 2. Select the Runtime (iOS Version) you want to test (limited to installed versions).
<img width="500" alt="Xcode iOS Simulator 2" src="https://github.com/user-attachments/assets/6e44c44d-4fb1-4e44-aabe-398a3f85fa4e">

#### 3. Select the device you want to test (limited to devices associated with the selected Runtime).
<img width="500" alt="Xcode iOS Simulator 3" src="https://github.com/user-attachments/assets/eb97bda4-c26e-4373-a24d-a5837cb623bd">

#### 4. The device will launch.
<img width="200" alt="Xcode iOS Simulator 4" src="https://github.com/user-attachments/assets/7ee1bfe5-fe24-4c59-932b-868ff6ddee81">

#### 5. If the Simulator is already running or if you attempt to launch a Simulator that does not meet the conditions, an error will occur.
<img width="500" alt="Xcode iOS Simulator 5" src="https://github.com/user-attachments/assets/10fea076-1ab2-41a2-b92c-79aaee692d76">

### Android Studio Emulator
#### 1. Select the OS name you want to launch.
<img width="500" alt="Android Studio Emulator 1" src="https://github.com/user-attachments/assets/4adeb5a0-6b0c-4164-bc74-f51e013861e8">

#### 2. Select the AVD you want to launch.
<img width="500" alt="Android Studio Emulator 2" src="https://github.com/user-attachments/assets/c2f101ed-8682-4233-9e4b-75399d42f510">

#### 3. The device will launch.
<img width="200" alt="Android Studio Emulator 3" src="https://github.com/user-attachments/assets/6a8b5f66-ecf7-4948-998d-26aa2ffcd4ab">

## Installation
- Install globally and add to your PATH.
- Place it within the project directory.
