import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Form from './components/Form'
// import ErrorPage from './components/ErrorPage/ErrorPage'

const queryClient = new QueryClient()

function App() {
  
  return (
    <>            
      <QueryClientProvider client={queryClient}>
        <Form />        
        {/* <ErrorPage/> */}
      </QueryClientProvider>
    </>
  )
}

export default App
