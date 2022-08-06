import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from 'routes/index'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ReactQueryDevtools } from 'react-query/devtools'

import './styles/index.scss'
import { store } from 'states'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false, suspense: true } },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
