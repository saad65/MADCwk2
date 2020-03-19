# MADCwk2
Mobile App Dev 2019-2020 Coursework 2
Created by Saad Mahmood, Student at Manchester Metropolitan University.

## Installation
Initial setup of the project was done according to the official React Native guide (https://reactnative.dev/docs/getting-started).

Following this, certain node modules had to be installed. These are:

react-navigation and react-navigation/stack and all related dependencies (https://reactnavigation.org/docs/getting-started/)
react-native-camera
react-native-geolocation-service

Android Studio must also be installed and an emulator running.
The chittr_server must also be running with the correct configuration (config file adjusted to personal username and password).

The project can be built and run in the emulator by carrying out the following command:

npx react-native run-android

In some cases, the app may stop working in which case the gradlew file should be cleaned by entering the android file
directory and cleaning the gradlew file ("cd android && gradlew clean").

If there is an error regarding hammerjs. There is an additional node module to install which is located at https://github.com/naver/hammer.js

## Questions and issues

Please raise an issue on this github page or contact me on Saad.Mahmood@stu.mmu.ac.uk (please not this email will be inactive as of June 2020).

