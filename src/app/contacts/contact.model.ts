export class Contact {
    public name: string;
    public address: string;
    public email: string;
    public phone: string;
    public city: string;
    public state: string;
    
  
    constructor(name: string, address:string, email: string, phone:string, city: string, state:string) {
      this.name = name;
      this.address = address;
      this.email = email;
      this.phone = phone;
      this.city = city;
      this.state = state;
      
    }
  }