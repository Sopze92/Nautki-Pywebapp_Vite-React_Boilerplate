
# Nautki + Pywebview with Vite-React boilerplate
This is a basic blank project template for creating very lightweight cross-platform desktop webapps using python + vite-react

The boilerplate's build size is 8.6Mb
## ▶️ Resources:
- **PyWebview** to render websites in native windows
- **Nautki** to compile the entire app into a native binary executable
- Configured with **Vite** + **React**
## ▶️ Setup:
### Step 1:
Use this command to install everything needed and create the required python virtual env
```
npm run setup
```
### Step 2:
Once that's done, you must activate the newly created python virtual env with one of
```bash
# linux / windows with bash terminal
source _pyenv/scripts/activate
# windows cmd
.\_pyenv\scripts\activate
```
tip: to make sure it's activated, run `where pip`, first entry should point within your project folder

Note that if you don't setup any kind of automation, you ***may*** need to repeat **Step 2** every time you start your IDE
## ▶️ Developing:
To start developing you just need to run the Vite development server:
```
npm run vite
```
then open another terminal, and start your python app
```
npm run py
```
The project has no HMR on the python side, so you need to close and open the app window after any change in python code, there's a few options for python HMR if you want it, like [python-hmr](https://github.com/Mr-Milk/python-hmr)
## ▶️ Testing:
While developing method runs everything from source, you can also test the built components of your project

Run the python source with the **built** vite app</br>
(vite build location: ***./dist***)
```
npm run test
```

Build the entire app into a single executable for your OS</br>
(executable build location: ***./build***)
```
npm run build
```

NOTE: The project is configured to pack the entire vite's `./dist` folder within the app executable, if you want to change that or any other parameter of the build process, please first refeer to the [nuitka package configuration](https://nuitka.net/user-documentation/nuitka-package-config.html) docs for further info about it
## ▶️ Support me:
Thanks for even reading this!, if you want to support me you can [buy me a coffe](https://buymeacoffe.com/sopze) or become a [patreon member](https://patreon.com/sopze), where you could (*eventually*) obtain some extra benefits for yourself