export class Contact {
    public name: string;
    public address: string;
    public email: string;
    public phone: string;
    public imagePath: string;
    public description: string;
    
  
    constructor(name: string, address:string, email: string, phone:string, imagePath: string, description:string) {
      this.name = name;
      this.address = address;
      this.email = email;
      this.phone = phone;
      this.imagePath = imagePath;
      this.description = description;
      
    }
  }