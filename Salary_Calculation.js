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
