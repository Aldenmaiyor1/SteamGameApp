# React Native Steam Game Discount Finder App

React native is an open source framework for building Native Applications. React native is based on React and uses similar tools as react such as hooks and components, but while React is for web, React native is for websites. While React uses HTML, CSS and Javascript to create interactive user interfaces, React Native uses native UI components and API for mobile apps. This means that your apps will utilize the platform’s (IOS or Android) build-in UI elements and its cross-platform development capabilities, reducing development time and costs and developers only have to develop one app for both platforms. I created this app using expo, which is a platform for react native that simplifies the creation of the app and the routing. It is similar to vite
This demonstration will focus on creating a Steam game discount finder app for android using react native. This app will use API’s from [Steam](https://steamcommunity.com/dev) and [CheapShark](https://apidocs.cheapshark.com) to retrieve deal information and game information. It also allows you to search for specific games if they are on sale and set the price range for your search. 

## Installation Guide

### Using Expo

To create a React Native application using Expo, follow these steps:

1. Run the following command:
   <br>
   
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/bc75b8ed-b7bd-4363-9ce4-af8336d63157)

2. Choose a template and name for your app.
   <br>

![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/7b31ae1d-4fca-4c16-a098-fefd8f1720f4)
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/25ea7d24-0b90-4ac2-8261-746600862cec)


4. Start your app using the provided commands.

### Installing Simulators

To run and test your app, you'll need to set up virtual devices:

- For macOS: Install Xcode.
- For Android: Install Android Studio.

### Installing Android Virtual Machine
1.	Download [Android Studios](https://developer.android.com/studio)
2.	Install Android Studio and click more actions <br> ![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/544ad41f-2801-4030-85e2-ff0870850422)

3.	Click Virtual device manager 
4.	Click the Plus in the corner <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/202b5c04-a154-49e1-8843-25b512d56cc3)

5.	Choose Pixel 8 pro and click next <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/68259854-6002-40cb-9e2f-34561f9a006f)

6.	Choose and install TiramisuPrivacySandbox for the phone OS then click next  <br> ![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/a1f3a52e-4879-4869-a40f-206f4177372f)

7.	Click finish 
8.	Click the play button to start the android virtual device <br> ![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/86876234-dc29-4f4f-b897-3c3aff1f38ee)



### Running the App

1. Clone the repository into your local environment.
2. Open the folder in VSCode.
3. Run `npm install` in the terminal to install dependencies.
4. Start an Android virtual device or an iOS device (Android is recommended) using the steps above.
5. Run `npm run android` with the virtual device open to start the app if using android or `npm run ios` if using IOS

## Testing the Application on a Phone

To test the application on your phone:

1. Download Expo Go:
- For Android users, download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
- For iOS users, download from [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
2. Open the project folder in VSCode.
3. Run `npm run ios` if using iPhone or `npm run android` if using Android.
4. Scan the QR code using Expo Go (Android) or the Camera app (iOS).

## Expo Routing Introduction

As we have created this app with expo, we can take advantage of one of expos features, expo routing. This simplified the routing of the application as Expo router is a file based routing system. This means that you can navigate to other pages by importing router from expo router 
<br> 
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/1028f198-9b89-42b2-895d-ea8816134516)
<br>


Then calling `router.push()`, and then giving the relative file path to navigate to that page. This simplifies routing by a lot.
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/5f76bd1a-047d-4a92-a7cb-7b7e8cb2b568)
<br>

Another feature of expo routing is dynamic routing. This is denoted by the Square brackets. This allows you to navigate to that file by using parameters which can be retrieved by the useLocalSearchParams hook from expo router to retrieve the file parameter. 

For example, this button here has a on press function that navigates to another page.
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/c6487f7c-a04b-4b0e-8f89-85be05779e6d)
<br>

However, there is no way to go back to homepage from user page. To solve this problem, a file called _layout.jsx was created. Inside this file, we can make use of Stack layout and Stack.screen from expo router, which wraps the native stack navigator from react navigation. Stack will create a back button for users to navigate back to main page (in this case is to navigate back to index.jsx)
•	<Stack.Screen name={routeName} /> component will statically configure screen options. [3]. Please make sure routeName matches the file name
•	You can also set the styling of the header here like this: 
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/f43edfe6-c0ce-468d-9ad2-08a9d7f894e2)
<br>

Another thing you can do with _layout is create a tab layout. This is done by creating a _layout file for the folder which contains the files that you want within the tab structure, and writing the tab layout in the _layout file. 
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/d66bbca5-92af-4814-8fee-938db9075bf2)
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/48cfb0f4-ef62-4f6d-b0a5-1fe5cb499d5d)
<br>

