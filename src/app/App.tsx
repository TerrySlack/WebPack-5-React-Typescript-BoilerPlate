import React from 'react'
// import { Provider } from "react-redux";
// import ApolloRootProvider from "HOC/Apollo";
// import { ThemeProvider } from "react-jss";
// import createStore from "../store";
// import Routes from "../routes";
import Test from 'Components/Test'
import './App.css'
//const store = createStore();
const App = () => {
  return (
    <div>
      <Test />
    </div>
  )
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Provider store={store}>
  //         <ApolloRootProvider>
  //           <Routes />
  //         </ApolloRootProvider>
  //       </Provider>
  //     </ThemeProvider>
  //   );
}

export default App
