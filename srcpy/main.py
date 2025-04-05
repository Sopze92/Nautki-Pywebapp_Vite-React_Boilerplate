from pyapp import globals as __GLOBALS__,  constants as __CONST__

import webview as wv
import logging

if __name__ == "__main__":
  import os, sys

  args= sys.argv

  root= os.path.dirname(__file__)
  root_mode= __CONST__.ROOT_DEFAULT
  dev_mode= False
  use_dist= True

  for e in args:
    if e == '--devmode': dev_mode= True

    if root_mode== __CONST__.ROOT_DEFAULT:

      # this is used to run the app with npm run test, using the built vite app under ../dist
      if e == '--folder': 
        root= os.path.abspath(".")
        root_mode= __CONST__.ROOT_FOLDER

      # this is used to run the app with npm run vite + npm run py, using vite's dev environment through localhost with HMR
      elif e == '--localhost': 
        root= ""
        use_dist= False
        root_mode= __CONST__.ROOT_LOCALHOST

  window_url= os.path.join(root, *(("dist", "index.html") if use_dist else ("index.html",)))

  if dev_mode:
    logging.basicConfig(level=logging.DEBUG)

  # store them on globals, in case you need them
  __GLOBALS__.root= root
  __GLOBALS__.root_mode= root_mode
  __GLOBALS__.dev_mode= dev_mode

  # create the window
  __GLOBALS__.win_main= wv.create_window("Nautki-Pywebview_Vite-React", url=window_url, width= 1280, height= 720, min_size= (480,512))
  wv.start(http_port=5350, debug=True)