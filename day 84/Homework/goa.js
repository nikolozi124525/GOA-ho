class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getUserInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}
