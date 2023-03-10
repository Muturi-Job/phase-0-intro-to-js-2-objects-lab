// Write your solution in this file!
const employee = {
    name: "Person1",
    streetAddress: "Street1"
};
function updateEmployeeWithKeyAndValue(obj, key, value ){
    const newObj = {...obj}
    newObj[key] = value;
    return newObj
};
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name", 
    "Person2"

);
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway";
    return employee;
    
}
function deleteFromEmployeeByKey(){
    const newObj = {...employee};
    delete newObj.name;
    return newObj

}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}

