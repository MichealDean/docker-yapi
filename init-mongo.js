
db.createUser({ user: 'admin', pwd: 'JJ12345678boost', roles: [ { role: "root", db: "admin" } ] });

db.auth("admin", "JJ12345678boost");
 db.createUser({
 user: 'jj_yapi',
 pwd: 'jj_yapi123456',
 roles: [
 { role: "dbAdmin", db: "yapi" },
 { role: "readWrite", db: "yapi" }
 ]

 });
