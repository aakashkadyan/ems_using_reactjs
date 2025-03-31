const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Update Website",
          taskDescription: "Revamp the home page design",
          taskDate: "2025-03-29",
          taskCategory: "Development",
          active: true,
          newTask: false,
          completedTask: false,
          failed: false
        },
        {
          taskTitle: "Client Meeting",
          taskDescription: "Discuss project requirements with stakeholders",
          taskDate: "2025-03-29",
          taskCategory: "Meeting",
          active: false,
          newTask: true,
          completedTask: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Bug Fixing",
          taskDescription: "Resolve reported issues from the QA team",
          taskDate: "2025-03-29",
          taskCategory: "Development",
          active: true,
          newTask: false,
          completedTask: false,
          failed: false
        },
        {
          taskTitle: "Security Audit",
          taskDescription: "Analyze vulnerabilities and enhance system security",
          taskDate: "2025-03-29",
          taskCategory: "Security",
          active: false,
          newTask: false,
          completedTask: true,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Feature Planning",
          taskDescription: "Discuss and finalize features for the next release",
          taskDate: "2025-03-29",
          taskCategory: "Meeting",
          active: true,
          newTask: false,
          completedTask: false,
          failed: false
        },
        {
          taskTitle: "Database Optimization",
          taskDescription: "Optimize SQL queries for better performance",
          taskDate: "2025-03-29",
          taskCategory: "Development",
          active: false,
          newTask: false,
          completedTask: false,
          failed: true
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Deployment",
          taskDescription: "Deploy the latest version of the application to production",
          taskDate: "2025-03-29",
          taskCategory: "Deployment",
          active: false,
          newTask: true,
          completedTask: false,
          failed: false
        },
        {
          taskTitle: "Testing New Features",
          taskDescription: "Perform regression and unit testing on new features",
          taskDate: "2025-03-29",
          taskCategory: "Testing",
          active: false,
          newTask: false,
          completedTask: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "UI/UX Enhancement",
          taskDescription: "Improve user interface and experience for better usability",
          taskDate: "2025-03-29",
          taskCategory: "Design",
          active: true,
          newTask: false,
          completedTask: false,
          failed: false
        },
        {
          taskTitle: "Customer Support",
          taskDescription: "Assist customers with technical issues",
          taskDate: "2025-03-29",
          taskCategory: "Support",
          active: false,
          newTask: false,
          completedTask: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
export const setLocalStorage = ()=>{

    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}

export const getLocalStorage = ()=>{

    const empData = JSON.parse(localStorage.getItem('employees'))
    const admnData = JSON.parse(localStorage.getItem('admin'))

    console.log(empData, admnData)
    
}