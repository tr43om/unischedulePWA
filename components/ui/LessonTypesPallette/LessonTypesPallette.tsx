import React from "react";

const LessonTypesPallette = () => {
  const lessonTypes = [
    { type: "Лекция", color: "bg-red-200" },
    { type: "Практика", color: "bg-orange-200" },
    { type: "Лабораторная", color: "bg-indigo-200" },
  ];
  return (
    <ul className="flex gap-6 justify-self-end ">
      {lessonTypes.map(({ color, type }, i) => (
        <li key={i} className="flex gap-2  ">
<<<<<<< HEAD
          <div className={`h-5 w-5 ${color} rounded-full`}></div>
          <p className="text-xs text-gray-500 dark:text-gray-300 md:text-sm">
            {type}
          </p>
=======
          <div className={`h-5 w-5 ${color} rounded-md`}></div>
          <p className="text-sm text-gray-500 dark:text-gray-300">{type}</p>
>>>>>>> master
        </li>
      ))}
    </ul>
  );
};

export default LessonTypesPallette;
