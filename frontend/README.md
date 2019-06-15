# Redux-Actions

Redux nos brinda una forma poderosa de administrar el estado de nuestra aplicación. Pero también nos da *mucho código* para cuidar. Para crear una actualización, necesitamos cambiar las cosas en muchos otros archivos. Después de un tiempo, el código requerdio para definir y manejar los action creators comineza a ser un poco repetitivo.

A continuación vamos a ver cómo podemos usar la libary de `redux-actions` para cortar el código de redux sin tener que sacrificar nunguna de las funciones de Redux.

# Funciones de Libreria

## createAction

`createAction`: La biblioteca `createAction` que proporciona `redux-actions` como su nombre indica, se utiliza para creae actions en una aplicación React-Redux

La función *reduce boilerplate code* y asegura que los actions sigan el *Flux Standar Actions* structure.

Un ejemplo de la creación de los actions con `createAction`:


// ! Actions Normal

// export const updateCurrent = val => ({ type: UPDATE_CURRENT, payload: val });
// export const loadTodos = todos => ({ type: LOAD_TODOS, payload: todos });
// export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
// export const replaceTodo = todo => ({ type: REPLACE_TODO, payload: todo });
// export const removeTodo = id => ({ type: REMOVE_TODO, payload: id });
// export const showLoader = () => ({ type: SHOW_LOADER, payload: true });
// export const hideLoader = () => ({ type: HIDE_LOADER, payload: false });

// ! Actions Refactor

export const updateCurrent = createAction(UPDATE_CURRENT)
export const loadTodos = createAction(LOAD_TODOS)
export const addTodo = createAction(ADD_TODO)
export const replaceTodo = createAction(REPLACE_TODO)
export const removeTodo = createAction(REMOVE_TODO)


El *createAction* function va  tomar el *type* y *retorna* una nueva función, el cual regresa un valor.

Al obtener ese valor, `createAction` toma el tipo y el valor y devuelve un *objeto* con la propiedad type y la propiedad payload.


Las funciones `showLoader` y `hideLoader` no se refactorizaron porque no obtienen su payload, solo harcodean.

## payloadCreator

Esta es usada para transformar la entrada sin procesar en datos con el formato correcto que deseamos.

Como vimos en la función *createAction* cuando pasamos un action type dentro de *createAction* function, un función que acepta nuestro valor como el payloas es retornada de vuelta nosotros.

Para el `showLoader` y `hideLoader` action creators, nosotros necesitamos pasar uin segundo argumento dentro del *createAction*:


export const showLoader = createAction(SHOW_LOADER, () => true)
export const hideLoader = createAction(HIDE_LOADER, () => false)



Cualquier argumento que se pase al action creator se pasará a esta función como un argumento:

*Function example*


const capitalize = text => {
  return text.split('').reduce((acc, letter, idx) => {
    return idx === 0 ? letter.toUpperCase() : `${acc}${letter.toLowerCase()}`
  }, ``)
}


Esta función toma un `string` y llama el `toUpperCase` funtion en la primera letra y el `toLowerCase` para el resto de las letras.

Despues podemos pasar en la funcón como argumento el *updateCurrent* action creator



export const updateCurrent = createAction(UPDATE_CURRENT, capitalize)



# Create Multiple Redux Actions with createActions


## createActions
En lugar de *escribir nuestros actions creators* uno por uno con el `createAction` function, nosotros podemos usar `createActions` function para crear multiples actions creators de una vez.


createActions({
  UPDATE_CURRENT: capitalize,
  SHOW_LOADER: () => true,
  HIDE_LOADER: () => false
},
  LOAD_TODOS,
  ADD_TODO,
  REPLACE_TODO,
  REMOVE_TODO
)

///// Fixed

export const { updateCurrent, loadTodos, addTodo, replaceTodo, removeTodo, showLoader, hideLoader } = createActions({
  UPDATE_CURRENT: capitalize,
  SHOW_LOADER: () => true,
  HIDE_LOADER: () => false
},
  LOAD_TODOS,
  ADD_TODO,
  REPLACE_TODO,
  REMOVE_TODO
)




Aquí, la función payload creator es *remplazada* con un *identificador* function que *toma el valor y lo retorna.*.

Para los actions creators como `LOAD_TODOS` nosotros solo necesitamos pasar el action type. este va a regresarnos un action creator que acepta el valor y lo hace payload.

Solo que hacer esto no es suficiente, si vemos el navegador vamos a ver algunos errores como *not defined*

