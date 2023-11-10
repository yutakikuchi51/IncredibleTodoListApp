# Lab Assignment 1: Spinning Up React Native App
# 2023-11-09
# Yuta Kikuchi

# System requirements
There is a certain system requirements for using React Native development. When it comes to a required specification of CPU, it should be a dual-core processor at least, though it is ideal to have more than that. Also, users are recommended to have at least 8 GB, preferably 16 GB or higher RAM.
In terms of Windows version, React Native for Windows apps can be run only on all Windows 11 devices and on Windows 10 devices with Windows version 10.0.16299.0 or higher, though some features may not be available.


# Installation instructions
Setting up React Native requires user to install Node.js, JDK, and Android Studio for the set up. Also, React Native CLI can be downloaded by using executing commands, which is also required.

Node.js and JDK
- Installation of Chocolatey 
    install Chocolatey which is a popular package manager for Windows.
- Installation of Node.js and JDK using Chocolatey
    Open an Administrator Command Prompt, then run the command below:
    "choco install -y nodejs-lts microsoft-openjdk11"

Android Studio
- Installation of Android Studio
    First step is downloading and installing Android Studio.
- Installation of the Android SDK
    Open Android Studio > More Actions > SDK Manager > SDK Platforms tab
    Check the box next to "Show Package Details".
    Expand the "Android 13 (Tiramisu)" and ensure "Android SDK Platform 33" and "Intel x86 Atom_64 System Image"(or "Google APIs Intel x86 Atom System Image") are checked.
    Select "SDK Tools" tab and Check the box next to "Show Package Details".
    Expand the "Android SDK Build-Tools" and ensure that "33.0.0" is selected.
    Click "Apply".

React Native CLI(Command Line Interface)
- Using a command rather than installing 
    Use "npx react-native <command>", then current stable version of the CLI will be downloaded and executed.


# Configuration steps
- Configure the ANDROID_HOME environment variable
    Access "Windows Control Panel".
    Go to "User Accounts" and click on it twice.
    Select "Change my environment variables".
    Click on "New..." to create a new user variable.
    Set the variable name to "ANDROID_HOME".
    Enter the path to your Android SDK, typically "%LOCALAPPDATA%\Android\Sdk.
    Confirm and close the environment variables window.
    Open a new Command Prompt window to apply the changes.
    Launch PowerShell.
    Enter Get-ChildItem -Path Env:\ to check if ANDROID_HOME is listed among the environment variables."
- Add platform-tools to Path
    Open the "Windows Control Panel".
    Click on "User Accounts" twice.
    Click on "Change my environment variables".
    Select "Path" > "Edit" > "New"
    Add the path to platform-tools to the list.(The default location for this folder: %LOCALAPPDATA%\Android\Sdk\platform-tools)


# Project creation
- Remove "react-native-cli" package.
    For users who have installed the package before, use the command below to remove it
    "npm uninstall -g react-native-cli @react-native-community/cli"

- Create a new project
    You can use a build-in command line to create a new project(e.g. "AwesomeProject").
    "npx react-native@latest init AwesomeProject"

- Create a new project with a specific version of React Native(optional)
    If you need to specify a version of React Native, use the command below    
    "npx react-native@X.XX.X init AwesomeProject --version X.XX.X"


# Running the project
- Start Metro
    Run following command inside React Native folder:
    "npm start"

- Start your application
    Open a new terminal inside your React Native project folder. Run the command below
    "npm run android"    

- Modifying your app
    Open "App.tsx" a text editor
    Press the "R" key twice or select "Reload" from the Dev Menu("Ctrl" + "M") to see your changes.


# Troubleshooting
Below is common issues when setting up React Native environment.

- Port already in use:
    Metro Bundler Conflict: Use "sudo lsof -i :8081" to find the process, then "kill -9 <PID>" to terminate it.
    Change Default Port: Run "npm start -- --port=8088" from the project root.

- NPM Locking Error:
    Permission Issue: Run "sudo chown -R $USER ~/.npm" and "sudo chown -R $USER /usr/local/lib/node_modules".

- Missing React Libraries:
    Manual Addition: Verify all dependencies are included and linked in Xcode's Linked Frameworks and Binaries.
    CocoaPods: Ensure React and necessary subspecs are added in Podfile, then run pod install.

- React Native Compilation Error as CocoaPod:
    Fix with Plugin: Use cocoapods-fix-react-native plugin.

- Argument List Too Long:
    Header Search Paths: Reset User Search Header Paths and Header Search Paths to default in Xcode Build Settings.

- No Transports Available:
    WebSockets Polyfill: Import any modules requiring WebSockets after react-native.

- Shell Command Unresponsive Exception:
    Gradle Issue: Downgrade to Gradle version 1.2.3 in android/build.gradle.

- react-native init Hangs:
    Verbose Debugging: Use npx react-native init --verbose to identify the cause.    
  

# Resources

Further learning for system requirements on Windows:
    https://microsoft.github.io/react-native-windows/docs/rnw-dependencies

Troubleshooting:
    https://reactnative.dev/docs/troubleshooting
