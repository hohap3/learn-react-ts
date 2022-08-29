//Cú pháp ngắn ts code snippets
// tsdrpfc là export default
// tsrpfc là export name

// Không nên dùng React.FC vì nó ko support generics
// React.FC sẽ định nghĩa ngầm children cho function component , cho dù function component nó ko có children
// Generics là kiểu dữ liệu nhận vào tham số và trả về kiểu dữ liệu tương ứng
// Syntax ví dụ interface List<T> {} , Array<number>
//

import { Student } from 'models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  if (!student) return null;

  const { name, id, gender, address, isGraduate } = student;

  return (
    <div>
      {`ID:${id} , Name:${name} , ${gender ? `Gender: ${gender}` : ''} , ${
        address ? `Address:${address}` : ''
      } , ${isGraduate ? `is graduated` : 'not graduated'}`}
    </div>
  );
}