Para resolverlo solo es nevesario escribir el export  con destructuring de `createActions` object


# Handle Actions with the handleAction function

## handleAction

El `handleAction` function es *usada para crear* un *reducer function* para manejar un action especifico.

En el ejemplo estoy creando un reducer 


const addTodoReducer = handleAction(
  ADD_TODO,
  (state, action) => {
    return {
      ...state,
      currentTodo: '',
      todos: state.todos.concat(action.payload)
    }
  },
  initState
)


Las partes que necesita son:

* Type
* Arrow con el state y action
* initState


# Combine the reducer function with reduce-reducers

El `reduce-reducers` puede ser usado con los `handleAction` para definir un unico reduce function.

Para poder quitar el switch statement y crear reducer separados por cada action es necesario usar la librería `reduce-reducers`



// ? Reducers transform

// export default (state = initState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return addTodoReducer(state, action)
//     case LOAD_TODOS:
//       return loadTodoReducer(state, action);
//     case UPDATE_CURRENT:
//       return updateCurrentReducer(state, action)
//     case REPLACE_TODO:
//       return replaceTodoReducer(state, action)
//     case REMOVE_TODO:
//       return removeTodoReducer(state, action)
//     case SHOW_LOADER:
//       return showLoaderReducer(state, action)
//     case HIDE_LOADER:
//       return hideLoaderReducer(state, action)
//     default:
//       return state;
//   }
// };


export default reduceReducers(
  addTodoReducer,
  loadTodoReducer,
  updateCurrentReducer,
  replaceTodoReducer,
  removeTodoReducer,
  showLoaderReducer,
  hideLoaderReducer
)


# Handle Multiple Actions with combineActions

## combineActions

Nosotros podemos usar multiples actions para actualizar el estado del app usando la misma función.

`combineActions` function que nos da `redux-actions` para manejar actions relaciondas en un solo action handler.

Por ejemplo tenemos dos *reducers* llamados `SHOW_LOADER` y `HIDE_LOADER` que hacen la misma cosa.

Podemos usar `reduc-actions` para combinarlos dentro de un unico reducer. Primero importamos ´combineActions´ de ´redux-actions´

> import { createActions, hanldeAction, combineActions } from 'redux-actions'

Ahora para combinarlo debemos de eliminar los handleActions que se crearon para cada uno, que tienen el mismo return ambos y tenemos que crear un `loaderReducer` que use el `combineActions` function para combinar el `SHOW_LOADER` y el `HIDE_LOADER` action creatos.


const loaderReducer = handleAction(
  combineActions(SHOW_LOADER, HIDE_LOADER),
  (state, action) => {
    return {...state, isLoading: action.payload}
  },
  initState
)


# Handle multiple actions using reducerMap
## reducerMap

El `handleAction` function es usada para crear un reducer function para menjar un action especifico. Pero `redux-actions` tambien nos da una función para manejar multiples actions. Solo tenemos que importar `handleActions` function en lugar de `handleAction`.



import {hadnleActions} from 'redux-actions'


Al hacerlo ya no necesitamos la declaración del export default en la parte de hasta abajo. Tenemos que definir un nuevo export default justo antes del reducer functions. Esta función se va a llamar handleActions que va a tomar un objeto como primer argumento. El objeto se conocera como el reducer map, y asignara todos los *types* en las *reducer function*.

Esto significa que tenemos que mover todos los reducers dentro de nuestra función como se ve en el ejemplo:


export default handleActions (
  {
    ADD_TODO: (state, action) => {
      return {
        ...state,
        currentTodo: '',
        todos: state.todos.concat (action.payload),
      };
    },
    LOAD_TODOS: (state, action) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
    UPDATE_CURRENT: (state, action) => {
      return {
        ...state,
        currentTodo: action.payload,
      };
    },
    REPLACE_TODO: (state, action) => {
      return {
        ...state,
        todos: state.todos.map (
          t => (t.id === action.payload.id ? action.payload : t)
        ),
      };
    },
    REMOVE_TODO: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter (t => t.id !== action.payload),
      };
    },
    [combineActions (SHOW_LOADER, HIDE_LOADER)]: (state, action) => {
      return {...state, isLoading: action.payload};
    },
  },
  initState
);




# Resumen

El desarrollo con redux-actions puede reducir el boilerplate de una tipica React-Redux app, haciendo más facil de leer y escribir nuestro código