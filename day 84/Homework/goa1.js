class Admin extends User {
    constructor(name, email, adminLevel) {
        super(name, email);
        this.adminLevel = adminLevel;
    }

    getUserInfo() {
        return `Admin Name: ${this.name}, Email: ${this.email}, Admin Level: ${this.adminLevel}`;
    }
}
