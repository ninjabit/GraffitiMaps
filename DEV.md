# GraffitiMaps development manual

## Local setup

Clone the repo

```
git clone [git@github.com:ninjabit/GraffitiMaps.git]
```

Install the necessary runtimes and environments
- node
- meteor
- ionic

Install the dependencies
```
npm install
```

Compile (and link) the core module

```
yarn build
```

Compile the api for each client

```
cd mobile
npm run meteor-client:bundle
```

```
cd web
npm run meteor-client:bundle
```

Run the server

```
cd api
meteor
```

Run the web client

```
cd web
ng serve
```

Run the mobile client

```
cd mobile
ionic serve
```

Install the bundler to include the api as part of the mobile client
```
npm install -g meteor-client-bundler
```

### 3. Core

Clone the shared module template:
[https://github.com/ninjabit/ionic-module-template]

```
git clone https://github.com/ninjabit/ionic-module-template core
```

### 4. Api

Prepare API infrastructure
```
meteor create api
cd api
rm -fr client
cd server
mv main.js main.ts
mkdir collections methods publications
touch collections/index.ts publications/index.ts
```

Install Meteor libs
```
cd api
meteor add barbatus:typescript
```

Install libs
```
npm install --save rxjs
npm install --save meteor-rxjs
npm install --save-dev @types/meteor
```

### 5. Server data mocks

Create a json with the data and serve it with json-server 

```
mkdir mocks
touch data.json
```

## Project env configuration

### 1. Web

### 2. Mobile
Configure the mobile app to be built with webpack
Copy the default webpack.config.js from the ionic package script folder
```
cd modile
cp node_modules/@ionic/app-scripts/config/webpack.config.js .
```
Configure the webpack config to:
Have the ability to load external TypeScript modules without any issues.
Have an alias for our Meteor server under the api dir (Which will be created later in).
Be able to import Meteor packages and Cordova plugins.

Configure the package.json to use webpack as module bundler.

Configure the tsconfig.json to include the api dir during compilation and to add typings.

Add the bundling script to package.json and the bundler config to configure the api bundle

### 3. Core

### 4. Api

Configure the tsconfig.json to add typings.

Link the mobile declaration to api folder

```
cd api
ln -s ../mobile/src/declarations.d.ts
```


## Project build

```
cd mobile
npm run meteor-client:bundle

```

## Project run
```
cd mobile
npm run api
```
```
cd mobile
ionic serve
```
```
cd web
ng serve
```
