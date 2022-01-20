CREATE TABLE IF NOT EXISTS usertable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT, 
    process TEXT
);

INSERT or IGNORE INTO usertable(id, user_name, process) VALUES (1, 'kavish1', 'Test1');
INSERT or IGNORE INTO usertable(id, user_name, process) VALUES (2, 'Gemini', 'Test2');
