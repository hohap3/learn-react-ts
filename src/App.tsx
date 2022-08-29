import { StudentCard } from 'feature/labs/Student';
import { Student } from 'models';
import './App.css';
import { Footer, Header } from './components/common';

function App() {
  // const [count, setCount] = useState(0);

  const student: Student = {
    name: 'Phúc',
    id: 1,
    gender: 'male',
    address: 'Tp.HCM',
  };

  return (
    <div className="App">
      <Header />
      <Footer />
      <StudentCard student={student} />
    </div>
  );
}

export default App;
