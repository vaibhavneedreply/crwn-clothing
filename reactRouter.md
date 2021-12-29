# Install using yarn add react-router-dom

# BrowserRouter 
  - wrap arround whole <App />
  - it give our application all of the functionlity of react-router-dom provides

syntex:
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

# Route
  - should wrap with routes
  - its a components which takes couple of arguments exact, path, components 
  - exact is true or false. default is true, this path exactly be /, if without exact 
  - path will be string is equal
  - element which we want to render

Syntex:
import {Routes, Route} from 'react-router-dom'

<Routes>
  <Route path='' element={<Game />}>
</Routes>


