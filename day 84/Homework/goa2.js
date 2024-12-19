// User და Admin კლასების მაგალითი
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getUserInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class Admin extends User {
    constructor(name, email, adminLevel) {
        super(name, email);
        this.adminLevel = adminLevel;
    }

    getUserInfo() {
        return `Admin Name: ${this.name}, Email: ${this.email}, Admin Level: ${this.adminLevel}`;
    }
}

// მომხმარებლისა და ადმინისტრაციის შექმნა
let user = new User("John Doe", "johndoe@example.com");
let admin = new Admin("Alice", "alice@example.com", "Super Admin");

// მონაცემების ჩასმა HTML-ში
document.getElementById('user-info').innerText = user.getUserInfo();
document.getElementById('admin-info').innerText = admin.getUserInfo();
