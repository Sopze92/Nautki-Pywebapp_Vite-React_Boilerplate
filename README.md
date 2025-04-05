
# Nautki + Pywebview with Vite-React boilerplate
This is a very basic blank project that can be used to create very lightweight cross-platform desktop webapps using python + vite-react

The boilerplate's build size is 8.6Mb
## ▶️ Resources:
- **PyWebview** to render websites in native windows
- **Nautki** to compile the entire app into a native binary executable
- Configured with **Vite** + **React**
## ▶️ Setup:
### Step 1:
Run this to install npm packages and create the required python virtual env
```
npm run init
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
### Step 3:
Last step is to install python dependencies on our python virtual env
```bash
pip install -r requirements.txt
```
Note that if you don't setup any automation, you may need to do **Step 2** each time you open your IDE
## ▶️ Development:
To start developing you just need to run the Vite development server:
```bash
npm run vite
```
then open another terminal, and start your python app
```bash
npm run py
```
The project has no HMR on the python side, if you want it, you can install and use [python-hmr](https://github.com/Mr-Milk/python-hmr)
## ▶️ Testing:
Test your python source with the built vite app
```bash
npm run test
```
or compile the entire app into a single executable
```bash
npm run build
```
## ▶️ Support me:
I've really tried, but I haven't found the way to eat air, fortunatelly you can [buy me a coffe](https://buymeacoffe.com/sopze) or beacome a [patreon member](https://patreon.com/sopze), where you could (*eventually*) obtain some extra benefits for yourself