Expo simplifies routing with its file-based routing system. You can navigate to other pages by importing `router` from Expo router and calling `router.push()` with the relative file path.

Dynamic routing is denoted by square brackets, allowing navigation using parameters retrieved by the `useLocalSearchParams` hook.
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/f2af7c05-3a75-4bc2-a36d-c688f3761c9d)
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/f3ebf519-5f1e-4c2b-b009-fef0ae5a0929)



## React Native Basics

### Components

- **View**: Container for elements, similar to a `div`.<br> ![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/42f4b8b4-d07c-474b-895d-2afcba86a722)

- **Text**: In react native, text must be put inside a text component. Unlike React where there are several different types of text components like <p> or <h1>, there is only one Text component in react native that you can resize using styling 
- **Image**:An image is a component used to display an image. the image displayed is defined in the “source” prop of the component, it can be passed an imported image directly <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/66a543f0-ab15-4da3-9626-045377de0f4b) <br>
Or it can be passed a link to an image using `{uri: imagelink}`. However if you choose to use uri, please note that the height and width of the image must be set otherwise the image will not be displayed. <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/44e856c7-7109-4adf-adb6-be8e294703f8)

- **ScrollView**: A scroll view is the same as a view, in that it is a container for child elements, however, scrollview allows the user to scroll elements when it overflows. The scroll direction can be set to vertical or horizontal. A scroll list loads all its elements at once and maybe have performance issues when using more elements. 

- **FlatList**: Flatlist is similar to a scrollview in that it allows the user to scroll its elements. However, unlike a ScrollView, you pass the flatlist an array of data in the data prop, you want to display inside the RenderItem prop. FlatList is more performant than a scroll view as it only renders items that are only the screen. <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/d3f4fd29-58ef-4d66-80e8-858fa30b27ed)

- **TouchableOpacity**: TouchableOpacity is a container for items similar to a View, however it has a `onPress` prop that runs the function that you give it if anything within that element is pressed.
for example
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/ae53d633-cd58-464d-8bf5-5885ee4a32b6)<br>


in this code the `onPress` is given a `router.push` function, so when you click anywhere within the touchable opacity it navigates to the page

### Hooks

- **useState**: Creates a variable or state.
- **useEffect**: Runs a callback function on render or when dependencies change.
- **useLocalSearchParams**: Retrieves the name of a parameter in dynamic routes.

## App Walkthrough

### Index Page

This is the entry page for the app. In this page there are 3 buttons, each navigating to different parts of the app. The first button brings you to the list of games. The second button brings you to the meme generator. And the last button brings you to the site map. All these buttons are given a onPress prop with a function that navigates to their respective pages <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/d5f84383-a26f-4c41-8f94-c4ad904b7f27)


### List Page

When you click on the first button it navigates you to the list page. This page contains a list of games on sale on steam from the API call here: 
<br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/dbb26917-5e7a-41e0-a18d-a2640f5865dd)<br>

This information is then mapped onto the elements you see here via a map function. The information is put inside a touchable opacity component and give a onpress function that navigates to the [id] page and gives it the param of the game id. 
<br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/bc9ed526-2574-4ddc-9761-6e1dfa089b70)<br>

This page also has a search function, which sets the title state using an onchange prop on a `textinput` component <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/f761f4b3-58f5-47d6-8fd0-1553f41cd1e6)<br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/9caf1b59-64b5-467a-af9d-12c4137b17cf) <br> 


Theres also a price range setter that works in a similar way that is shown when filter is clicked <br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/cdd80e42-5930-40ed-aab8-8fe0c0421b6d)
<br>
 
When you press enter or click search, it sets the state to loading and queries the API again to get the games list
When you click on the touchable opacity, it navigates to the game information page.
<br>
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/1f83d227-12ec-41a6-964c-01f321acca8d)
<br>

### Game Information Page

The game information page contains information about the game. It gets this information by getting the steam ID which is the params via the useLocalSearch params hook
<br> ![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/ffa2ae2f-f8b1-4f0d-a28b-98d2f0a084ec)
<br>
And then uses it to call a Steam API to get screenshots, information, and metacritic details about the game. 
<br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/216769d7-8e27-4dcd-a67a-f3a74e668177)<br>

The screenshots are displayed using a flatList which is given the render item, the flatlist has a snapping function set to snap to the screen width
<br>![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Aldenmaiyor1/assets/140029118/4db2292a-1328-4701-9051-d65435b792ef)

### Meme Generator Page

Fetches a meme from an API and displays it.

