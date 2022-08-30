import { Widget } from 'components/common';
import { MainLayout } from 'components/layout';
import { MyText } from 'feature/labs/MyText';
import { StudentCard } from 'feature/labs/Student';
import { Student } from 'models';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  // const [count, setCount] = useState(0);

  // Khi sử dụng AND condition render , chỉ có điều kiện là true mới được render
  // Nếu điều kiện là false sẽ ko render , trừ trường hợp 0 và NaN sẽ render ra 0 và NaN

  const student: Student = {
    name: 'Phúc',
    id: 1,
    gender: 'male',
    address: 'Tp.HCM',
  };

  function handleClickEvent(student: Student) {
    console.log(student);
    // alert(JSON.stringify(student));
  }

  const [loading, setLoading] = useState(true);

  const timeoutID = useRef<number>();

  useEffect(() => {
    timeoutID.current = setTimeout(() => setLoading(false), 2000);

    // cleanup function
    return () => clearTimeout(timeoutID.current);
  }, []);

  return (
    <div className="App">
      {loading && <p>Loading progress...</p>}

      <MainLayout>
        <StudentCard student={student} onClick={handleClickEvent} />
      </MainLayout>

      <MyText>Test</MyText>
      <MyText>
        <div>This is first dev element</div>
        <div>This is second dev element</div>
      </MyText>

      <div className="widget-container">
        <div className="div">
          <Widget title="This is first widget">Chart 1</Widget>
        </div>

        <div className="div">
          <Widget title="This is second widget">Chart 2</Widget>
        </div>
      </div>
    </div>
  );
}

export default App;
