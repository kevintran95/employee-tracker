INSERT INTO departments (departments_name)
VALUES ("Executive Staff"),
        ("Engineering"),
       ("Legal"),
       ("Finance"),
       ('Sales');
       

INSERT INTO role (title, salary, departments_id)
VALUES ("Chief Executive Officer", 300000, 1),
        ("Head of Engineering", 200000, 2),
        ("Software Engineer", 150000, 3),
        ("Lawyer", 120000, 3),
        ("Accountant", 80000, 4),
        ("Sales Manager", 40000, 5),
        ("Sales Representative", 25000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stark", 1, NULL),
        ("Steven", "Rodgers", 2, NULL) ,
        ("Thor", "Odinson", 3, 2),
        ("Natasha", "Romanoff", 4, NULL),
         ("Xu", "Shang-Chi",5, NULL),
        ("Carol", "Danvers", 6, NULL),
        ("Peter", "Parker", 7, 6);
       



        





