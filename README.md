# CodeChallenge

## Project Documentation

### Developed by Dharmendra Valiya

It was developed in React-native-cli.

## Tech Tools

CodeChallenge uses a number of open source tools to work properly:

- [react-native] - an open-source mobile application framework created by Facebook, Inc.
- [npm] - package manager for the JavaScript.
- [node.js] - an open-source, cross-platform, back-end JavaScript runtime environment
- [Visul Studio Code] - source-code editor made by Microsoft.
- [Xcode] - Apple's integrated development environment for macOS, used to develop software for macOS, iOS, iPadOS, watchOS, and tvOS.
- [Android studio] - official integrated development environment for Google's Android operating system.

## Installation

CodeChallenge recommneds [Node.js](https://nodejs.org/) v12+ to run.

Install the above mentioned tools and clone the project from mentioned github repo.

# repo url ~> git clone https://github.com/dvvaliya/CodeChallenge.git

```sh
cd CodeChallenge
npm install
cd ios
pod install
```

#### To run on android device or emulator

Note:- Make sure your device is connected to your machine or your emulator is opened.

```sh
npm start
npx react-native run-android
```

#### To run on iOS device or simulator

Note:- If you are running app on your device make sure your device is connected to your machine.

```sh
npm start
npx react-native run-ios
```

#### To run for testing

```sh
npm run test
```

Quick tips for understanding structure and editing in codebase:

1. CodeChallege codebase structure is like CodeChallenge-> src-> assets, components, navigations, screens, styles & utilities.
2. assets folder consist of two folders: Fonts & Images
   a. Add all fonts in Fonts folder and make sure it has .ttf extension file.
   b. Add all images in Images folder to used them in the app.
3. components folder consits of frequently used components so we can reuse them anywhere in the app.
   - a. Right now components consist of two folders: Home & Post.
   - b. Home folder consits of three components which we are using in Home screen named as HomeUserStory.js for showing top most list of Home screen, Category.js for displaying category type and HomeRecipeList for main list of recipe in Home screen.
   - c. Post folder consist of two components named as CookingDurationSlider.js which we are using in Post screen for sliding values for cooking duration and PostTextInput.js which we are usinh for TextInput like recipe name & Description.
   - Note: In Above any components you can make any changes to reflect them in all screens wherever we are using that components.
4. navigations folder contain main Navigator.js file which we are using to assign bottom tabs and any screen we need them in stack that should be put in this class.
5. screens folder is the main folder where we have all the screens folder like Home, Post, Search, Notifications & Profile.
   - a. Home folder consist the Home.js which we are using for rendering Home screen UI.
   - b. Post folder consist the Post.js & Pic.js, while Post.js are using for rendering Post screen UI & Pic.js are using for custom laytout of camera overlay.
6. styles folder consist of Style.js in that we are declaring all the styles of the app at one place, so we can reuse any styles as we want.
7. utilities folder consist of Colors.js, Constant.js & Images.js, while Colors.js are using for all colors which we are using in the app and Constant.js are declaring all static values at one place and Images.js are using for declaring all static images which we are using in the app so similar images we use use without reassign them.

P.s. For better experience of camera and UI of the app try to run on Real android device via debugging or on iOS Simulator.

###### Author - Dharmendra Valiya

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: <git clone https://github.com/dvvaliya/CodeChallenge.git>
[git-repo-url]: <git clone https://github.com/dvvaliya/CodeChallenge.git>
[Android studio]: https://developer.android.com/studio
[npm]: https://www.npmjs.com/
[Visul Studio Code]: https://code.visualstudio.com/download
[node.js]: http://nodejs.org
[Xcode]: https://developer.apple.com/xcode/
[react-native]: https://reactnative.dev/
