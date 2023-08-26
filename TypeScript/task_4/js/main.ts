export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

console.log("C++")
cpp.setTeacher = cTeacher;

const cppp = cpp.getRequirements();
const Av = cpp.getAvailableTeacher();
console.log(cppp);
console.log(Av);


console.log("Java")
java.setTeacher = cTeacher;

const getR = cpp.getRequirements();
const Avai = cpp.getAvailableTeacher();
console.log(getR);
console.log(Avai);

console.log("React")
react.setTeacher = cTeacher;

const getRequ = react.getRequirements();
const Availab = cpp.getAvailableTeacher();
console.log(getRequ);
console.log(Availab);