import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
console.log("About to render App");
console.log("main.tsx is running");

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

