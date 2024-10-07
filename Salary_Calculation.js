// Task 1: Create a Department Structure

const company = {
    departments:[
    {
        departmentName: "Customer Service",
        employees: [
            { 
                name: "Kassy Jones"
                salary: 80,000
                subordinates: [
                    {
                        name: "lu Davis"
                        salary: 55000
                        subordinates: []

                     }
        ]
    },  
    { departmentName: "IT",
        employees: [
            {
                name: Luke Campbell
                salary: 90000
                subordinates [
                    {
                        name: "Adam Johnson"
                        salary: 67000
                        suboridnates: [
                            {
                                name: "Laura Sandler"
                                salary: 93000
                                subordinates: []

                            }
                    }
                ]
            }
            {
                departmentName: "Marketing"
                employees: [
                    {
                        name: Thomas Anderson
                        salary: 70000
                        subordinates: []
                     }
                     {
                        name: "Alison Jackson",
                        salary: 65000
                        subordinates: [
                            {
                                name: "Sharan Gould"
                                salary: 58000
                                subordinates: []
                        
                            }
                        ]
                     }
                ]
               
            }

        
        ]
    };
    console.log(company);

    //Task 2: Create a Recursive Function to Calculate Total Salary for a Department

    function calculateDepartmentSalary(departmentName) {
        let totalDepartmentSalaru=employee.salary;
        for (let subordinate of employee.subordinates)
            totalDepartmentSalary += calculateDepartmentSalary(subordinate);
    }
    return totalDepartmentSalary;
    };
    const totalCustomerServiceSalary= calculateDepartmentSalary("Customer Service");
    const totalMarketingSalary= calculateDepartmentSalary("Marketing");
    const totalITSalary= calculateDepartmentSalary("IT");

    console.log(totalCustomerServiceSalary);
    console.log(totalMarketingSalary);
    console.log(totalCustomerServiceSalary);