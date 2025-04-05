
import React from 'react'

//#region -------------------------------------------------------- GLOBAL STORE

export const Globals= React.createContext(null)

const DEFAULTS= Object.freeze({
  ready:    { app:false, contexmenu:false, file:false },
  settings: {},
  data:     {}
})

const AppContext= ReactComponent=>{

  const StoreWrapper= ()=>{
    const 
      [ store, setStore ]= React.useState(
        storeState({
          actions:    ()=> store.actions,   // global actions
          get: {
            ready:    ()=> store.ready,     // ready states
            settings: ()=> store.settings,  // app settigns
            data:     ()=> store.data,      // app things
          },
          set: {
            ready:    (data)=> _setGlobal({ ready: Object.assign(store.ready, data) }),
            settings: (data)=> _setGlobal({ settings: Object.assign(store.settings, data) }),
            data:     (data)=> _setGlobal({ data: Object.assign(store.data, data) }),
          }
        })
    )

    const _setGlobal= (data)=> {
			const 
        newGlobals= {},
        newData= Object.keys(data)
      for(let [k,v] of Object.entries(store)) if(!newData.includes(k)) newGlobals[k]= v
      for(let [k,v] of Object.entries(data)) newGlobals[k]= v
			setStore(newGlobals)
    }

    React.useEffect(()=>{
      store.actions._initialize()
      // debug purposes only
      //window.globals= globals
    },[])

		return (
			<Globals.Provider value={store}>
        <ReactComponent/>
			</Globals.Provider>
		)
  }
  
  return StoreWrapper
}

//#endregion

//#region -------------------------------------------------------- GLOBAL STATE

export default AppContext

const storeState= ({ actions, get, set })=>{

  return {
    ...DEFAULTS,

    actions: { // ---------------------------------------------------------------------------------------------------------------- GENERAL

      _initialize: ()=>{

        set.ready({app: true})

      },
    }
  }
}

//#endregion