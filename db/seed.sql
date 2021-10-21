-- Insert value into department table
INSERT INTO department(dept_name)
VALUES("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal"),
    ("Marketing");
-- Insert value into role table
INSERT INTO role(title, salary, department_id)
VALUES("Engineer", 85000, 1),
    ("Senior Engineer", 125000, 1),
    ("CFO", 350000, 3),
    ("Chief Counsel", 300000, 4);
-- Insert value into employee table
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 2),
    ('James', 'Gibson', 1, null),
    ('Ronnie', 'Rodrigues', 1, 2),
    ('Jimmy', 'Choo', 2, 2),
    ('Larry', 'Smith', 4, null);